import { useParams } from 'react-router-dom';
import { CHAT_COLLECTION } from '@/constants/chats.contants';
import messageBg from '@/assets/img/messages-bg.jpg';
import styles from './chat.module.css';

const Chat = () => {
  const { id } = useParams();
  const chat = CHAT_COLLECTION.find((chat) => chat?.id === parseInt(id));

  return (
    <div>
      <div className={styles.receiverHeader}>
        <img
          className={styles.profilePicture}
          src={chat?.profilePicture}
          alt={`profile-picture-${chat?.name}`}
        />
        <span>{chat?.name}</span>
      </div>
      <div
        style={{ backgroundImage: `url(${messageBg})` }}
        className={styles.messages}
      ></div>
      <div className={styles.chatInputContainer}>
        <input
          className={styles.chatInput}
          placeholder="Escribe un mensaje"
          type="text"
        />
      </div>
    </div>
  );
};

export default Chat;
