import React, { Component } from 'react';
import Axios from 'axios';
import Berita from './berita';
import './style/daftarBerita.css'
class daftar extends Component{
    state = {
        posts: []
    }

    componentDidMount() {
        this.onGetPosts();
    }

    onGetPosts = async () => {
        await Axios.get('http://localhost:8000/posts')
                .then((response) => {
                this.setState({
                    posts: response.data
                });
            });
    }
    render() {
        return (
            <div className="kumpulanArtikel">
                {
                    this.state.posts.map(post => {
                        return <Berita key={post.id} data={post} />
                    })
                }
            </div>
        )
    }
}

export default daftar;