import React from 'react';
import foto from '../assets/perfil.png';

const Post = () => {
        return (
            <article className="post">
                <div className="painel-post">
                    <img src={foto} className="img-autor-post"></img>
                    <div className="desc-autor">
                        <span className="nome">Júlio Alcantara</span>
                        <span className="data">04 Jun 2019</span>
                    </div>
                </div>
            </article>
        );
}

export default Post;
