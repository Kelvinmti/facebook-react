import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                  name: "Kelvin Mendes",
                  avatar: "http://kelmendes.com/imagem.jpg"
                },
                date: "04 Jun 2019",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                  {
                    id: 1,
                    author: {
                      name: "Diego Fernandes",
                      avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
                    },
                    content: "Conteúdo do comentário"
                  }
                ]
              }
        ]
    }

    render() {
        return (
            <section className="post-list">
                <Post />
            </section>
        )
    }
}

export default PostList;
