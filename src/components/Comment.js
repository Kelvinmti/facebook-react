import React from 'react';
import foto_resposta from '../assets/kelvin.jpg';

const Comment = ({ data : comment }) => {
  return(
    <div className="resposta">
      <img src={foto_resposta} className="img-autor-post"></img>
      <div className="txt-resposta"><strong className="autor-comment">{comment.author.name}</strong>
          {comment.content}
      </div>
    </div>
  );
}

export default Comment;