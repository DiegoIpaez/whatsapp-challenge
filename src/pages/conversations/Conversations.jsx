import styles from './conversations.module.css';
import ChatList from '@/components/conversations/chatList/ChatList';

function Conversations() {
  return (
    <div>
      <div className={styles.navbar}>
        <h4>Chats</h4>
      </div>
      <ChatList />
    </div>
  );
}

export default Conversations;
