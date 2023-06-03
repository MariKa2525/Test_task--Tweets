import css from './UserCard.module.css';
import Foto from '../../images/picture.png';
import Avatar from '../../images/boy.png';
import Logo from '../../images/Logo.png';
import { useState } from 'react';

export const UserCard = () => {
  const [follower, setFollower] = useState(100500);
  const [name, setName] = useState('Follow');

  const addFollowers = evt => {
    setFollower(follower + 1);
    setName('Following');
    evt.currentTarget.style.backgroundColor = '#5CD3A8';
    if (name === 'Following') {
      setFollower(follower - 1);
      setName('Follow');
      evt.currentTarget.style.backgroundColor = '#ebd8ff';
    }
  };

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
            <span className={css.followersNumber}>
              {follower.toLocaleString('en-US')}
            </span>
            <p className={css.followersText}>Followers</p>
          </div>
          <button className={css.button} type="button" onClick={addFollowers}>
            {name}
          </button>
        </div>
      </div>
    </div>
  );
};
