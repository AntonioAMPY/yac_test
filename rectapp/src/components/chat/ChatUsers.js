import React from "react";

/* Components */
import ChatList from "./ChatList";

const ChatUsers = ({ ClientsOnline }) => {
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
      <div className="card-header">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search..."
            name=""
            className="form-control search"
          />
          <div className="input-group-prepend">
            <span className="input-group-text search_btn">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
        <div className="card-body contacts_body">
          <ul className="contacts">
            <li className="active">
              <ChatList ClientsOnline={ClientsOnline} />
            </li>
          </ul>
        </div>
      </div>
    </div>
 
  );
};

export default ChatUsers;
