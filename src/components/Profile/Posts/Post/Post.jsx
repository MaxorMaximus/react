import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://media.vanityfair.com/photos/5c5325d33889055ec0570bcf/5:3/w_2000,h_1200,c_limit/t-ava-max-interview.jpg' />
      { props.message }
      <div>
        <span>{props.like}</span>
      </div>
    </div>
  )
}

export default Post;
