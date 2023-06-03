import css from './UserCard.module.css';
import Foto from '../../images/picture.png';
import Avatar from '../../images/boy.png';
import Logo from '../../images/Logo.png';

export const UserCard = () => {
  return (
    <div>
      <div className={css.user}>
        <img src={Logo} alt="Logo" className={css.logo} />

        <div className={css.description}>
          <div className={css.imageWrap}>
            <img src={Foto} alt="User avatar" />
          </div>
          <div className={css.avatarWrap}>
            <div className={css.line}></div>
            <img src={Avatar} alt="User avatar" className={css.avatar} />
          </div>

          <p className={css.tweets}>777 Tweets</p>
          <div className={css.followers}>
            <span className={css.followersNumber}>100,500</span>
            <p className={css.followersText}>Followers</p>
          </div>
          <button className={css.button} type="button">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};
