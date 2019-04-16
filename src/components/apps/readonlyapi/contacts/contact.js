// =================================================================================
// ==   File    : contact.js
// ==   Author  : John Desjardins | K3nata8
// ==   Version : 0.0.1
// ==   Date    : March 2019
// =================================================================================

// =================================================================================
// === Imports :
// =================================================================================
import React from "react";
import { _CONTACT_READER_STRINGS } from "../data";

// =================================================================================
// === Contact.Component.Home :
// =================================================================================
export function Contact(props) {
  return (
    <div>
      <div className="w-100">
        {/* Loading Users */}
        {props._props.isLoading && <ContactHomeLoading />}
        {/* Failed to Load Users */}
        {props._props.error && <Error _error={props._props.error} />}
        {/* Users Loaded Successfully */}
        {!props._props.isLoading && props._props.user && !props._props.error && (
          <div className="w-100 row m-0">
            <div className="col-4 user-list p-0">
              <UserList
                _active={props._props.isActive}
                _users={props._props.user}
                _callback={props._callback}
              />
            </div>
            <div className="col-8 p-0">
              <UserDetails
                _activeUser={props._props.user[props._props.isActive]}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// =================================================================================
// === Contact.Component.List :
// =================================================================================
function UserList(props) {
  let users = props._users;

  let UserList = users.map((item, index) => (
    <div
      key={index}
      className={
        "m-0 contact-list-item row align-items-center" +
        isActive(index, props._active)
      }
      onClick={props._callback(index)}
    >
      <div className="media h-100">
        <img
          src={item.picture.thumbnail}
          className="user-avatar align-self-center mr-3"
          alt="User Avatar"
        />
        <div className="media-body my-auto">
          <small className="text-truncate">
            {jsUcfirst(item.login.username)}
          </small>
        </div>
      </div>
    </div>
  ));

  return UserList;
}

function isActive(key, active) {
  if (key === active) {
    return " active";
  } else {
    return "";
  }
}

// =================================================================================
// === Contact.Component.Details :
// =================================================================================
function UserDetails(props) {
  const user = props._activeUser;

  return (
    <div className="w-100 user-details">
      <div class="media">
        <img src={user.picture.large} class="mr-3 large-avatar" alt="..." />
        <div class="media-body">
          <h5 class="mt-0">{jsUcfirst(user.login.username)}</h5>
          <small class="muted my-0">
            <i>{user.email}</i>
          </small>
          <div className="w-100 text-center mt-2">
            <DetailsTable _user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailsTable(props) {
  const user = props._user;

  return (
    <table class="table table-borderless table-sm table-responsive text-light">
      <tbody>
        <DetailsTableRow
          _icon="fas fa-user"
          _title="Name"
          _content={
            jsUcfirst(user.name.first) + " " + jsUcfirst(user.name.last)
          }
        />
        <DetailsTableRow
          _icon="far fa-user"
          _title="Gender"
          _content={jsUcfirst(user.gender)}
        />
        <DetailsTableRow
          _icon="fas fa-calendar-day"
          _title="Date of Birth"
          _content={getDate(user.dob.date)}
        />
        <DetailsTableRow
          _icon="far fa-clock"
          _title="Age"
          _content={user.dob.age}
        />
        <DetailsTableRow
          _icon="fas fa-phone"
          _title="Phone (Home)"
          _content={user.phone}
        />
        <DetailsTableRow
          _icon="fas fa-mobile-alt"
          _title="Phone (Cell)"
          _content={user.cell}
        />
        <DetailsTableRow
          _icon="fas fa-home"
          _title="Address"
          _content={`${capital_letter(user.location.street)}.`}
        />
        <DetailsTableRow
          _icon={""}
          _title={""}
          _content={`${capital_letter(user.location.city)}, ${capital_letter(
            user.location.state
          )}`}
        />
        <DetailsTableRow
          _icon={""}
          _title={""}
          _content={`Canada, ${user.location.postcode}`}
        />
      </tbody>
    </table>
  );
}

function getDate(date_string) {
  var d = new Date(date_string);
  var options = { year: "numeric", month: "long", day: "numeric" };
  return d.toLocaleDateString("en-US", options);
}

function DetailsTableRow(props) {
  return (
    <tr>
      <td className="align-middle text-center">
        <small>
          <i class={props._icon} />
        </small>
      </td>
      <td className="align-middle text-left">
        <small>{props._title}</small>
      </td>
      <td className="align-middle">
        <small>:</small>
      </td>
      <td className="align-middle text-left">
        <small className="muted">{props._content}</small>
      </td>
    </tr>
  );
}

// =================================================================================
// === Contact.Component.Extras : Loading & Failure 2 Load
// =================================================================================
function Error(props) {
  return (
    <div className="row m-0 error-box w-100">
      <div className="col align-self-center container">
        <div className="alert alert-dark m-0" role="alert">
          <h4 className="alert-heading">
            {_CONTACT_READER_STRINGS.error.title}
          </h4>
          <p>{_CONTACT_READER_STRINGS.error.body}</p>
          <hr className="mb-3" />
          <p className="mb-0">
            {" "}
            <strong>{_CONTACT_READER_STRINGS.error.messageLabel}</strong>{" "}
            {props._error.message}
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactHomeLoading(props) {
  return (
    <div className="spinner row align-items-center w-100 m-0">
      <div className="col text-center">
        <div className="spinner-grow text-light mx-2" role="status" />
        <div className="spinner-grow text-light mx-2" role="status" />
        <div className="spinner-grow text-light mx-2" role="status" />
        <div className="spinner-grow text-light mx-2" role="status" />
        <div className="spinner-grow text-light mx-2" role="status" />
      </div>
    </div>
  );
}

// =================================================================================
// === Miscelaneous :
// =================================================================================

// https://stackoverflow.com/questions/5073799/how-to-sort-a-javascript-array-of-objects-by-nested-object-property
// objs.sort(nestedSort("last_nom"));
// objs.sort(nestedSort("last_nom", null, "desc"));
// objs.sort(nestedSort("moreDetails", "age"));
// objs.sort(nestedSort("moreDetails", "age", "desc"));

// let nestedSort = (prop1, prop2 = null, direction = "asc") => (e1, e2) => {
//   const a = prop2 ? e1[prop1][prop2] : e1[prop1],
//     b = prop2 ? e2[prop1][prop2] : e2[prop1],
//     sortOrder = direction === "asc" ? 1 : -1;
//   return a < b ? -sortOrder : a > b ? sortOrder : 0;
// };

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capital_letter(str) {
  str = str.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}
