import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const likeButtonClicked = () => {
    props.likeToggleFunc(props.id);
  };

  return (
    <div className={props.senderType === 'local' ? 'chat-entry local' : 'chat-entry remote'}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">Time Sent: <TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={likeButtonClicked}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  senderType: PropTypes.oneOf(['local', 'remote']).isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likeToggleFunc: PropTypes.func.isRequired,
};

export default ChatEntry;

