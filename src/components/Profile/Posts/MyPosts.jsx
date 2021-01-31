import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  
  let postData = [
    {message: 'Hi, how are you', like: 'like 2', id: '1'},
    {message: 'It`s my first post' , like: 'like 10', id: '2'}
  ]

  let postElemens = postData.map(message => <Post message={message.message} like={message.like} id={message.id} /> );

  return (
    <div className={s.postBlock}>
      <div>
        <h3>My posts</h3>
      <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postElemens}
          {/* <Post message={postData[0].message} like={postData[0].like} />
          <Post message={postData[1].message} like={postData[1].like} /> */}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;
