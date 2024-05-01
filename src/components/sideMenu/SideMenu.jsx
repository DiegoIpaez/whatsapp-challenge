import ArchivedIcon from '../ui/icon/ArchivedIcon';
import ChannelIcon from '../ui/icon/ChannelIcon';
import ChatIcon from '../ui/icon/ChatIcon';
import CommunityIcon from '../ui/icon/CommunityIcon';
import ConfigIcon from '../ui/icon/ConfigIcon';
import FavoriteIcon from '../ui/icon/FavoriteIcon';
import StatesIcon from '../ui/icon/StatesIcon';
import UserIcon from '../ui/icon/UserIcon';
import styles from './sideMenu.module.css';

const SideMenu = () => {
  return (
    <>
      <div className={styles.menuNav}>
        <div className={styles.itemSelected}>
          <ChatIcon isOutline={false} />
        </div>
        <div className={styles.item}>
          <CommunityIcon />
        </div>
        <div className={styles.item}>
          <StatesIcon />
        </div>
        <div className={styles.item}>
          <ChannelIcon />
        </div>
        <div className={styles.divisor}>-</div>
        <div className={styles.item}>
          <ArchivedIcon />
        </div>
        <div className={styles.item}>
          <FavoriteIcon />
        </div>
      </div>
      <div className={styles.menuConf}>
        <div className={styles.item}>
          <ConfigIcon />
        </div>
        <div className={styles.item}>
          <UserIcon />
        </div>
      </div>
    </>
  );
};

export default SideMenu;
