import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                  name: "Júlio Alcantara",
                  avatar: "http://kelmendes.com/imagem.jpg"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe explicar a diferença de front-end para back-end?",
                comments: [
                  {
                    id: 1,
                    author: {
                      name: "Kelvin Mendes",
                      avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
                    },
                    content: "Front-end = cuida do visual e experiência do usuário UI/UX. Lida com tecnologias que rodam no lado cliente: html, css, js e frameworks cliente (jquery, react...). Backend = cuida das rotinas processadas no servidor, recebe os dados enviados pelo cliente e faz o tratamento necessário. Lida com tecnologias que rodam no servidor (node.js, php, c#, java....)"
                  }
                ]
              },
              {
                id: 2,
                author: {
                  name: "Carlos Humberto",
                  avatar: "http://kelmendes.com/imagem.jpg"
                },
                date: "09 Set 2019",
                content: "Como saber se sou dev júnior, pleno ou senior?",
                comments: [
                  {
                    id: 2,
                    author: {
                      name: "Kelvin Mendes",
                      avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
                    },
                    content: "Front-end = cuida do visual e experiência do usuário UI/UX. Lida com tecnologias que rodam no lado cliente: html, css, js e frameworks cliente (jquery, react...). Backend = cuida das rotinas processadas no servidor, recebe os dados enviados pelo cliente e faz o tratamento necessário. Lida com tecnologias que rodam no servidor (node.js, php, c#, java....)"
                  }
                ]
              }              
        ]
    }

    render() {
        return (
            <section className="post-list">
              {
                this.state.posts.map(post => <Post key={post.id} data={post} />)
              }
            </section>
        )
    }
}

export default PostList;
