import React, { Component } from 'react';

import foto_autor from '../assets/perfil.png';
import Comment from './Comment';

const Post = ({ data : post }) => {
        return (
            <article className="post">
                <div className="painel-post">
                    <img src={foto_autor} className="img-autor-post"></img>
                    <div className="desc-autor">
                        <span className="nome">{post.author.name}</span>
                        <span className="data">{post.date}</span>
                    </div>
                </div>
                <div className="pergunta">
                    {post.content}
                </div>
                {post.comments.map(comment => <Comment key={comment.id} data={comment} /> )}
                
            </article>
        );
}

export default Post;
