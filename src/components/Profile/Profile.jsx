import React from 'react';
import MyPosts from './Posts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://www.ultragadget.ru/images/pictures/5.jpg' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
  
}

export default Profile;
