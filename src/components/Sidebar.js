import React from "react";
import "./Sidebar.css";
import { AccountCircle } from "@mui/icons-material";
import usman from "./usman.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={usman} alt="" />
        <Avatar alt="Cindy Baker" src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
      </div>
      <div className="sidebar-button">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("programming")}
        {recentItem("software development")}
        {recentItem("technologies")}
      </div>
    </div>
  );
}

export default Sidebar;
