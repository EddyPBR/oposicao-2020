import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';

import api from '../../services/api';

import './styles.css';

import Post from '../../components/Post';

function Blog() {
  const [atualPage, setAtualPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState({});

  useEffect(() => {
    async function loadPosts(){
      const response = await api.get('blog', {
        params: {
          page: atualPage
        }
      });

      const { data, ...pagination } = response.data;

      setPosts(data);
      setPages(pagination);
    }

    loadPosts();
  }, [atualPage]);

  return (
    <div className="blog">
      <div className="search-bar">
        <div className="container">
          <input type="text" placeholder="Pesquisar..." />
          <FiSearch className="icon" />
        </div>
      </div>
      <div className="container-post">
        <div className="posts">
          { posts.map((post, index) => <Post post={post} key={index} /> ) }
        </div>
        <div className="pagination">
          { pages.current_page === 1 ? (
            null
          ) : (
            <button onClick={ () => { setAtualPage(1) } } className="page"><BiFirstPage/></button>
          ) }
          <button className="page">{ atualPage }</button>
          { pages.last_page === atualPage ? (
            null
          ) : (
            <button onClick={ () => { setAtualPage(pages.last_page) } } className="page"><BiLastPage/></button>
          ) }
        </div>
      </div>
    </div>
  );
}

export default Blog;