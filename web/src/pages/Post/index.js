import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import RelevantPost from '../../components/RelevantPost';
import image_test from '../../assets/images/image.jpg';

function Post() {
  // Request to API with 3 Relevant Posts
  const relevant_posts = [
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dollor - et alguna koiza qui fas mi au",
    },
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dollor - et alguna koiza qui fas mi au",
    },
    {
      linkTo: "/posts/1",
      imageURL: image_test,
      title: "Lorem ipsum dollor - et alguna koiza qui fas mi au",
    }
  ];

  return (
    <div className="post">
      <div className="container">
        <div className="infos">
          <div className="title">
            Lorem ipsum dollor - et alguna koiza qui fas mi au
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum a sagittis eros. Nam tristique justo vel
            fringilla hendrerit. Fusce urna nibh, commodo et
            arcu nec, pharetra luctus mi. Integer volutpat
            erat sit amet ipsum luctus rutrum. Duis vel
            odio ultrices, luctus nisl ut, commodo
            augue.
          </div>
          <div className="details">
            <blockquote>por <span>Algum Candidato</span></blockquote>
            <div className="circle"></div>
            <div className="date">
              01/01/2020
            </div>
          </div>
        </div>
        <div className="content">
          <div className="post-content">
            <div className="image">
              <img src={image_test} alt="Imagem de areial-pb" />
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                mollis vitae tortor eu bibendum. Phasellus vel nibh vitae diam
                vestibulum bibendum. Morbi vestibulum ac tellus id ullamcorper.
                Suspendisse lorem augue, condimentum at leo id, placerat luctus
                erat. In aliquam nec massa eu commodo. Fusce nec nibh vitae sem
                posuere bibendum vitae eu velit. Aliquam viverra elit ipsum,
                iaculis elementum leo lobortis eget. Fusce sit amet tellus
                ut tortor hendrerit laoreet. Aenean non leo dolor. Quisque
                imperdiet ante eget massa vestibulum ultricies. Sed nisl
                libero, placerat et nisi eu, molestie efficitur nunc.
                Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Integer congue finibus eros, nec faucibus
                magna convallis mollis. Donec elementum porttitor
                placerat. Nullam sit amet gravida lacus, eu luctus
                sapien. Praesent at eleifend enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                mollis vitae tortor eu bibendum. Phasellus vel nibh vitae diam
                vestibulum bibendum. Morbi vestibulum ac tellus id ullamcorper.
                Suspendisse lorem augue, condimentum at leo id, placerat luctus
                erat. In aliquam nec massa eu commodo. Fusce nec nibh vitae sem
                posuere bibendum vitae eu velit. Aliquam viverra elit ipsum,
                iaculis elementum leo lobortis eget. Fusce sit amet tellus
                ut tortor hendrerit laoreet. Aenean non leo dolor. Quisque
                imperdiet ante eget massa vestibulum ultricies. Sed nisl
                libero, placerat et nisi eu, molestie efficitur nunc.
                Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Integer congue finibus eros, nec faucibus
                magna convallis mollis. Donec elementum porttitor
                placerat. Nullam sit amet gravida lacus, eu luctus
                sapien. Praesent at eleifend enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                mollis vitae tortor eu bibendum. Phasellus vel nibh vitae diam
                vestibulum bibendum. Morbi vestibulum ac tellus id ullamcorper.
                Suspendisse lorem augue, condimentum at leo id, placerat luctus
                erat. In aliquam nec massa eu commodo. Fusce nec nibh vitae sem
                posuere bibendum vitae eu velit. Aliquam viverra elit ipsum.
              </p>
            </div>
          </div>
          <div className="relevant-posts-content">
            <div className="relevant-posts">
              {relevant_posts.map( (relevant_post, index) => (
                <RelevantPost relevant_post={relevant_post} key={index} />
              ))}
            </div>
            <div className="share-buttons">
              <Link to="/posts/1" className="share-button share-button-facebook">
                F
              </Link>
              <Link to="/posts/1" className="share-button share-button-whatsapp">
                W
              </Link>
            </div>
          </div>
        </div>
        <div className="iframe-facebook">
          Iframe do serviço de comentários integrados ao Facebook
        </div>
      </div>
    </div>
  );
}

export default Post;