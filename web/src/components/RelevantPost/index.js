import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function RelevantPost(props) {
  const { linkTo, imageURL, title } = props.relevant_post;
  return (
    <Link to={linkTo} className="relevant-post">
      <div className="image">
        <img src={imageURL} alt=""/>
      </div>
      <div className="title">
        {title}
      </div>
    </Link>
  );
}

export default RelevantPost;