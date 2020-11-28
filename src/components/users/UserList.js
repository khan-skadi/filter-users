import React from 'react';
import ListItem from './ListItem';

const UserList = ({ users, inputValue, showCountry }) => {
  const renderList = (userList) => {
    if (inputValue.length >= 3) {
      const filteredUsers = userList.filter((user) =>
        user.firstname.toLowerCase().includes(inputValue)
      );
      const count = filteredUsers.length;
      return <ListItem users={filteredUsers} showCountry={showCountry} count={count} />;
    } else {
      return <ListItem users={userList} showCountry={showCountry} />;
    }
  };

  return (
    <div className="user-list">
      <ul>{renderList(users)}</ul>
    </div>
  );
};

export default UserList;
