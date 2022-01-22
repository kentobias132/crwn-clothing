import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.style.scss'

const MenuItem = ({title, imageUrl, size, linkUrl}) =>{
    const navigate = useNavigate();
    return(
    <div className= {`${size} menu-item`}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className='bgImage' />
        <div className= 'content' onClick={() => navigate(`${linkUrl}`)}>
            <h1 className='title'>{title.toUpperCase() } </h1>
            <span className= 'subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
}
export default MenuItem;