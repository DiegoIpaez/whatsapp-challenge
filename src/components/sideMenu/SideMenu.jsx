import ChatIcon from '../ui/icon/ChatIcon';
import styles from './sideMenu.module.css';

const SideMenu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.item}>
        <ChatIcon isOutline={false} />
      </div>
    </div>
  );
};

export default SideMenu;
