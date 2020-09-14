import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function RelevantPost(props) {
  const { id, image, title } = props.relevant_post;
  return (
    <Link to={ `/blog/${id}` } className="relevant-post">
      <div className="image">
        <img src={ `https://oposicaoareial.000webhostapp.com/storage${image}` } alt=""/>
      </div>
      <div className="title">
        {title}
      </div>
    </Link>
  );
}

export default RelevantPost;