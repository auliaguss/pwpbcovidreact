import React from 'react';

const berita = (props) => {
  return (
    <div className="kotakArt">
        <div className="meta">
          <div className="photo" style={{}}>
            <img src={require(`../img/${props.data.image}`)} />
          </div>
        </div>
        <div className="description">
          <h1>{props.data.title}</h1>
          <h2>{props.data.date}</h2>
          <p>{props.data.body}</p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
    </div>
  )
}
export default berita;