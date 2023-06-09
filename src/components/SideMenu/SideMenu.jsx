import { Fragment, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { MailContext } from "../../contexts/MailContext";
import LogoImg from "../../assets/images/logo.png"

import "./SideMenu.css";

export const SideMenu = () => {
  const { state } = useContext(MailContext)
  const location = useLocation()
  const getActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "white" : "",
    borderLeft: isActive ? "6px solid skyblue" : "6px solid #f6f8fa",
    color: isActive ? "skyblue" :""
  });
  
  const inboxCount = state.inboxList.reduce((acc, curr) => curr.isSpam ? acc : acc +=1, 0)
  const readCount = state.inboxList.reduce((acc, curr) => (!curr.isSpam && curr.read) ? acc+=1 : acc, 0)
  const unreadCount = state.inboxList.reduce((acc, curr) => (!curr.isSpam && !curr.read) ? acc+=1 : acc, 0)
  const starCount = state.inboxList.reduce((acc, curr) => (!curr.isSpam && curr.isStarred) ? acc+=1 : acc, 0)
  const unstarCount = state.inboxList.reduce((acc, curr) => (!curr.isSpam && !curr.isStarred) ? acc+=1 : acc, 0)
  const searchCount = state.inboxList.reduce((acc, curr) => !curr.isSpam && curr.email_subject.toLowerCase().includes(state.searchTerm.toLowerCase()) ? acc += 1 : acc, 0)

  const searchCountSpam = state.inboxList.reduce((acc, curr) => curr.isSpam && curr.email_subject.toLowerCase().includes(state.searchTerm.toLowerCase()) ? acc += 1 : acc, 0)
  const readCountSpam = state.inboxList.reduce((acc, curr) => (curr.isSpam && curr.read) ? acc+=1 : acc, 0)
  const unreadCountSpam = state.inboxList.reduce((acc, curr) => (curr.isSpam && !curr.read) ? acc+=1 : acc, 0)

  const spamCount = state.inboxList.reduce((acc, curr) => curr.isSpam ? acc += 1 : acc, 0)
  const trashCount = state.trashList.length

  const getStarUnstar = () => {
    switch(state.starUnStarredFilter){
      case "star":
        return <span><i className="fa-solid fa-star side-menu-count-icon"></i>{starCount}</span>
      case "unstar":
        return <span><i className="fa-solid fa-star-half-stroke side-menu-count-icon"></i>{unstarCount}</span>
      default: 
        return null
    }
  }

  const getReadUnread = () => {
    if(location.pathname === "/spam"){
      return null
    }
    if(state.searchTerm){
      return <span><i class="fa-solid fa-magnifying-glass"></i>{searchCount}</span>
    }
    switch(state.readUnreadFilter){
      case "read":
        return <span><i className="fa-solid fa-envelope-open side-menu-count-icon"></i>{readCount}</span>
      case "unread":
        return <span><i className="fa-solid fa-envelope side-menu-count-icon"></i>{unreadCount}</span>
      default: 
        return null
    }
  }

  const getReadUnreadSpam = () => {
    if(location.pathname === "/"){
      return null
    }
    if(state.searchTerm){
      return <span><i class="fa-solid fa-magnifying-glass"></i>{searchCountSpam}</span>
    }
    switch(state.readUnreadFilter){
      case "read":
        return <span><i className="fa-solid fa-envelope-open side-menu-count-icon"></i>{readCountSpam}</span>
      case "unread":
        return <span><i className="fa-solid fa-envelope side-menu-count-icon"></i>{unreadCountSpam}</span>
      default: 
        return null
    }
  }

  return (
    <Fragment>
      <div className="side-menu-logo-container">
        <span className="logo-container">
          <img src={LogoImg} className="side-menu-logo" />
        </span>
      </div>
      <nav className="menu-container">
        <NavLink style={getActiveStyle} className="menu-item active" to="/">
          <i className="fa-solid fa-inbox menu-item-icon"></i>Inbox
          <span className="side-menu-count side-menu-unread-count">
            {
              (getStarUnstar() || getReadUnread() ||inboxCount)
            }
          </span>
          {/* <span className="side-menu-count side-menu-unread-count">
            {
              
            }
          </span>
          <span className="side-menu-count side-menu-unread-count">
            {
              !getReadUnread() && !getStarUnstar() && inboxCount
            }
          </span> */}
        </NavLink>
        <NavLink style={getActiveStyle} className="menu-item" to="/spam">
          <i className="fa-solid fa-exclamation-triangle menu-item-icon"></i>Spam
          <span className="side-menu-count side-menu-spam-count">
            {
              getReadUnreadSpam() || spamCount
            }
          </span>
          {/* <span className="side-menu-count side-menu-spam-count">{spamCount}</span> */}
        </NavLink>
        <NavLink style={getActiveStyle} className="menu-item" to="/trash">
          <i className="fa-solid fa-trash menu-item-icon"></i>Trash<span className="side-menu-count side-menu-trash-count">{trashCount}</span>
        </NavLink>
        {/* <NavLink style={getActiveStyle} className="menu-item" to="/starred">
          <i className="fa-solid fa-star menu-item-icon"></i>Starred<span className="side-menu-count side-menu-starred-count">{trashCount}</span>
        </NavLink> */}
      </nav>
    </Fragment>
  );
};
