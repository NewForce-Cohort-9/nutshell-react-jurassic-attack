import { useEffect, useState } from "react";
import "./chat.css";
import { createNewChat, getAllChat } from "../services/chatServices";
import { Button } from "reactstrap";
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
              return (
                <div className="message">
                  <h3>{chat.user.username}</h3>
                  <p>{chat.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="message">
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
