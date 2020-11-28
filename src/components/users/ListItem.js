import React from 'react';

export default function ListItem({ users, showCountry, count }) {
  const list = users.map((user) => (
    <li key={user.id}>
      <article className="user">
        <button className="user__trigger" onClick={() => showCountry(user.id)}>
          <div className="user__image">
            <img src={user.img} alt="" />
          </div>
          <div className="user__info">
            <h2>
              {user.firstname} {user.lastname}
            </h2>
            <p className="user__age">{user.age}</p>
          </div>
        </button>
        {user.showExtraInfo ? (
          <div className="user__extra-info">{user.country}</div>
        ) : null}
      </article>
    </li>
  ));

  if (users.length === 0) return <div>results are empty</div>;
  return (
    <>
      {count > 0 ? <div>Found {count} results</div> : null}
      {list}
    </>
  );
}
