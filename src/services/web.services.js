export function OpenURL_NewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}
