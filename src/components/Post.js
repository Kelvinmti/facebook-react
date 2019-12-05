import React from 'react';
import foto from '../assets/perfil.png';

const Post = () => {
        return (
            <article className="post">
                <div className="painel-post">
                    <img src={foto} className="img-autor-post"></img>
                    <div className="desc-autor">
                        <span className="nome">Kelvin Mendes</span>
                        <span className="data">04 Jun 2019</span>
                    </div>
                </div>
                <div className="pergunta">
                    Pessoal, alguém sabe explicar a diferença de front-end para back-end?
                </div>
                <div className="resposta">
                    <img src={foto} className="img-autor-post"></img>
                    <div className="txt-resposta">
                        Front-end = cuida do visual e experiência do usuário UI/UX. Lida com tecnologias que rodam no lado cliente: html, css, js e frameworks cliente (jquery, react...).
                        Backend = cuida das rotinas processadas no servidor, recebe os dados enviados pelo cliente e faz o tratamento necessário. Lida com tecnologias que rodam no servidor (node.js, php, c#, java....)
                    </div>
                </div>
            </article>
        );
}

export default Post;
