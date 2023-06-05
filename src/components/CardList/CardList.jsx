// import { Contact } from '../Contact/Contact';
import css from './CardList.module.css';
import { useSelector } from 'react-redux';
import { UserCard } from 'components/UserCard/UserCard';

export const CardList = () => {
  const users = useSelector(state => state.users.items);

  console.log(users);

  return (
    <ul className={css.list}>
      {users &&
        users.map(user => {
          return (
            <li className={css.item} key={user.id}>
              <UserCard
                tweets={user.sweets}
                follower={user.followers}
                id={user.id}
                avatar={user.avatar}
              />
            </li>
          );
        })}
    </ul>
  );
};
