import React from 'react';
import foto from '../assets/perfil.png';

const Post = () => {
        return (
            <article className="post">
                <img src={foto} className="img-autor-post"></img>
                <div className="nome-autor">
                    <span>Júlio Alcantara</span>
                    <span>04 Jun 2019</span>
                </div>
            </article>
        );
}

export default Post;
