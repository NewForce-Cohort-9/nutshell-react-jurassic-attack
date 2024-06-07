//Author: Seth, Purpose: Displays chat messages from all users in one chat box with the chat message and username. Input and submit button to create a new message. Displays an edit chat button for the logged in user's messages.

import { useEffect, useState } from "react";
import "./chat.css";
import { createNewChat, getAllChat } from "../services/chatServices";
import { Link } from "react-router-dom";
export const Chat = ({ currentUser }) => {
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState({});
  useEffect(() => {
    getAllChat().then((chatArray) => {
      setChats(chatArray);
    });
  }, [message]);

  const handleSave = (event) => {
    const chat = {
      userId: currentUser.id,
      text: message.text,
    };
    createNewChat(chat);
  };

  return (
    <div>
      <div className="chat">
        <div className="chat-display">
          <div className="chat-box">
            {chats.map((chat) => {
                if(chat.userId === currentUser.id) {
                    return (
                      <div className="message">
                                                <Link to={`${chat.id}/editChat`}><button className="chat-button">Edit</button></Link>
                        <p><b>{chat.user.username}</b></p>
                        <p>{chat.text}</p>

                      </div>
                    );

                } else{
                    return (
                        <div className="message">
                          <p><b>{chat.user.username}</b></p>
                          <p>{chat.text}</p>
                        </div>
                      );
                }
            })}
          </div>
        </div>
        <div>
          <form>
            <fieldset>
              <input
                text="text"
                placeholder="Type your message here!"
                onChange={(event) => {
                  const messageCopy = { ...message };
                  messageCopy.text = event.target.value;
                  setMessage(messageCopy);
                }}
              ></input>
            </fieldset>
            <fieldset>
              <button className="button" onClick={handleSave}>Send Message</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
