import React from 'react';
import image_test from "../../assets/images/image.jpg";

import './styles.css';

import Post from '../../components/Post';

function Blog() {
  // Request API with pagination
  const posts = [
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    },
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    },
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    },
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    },
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    },
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Algum Candidato",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo convallis lorem, efficitur aliquam quam posuere id. Quisque vitae orci orci. In aliquam bibendum turpis vitae cursus"
    }
  ];

  return (
    <div className="blog">
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar..." />
      </div>
      <div className="posts">
        <div className="container">
          {posts.map( (post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;