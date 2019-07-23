import { FE_Item, I } from "./index.config";

export function clean_data(prop) {
  // https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
  let data = JSON.parse(JSON.stringify(prop));
  // Merge Duplicate REV rows caused by supporting documents data structure
  for (let i = data.length - 1; i >= 0; i--) {
    if (i > 0 && data[i].rev === data[i - 1].rev) {
      if (data[i].sup_doc != null) {
        data[i - 1].sup_doc += ` + ${data[i].sup_doc}`;
      }
      data.splice(i, 1);
    }
  }
  // Replace NULL rows with data from previous entries
  for (let i = 0; i < data.length - 1; i++) {
    for (var property in data[i]) {
      if (data[i].hasOwnProperty(property)) {
        if (data[i + 1][property] === null) {
          data[i + 1][property] = data[i][property];
        }
      }
    }
  }
  return data;
}

export function convert_data(prop) {
  // https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
  let data = JSON.parse(JSON.stringify(prop));
  // Filter through data to find changes and push to new array
  let front_end = [];
  data.forEach(function(element, index) {
    switch (index) {
      // Creation Row
      case 0:
        front_end.push(
          new FE_Item(
            element.updated_date,
            "User Creation",
            "N/A",
            `cdn#${element.rev}`,
            element.aud_name
          )
        );
        break;
      // Other Rows
      default:
        // Iterate through each property in the row
        for (var property in element) {
          if (element.hasOwnProperty(property)) {
            I.forEach(function(a_property) {
              if (a_property === property) {
                if (element[property] !== data[index - 1][property]) {
                  front_end.push(
                    new FE_Item(
                      element.updated_date,
                      property,
                      data[index - 1][property],
                      element[property],
                      element.aud_name
                    )
                  );
                }
              }
            });
          }
        }
        break;
    }
  });
  return front_end;
}
