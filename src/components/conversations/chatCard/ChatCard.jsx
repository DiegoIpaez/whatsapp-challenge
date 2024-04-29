import { formatTime } from '@/utils/formatDate.utils';
import { Link } from 'react-router-dom';
import styles from './chatCard.module.css';

const ChatCard = ({ chat, chatSelected, setChatSelected }) => {
  return (
    <Link
      to={`/chat/${chat?.id}`}
      key={chat?.id}
      onClick={() => setChatSelected(chat?.id)}
      style={{ textDecoration: 'none' }}
    >
      <div
        className={`${styles.cardContainer} ${
          chatSelected === chat?.id && styles.cardSelected
        }`}
      >
        <img
          className={styles.profilePicture}
          src={chat?.profilePicture}
          alt={`profile-picture-${chat?.name}`}
        />
        <div className={styles.chatDescription}>
          <div>
            <span className={styles.chatName}>{chat?.name}</span>
            <span className={styles.chatDate}>
              {formatTime(chat?.lastMessage?.createdAt)}
            </span>
          </div>
          <div>
            <span className={styles.chatMsg}>{chat?.lastMessage?.message}</span>
            {chat?.unreadMessages > 0 && (
              <span className={styles.chatUnreadMsg}>
                {chat?.unreadMessages}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatCard;
