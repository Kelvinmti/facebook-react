import React, { Component } from 'react';

import foto_autor from '../assets/perfil.png';
import foto_resposta from '../assets/kelvin.jpg';
import Comment from './Comment';

const Post = () => {
        return (
            <article className="post">
                <div className="painel-post">
                    <img src={foto_autor} className="img-autor-post"></img>
                    <div className="desc-autor">
                        <span className="nome">Júlio Alcantara</span>
                        <span className="data">04 Jun 2019</span>
                    </div>
                </div>
                <div className="pergunta">
                    Pessoal, alguém sabe explicar a diferença de front-end para back-end?
                </div>
                {/* <Comment /> */}
            </article>
        );
}

export default Post;
