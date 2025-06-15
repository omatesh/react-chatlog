import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  let messageComponents = [];

  if (props.entries) {
    messageComponents = props.entries.map((message) => {
      return (
        <li key={message.id}>
          <ChatEntry
            id={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            likeToggleFunc={props.likeToggleFunc}
          />
        </li>
      );
    });
  }

  return (
    <section className="chat-log">
      <ul>{messageComponents}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  likeToggleFunc: PropTypes.func.isRequired,
};

export default ChatLog;
