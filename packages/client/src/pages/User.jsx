import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Profile(){
  const location = useLocation();
  const userList = location.state?.userList;

  return(
    <section>
      <h1 className='text-xl mb-5'>User 정보</h1>
      <ul>
        {userList?.map((user) => <li key={user.id}>{user.id} : {user.email}</li>)}
      </ul>
    </section>
  );
}
