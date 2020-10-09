import React, { useState, useEffect } from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css';

import RelevantPost from '../../components/RelevantPost';
import Comments from '../../components/Comments';

function Post(props) {
  const id_post = props.match.params.post_id;

  const [post, setPost] = useState({});
  const [relevantPosts, setRelevantPost] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      const response = await api.get(`/post/${id_post}`);

      setPost(response.data);
    }

    loadPost();
  }, [id_post]);

  useEffect(() => {
    const loadRecentPost = async () => {
      const response = await api.get(`/`);

      setRelevantPost(response.data);
    }

    loadRecentPost();
  }, []);

  const shareFacebook = (e) => {
    e.preventDefault();
    var link = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    window.open(link);
  }

  const shareWhatsapp = (e) => {
    e.preventDefault();
    var msg = `Olha que legal esse post da Oposição Areial(MDB 15)\n\n${window.location.href}`
    msg = window.encodeURIComponent(msg);
    window.open("https://api.whatsapp.com/send?text=" + msg, "_blank");
  }

  return (
    <div className="post">
      <div className="container">
        <div className="infos">
          <div className="title">
            { post.title }
          </div>
          <div className="description">
            { post.resume }
          </div>
          <div className="details">
            <blockquote>por <span>{ post.author }</span></blockquote>
            <div className="circle"></div>
            <div className="date">
              { new Date(post.created_at).toLocaleDateString('pt-BR') }
            </div>
          </div>
        </div>
        <div className="content">
          <div className="post-content">
            <div className="media">
              {post.youtube
                ? <iframe title={post.title} width="100%" height="500" src={post.youtube} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                : <img src={ `https://oposicaoareial.000webhostapp.com/storage${post.image}` } alt={ post.title } />
              }
            </div>
            <p className="text">
              { post.body }
            </p>
          </div>
          <div className="relevant-posts-content">
            <div className="relevant-posts">
              {relevantPosts.map( (relevant_post, index) => (
                <RelevantPost relevant_post={relevant_post} key={index} />
              ))}
            </div>
            <div className="share-buttons">
              <div onClick={shareFacebook} className="share-button share-button-facebook">
                <FaFacebook />
              </div>
              <div onClick={shareWhatsapp} className="share-button share-button-whatsapp">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>
        <Comments data={{
          identifier: id_post,
          title: post.title,
        }} />
      </div>
    </div>
  );
}

export default Post;