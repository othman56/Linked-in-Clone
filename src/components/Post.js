import React, { forwardRef } from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post-header">
        <Avatar src="photoURL">{name ? name[0] : "g"}</Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>

      <div className="post-buttons">
        <InputOptions Icon={ThumbUpAltIcon} title="like" color="gray" />
        <InputOptions Icon={ChatIcon} title="comment" color="gray" />
        <InputOptions Icon={ShareIcon} title="share" color="gray" />
        <InputOptions Icon={SendIcon} title="send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
