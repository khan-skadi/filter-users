import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import { users } from '../../util/constants';
import { countries } from '../../util/countries';
import { sortByAge, sortById } from '../../util/sortList';

const Users = () => {
  const [userList, setUserList] = useState(users);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const addCountry = userList.map(
      (user) =>
        (user = {
          ...user,
          country: pickCountry(countries),
          showExtraInfo: false
        })
    );
    setUserList(addCountry);

    //eslint-disable-next-line
  }, []);

  const pickCountry = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const showCountry = (id) => {
    const user = userList.find((user) => user.id === id);
    const list = userList.filter((item) => item.id !== id);
    // const filteredList = sortById([
    //   ...list,
    //   { ...user, showExtraInfo: !user.showExtraInfo }
    // ])
    const filteredList = [
      { ...user, showExtraInfo: !user.showExtraInfo },
      ...list,
    ]
    setUserList(filteredList);
  };

  const handleSort = () => {
    const list = [].concat(userList);
    const sortedList = sortByAge(list);
    setUserList(sortedList);
  };

  return (
    <>
      <section className="user-filter">
        <label htmlFor="input-field">Filter Users by Name</label>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <transition name="fade">
          <span className="user-filter__no-users-found"></span>
        </transition>
        <button className="filter-button" onClick={handleSort}>
          Sort by Age
        </button>
      </section>
      <UserList
        users={userList}
        inputValue={inputValue}
        showCountry={showCountry}
      />
    </>
  );
};

export default Users;
