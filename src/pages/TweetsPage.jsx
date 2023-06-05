import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/usersOperation';
import { selectIsLoading } from 'redux/users/usersSelector';

import { CardList } from 'components/CardList/CardList';

// export const userLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

const TweetsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <title>Your tweets</title>
      <CardList />

      <div>{isLoading && 'Request in progress...'}</div>
    </>
  );
};

export default TweetsPage;
