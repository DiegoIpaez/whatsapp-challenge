import { useState } from 'react';
import { CHAT_COLLECTION } from '@/constants/chats.contants';
import ChatCard from '../chatCard/ChatCard';
import styles from './chatList.module.css';

const ChatList = () => {
  const [chatSelected, setChatSelected] = useState(null);
  return (
    <div className={styles.chatListContainer}>
      {CHAT_COLLECTION.map((chat) => (
        <ChatCard
          chat={chat}
          key={chat?.id}
          chatSelected={chatSelected}
          setChatSelected={setChatSelected}
        />
      ))}
    </div>
  );
};

export default ChatList;
