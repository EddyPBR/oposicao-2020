import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Post(props) {
  const { id, image, title, author, body } = props.post;
  return (
    <Link to={ `/blog/${id}` } className="post-box">
      <div className="image">
        <img src={ `https://oposicaoareial.000webhostapp.com/storage${image}` } alt={ title }/>
      </div>
      <div className="title">
        {title}
      </div>
      <blockquote>por <span>{author}</span></blockquote>
      <p>
        {body}
      </p>
    </Link>
  );
}

export default Post;