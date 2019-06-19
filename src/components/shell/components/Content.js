// =================================================================================
// === App.Component.MainContent :
// =================================================================================
import React from "react";
import { _SIDE_NAV_LIST, _SIDE_NAV_APPS } from "../../../config/App.config";

export default function MainContent(props) {
  return (
    <div className="text-light flex-grow-1 overflow_scroll main-content">
      <div className="App_content">{_renderContent(props._content)}</div>
    </div>
  );
}

function _renderContent(active_id) {
  let nav_check = _SIDE_NAV_LIST.concat(_SIDE_NAV_APPS);
  for (let i = 0; i < nav_check.length; i++) {
    if (nav_check[i].id === active_id) {
      let Content = nav_check[i].content;
      if (Content) {
        return <Content />;
      }
    }
  }
}
