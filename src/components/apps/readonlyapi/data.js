// =================================================================================
// ==   File    : PDF_reader.data.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import { Contact } from "./contacts/contact";
import Weather from "./weather/weather";

// =================================================================================
// === Custom Classes :
// =================================================================================
class _Contact_NavList {
  constructor(id, title, content, media) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.media = media;
  }
}

// =================================================================================
// === Strings :
// =================================================================================
export const _CONTACT_READER_STRINGS = {
  media: {
    title: "Random User API Projects",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus euismod ex, " +
      "vel posuere est tincidunt et. Cras gravida velit eget rhoncus iaculis. Cras elit mi, porta id ultrices " +
      "pretium, tristique id neque. Ut id semper tellus, vitae molestie erat. Vestibulum venenatis aliquet nulla " +
      "at aliquet. Pellentesque viverra, tellus non ullamcorper iaculis, arcu arcu ultricies ligula, tempus " +
      "luctus mauris nisl eu tellus. Pellentesque id maximus augue. Donec eros magna, mattis eget vestibulum at, " +
      "imperdiet dictum neque. Etiam tortor arcu, faucibus ac porta a, vehicula vitae urna. " +
      "Vivamus ac convallis ante, sit amet volutpat tortor."
  },
  error: {
    title: "API Request Failed!",
    body:
      "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so " +
      "that you can see how spacing within an alert works with this kind of content.",
    messageLabel: "Error Message :"
  },
  weather: {
    gettingLocation: {
      title: "Getting your location!",
      body:
        "This may take a few seconds, if it is taking longer than normal refresh the page or check your browser " +
        "settings to allow location tracking."
    }
  }
};

// =================================================================================
// === Constants :
// =================================================================================
export const _CONTACT_NAV_LIST = [
  new _Contact_NavList("CHK_001", "Contacts", Contact),
  new _Contact_NavList("CHK_002", "Weather", Weather),
  new _Contact_NavList("CHK_003", "Hockey", null)
];
