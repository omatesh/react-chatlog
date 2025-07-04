import './App.css';
import { useState } from 'react';
import messagesData from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [messageList, setMessageList] = useState(messagesData);

  const likeToggleFunc = (messageId) => {
    const messages = messageList.map(message => {
      if (message.id === messageId) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });

    setMessageList(messages);
  };

  const totalLikes = messageList
    .filter((message) => message.liked)
    .length;

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <div>
          {totalLikes} ❤️s
        </div>
      </header>
      <main>
        <ChatLog
          entries={messageList}
          likeToggleFunc={likeToggleFunc}
          localSender="Vladimir"
        />
      </main>
    </div>
  );
};

export default App;