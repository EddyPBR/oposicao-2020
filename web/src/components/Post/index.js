import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Post(props) {
  const { linkTo, imageURL, title, author, description } = props.post;
  return (
    <Link to={linkTo} className="post-box">
      <div className="image">
        <img src={imageURL} alt="Test"/>
      </div>
      <div className="title">
        {title}
      </div>
      <blockquote>por <span>{author}</span></blockquote>
      <p>
        {description}
      </p>
    </Link>
  );
}

export default Post;