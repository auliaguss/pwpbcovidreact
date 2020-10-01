import React from 'react';
import './style/headline.css'
function head(){
    const date = new Date();
    const getdate = date.getDate()
    return (
    <div className="newspaper">
    <div className="header">
      <div className="header__banner">
        <div className="header__banner__left">★ ★ ★ ★ ★</div>
        <div className="header__banner__title">Pusat Informasi Covid-19</div>
        <div className="header__banner__right">★ ★ ★ ★ ★</div>
      </div>
      <div className="header__title">
        <span>Our</span>
        <span>Today's</span>
        <span>News</span>
      </div>
      <div className="newspaper__subheader">
        <div className="divider"></div>
        <div className="newspaper__subheader__content">
          <span>Aulia Agustina</span>
          <span></span>
          <span>{getdate} - {date.getMonth()} - {date.getFullYear()}</span>
        </div>
        <div className="divider"></div>
      </div>
    </div>
    </div>
    )
}

export default head;