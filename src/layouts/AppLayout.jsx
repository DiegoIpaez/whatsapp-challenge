import styles from './appLayout.module.css';
import Conversations from '@/pages/conversations/Conversations';
import SideMenu from '@/components/sideMenu/SideMenu';

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.sideMenuContainer}>
        <SideMenu />
      </div>
      <div className={styles.conversationsContainer}>
        <Conversations />
      </div>
      <div className={styles.chatContainer}>{children}</div>
    </div>
  );
};

export default Layout;
