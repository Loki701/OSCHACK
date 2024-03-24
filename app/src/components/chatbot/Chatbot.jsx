import React, { useState } from 'react';
import './Chatbot.css';

const Message = ({ text, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      {text}
    </div>
  );
};

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: 'Hello! How can I help you learn more about Dino Energy?', isUser: false }]);
  const [inputValue, setInputValue] = useState('');
  const [expanded, setExpanded] = useState(false); // State to track expansion

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage = { text: inputValue, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Use callback to ensure correct message addition
    setInputValue('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const responseData = await response.json();
      const botMessage = { text: responseData.response, isUser: false };
      setMessages((prevMessages) => [...prevMessages, botMessage]); // Use callback to ensure correct message addition
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      className={`chatbot ${expanded ? 'expand' : 'extend'} `}
      onClick={!expanded? toggleExpansion: undefined}
    >
      {expanded ? (
        <>
            <div className="exit" onClick={toggleExpansion}>exit</div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <Message key={index} text={message.text} isUser={message.isUser} />
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
            />
          </div>
        </>
      ) : (
        <div>Chat</div>
      )}
    </div>
  );
};

export default Chatbot;
