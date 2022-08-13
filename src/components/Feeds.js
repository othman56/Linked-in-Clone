import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "./feed.css";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feeds() {
  const [posts, setposts] = useState([]);
  const [input, setinput] = useState("");
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setposts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setinput("");
  };
  return (
    <div className="feed-container">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />

          <form className="feed-form">
            <input
              type="text"
              placeholder="start a post"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              send
            </button>
          </form>
        </div>

        <div className="feed-inputOptions">
          <InputOptions Icon={ImageIcon} title="photo" color="#7b0589" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="video"
            color="#e7a33e"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#c0c0cd" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* posts */}

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoURL } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feeds;
