import React from 'react';

const Comment = () => {
  return(
    <div className="resposta">
      <img src={foto_resposta} className="img-autor-post"></img>
      <div className="txt-resposta"><strong>Kelvin Mendes</strong>&nbsp;
          Front-end = cuida do visual e experiência do usuário UI/UX. Lida com tecnologias que rodam no lado cliente: html, css, js e frameworks cliente (jquery, react...).
          Backend = cuida das rotinas processadas no servidor, recebe os dados enviados pelo cliente e faz o tratamento necessário. Lida com tecnologias que rodam no servidor (node.js, php, c#, java....)
                    </div>
    </div>
  );
}

export default Comment;