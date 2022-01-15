import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return(
        <div className = 'homepage'>
            <div className='directory-menu'>
                <div className= 'menu-item'>
                    <div className= 'content'>
                        <h1 className='title'> HAT</h1>
                        <span className= 'subtitle'>SHOA NOW</span>
                    </div>
                </div>
                <div className= 'menu-item'>
                    <div className= 'content'>
                        <h1 className='title'> SHOE</h1>
                        <span className= 'subtitle'>SHOA NOW</span>
                    </div>
                </div>
                <div className= 'menu-item'>
                    <div className= 'content'>
                        <h1 className='title'> BAG</h1>
                        <span className= 'subtitle'>SHOA NOW</span>
                    </div>
                </div>
                <div className= 'menu-item'>
                    <div className= 'content'>
                        <h1 className='title'> MEN</h1>
                        <span className= 'subtitle'>SHOA NOW</span>
                    </div>
                </div>
                <div className= 'menu-item'>
                    <div className= 'content'>
                        <h1 className='title'> WOMEN</h1>
                        <span className= 'subtitle'>SHOA NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;