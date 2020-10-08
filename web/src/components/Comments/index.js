import React from 'react';
import Disqus from 'disqus-react';

import './styles.css';

function Comments({data}) {
  const { identifier, title } = data;
  const disqusConfig = {
    url: window.location.href,
    language: 'pt_BR',
    identifier,
    title,
  };

  return (
    <div className="comments">
      <Disqus.DiscussionEmbed
        shortname='oposicao-areial-pb'
        config={{disqusConfig}}
      />
    </div>
  );
}

export default Comments;