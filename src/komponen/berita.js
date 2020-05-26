import React from 'react';
// 
class berita extends React.Component {
    render(){
        return (
        <div className="kotakArt">
            <div className="meta">
              <div className="photo" style={{background: "url(1.jpg)"}}></div>
            </div>
            <div className="description">
              <h1>Indonesia OTW Bebas Corona</h1>
              <h2>19 Mei, 2020</h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
              <p className="read-more">
                <a href="#">Read More</a>
              </p>
            </div>
        </div>
        )
    }
}
export default berita;