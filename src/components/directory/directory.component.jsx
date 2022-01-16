import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-items/menu-item.component';

import BG1 from './bgimg/img1.jpg';
import BG2 from './bgimg/img2.jpg';
import BG3 from './bgimg/img3.jpg';
import BG4 from './bgimg/img4.jpg';
import BG5 from './bgimg/img5.jpg';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            section: [
                {
                    title: 'hat',
                    imageUrl: BG1,
                    id: 1
                },
                {
                    title: 'jacket',
                    imageUrl: BG2,
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: BG3,
                    id: 3
                },
                {
                    title: 'women',
                    imageUrl: BG4,
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'hat',
                    imageUrl: BG5,
                    id: 5,
                    size: 'large'
                }

            ]
        }
    }

    render(){
        return(
            <div className='directory-menu '>
                {this.state.section.map(({title,id,imageUrl,size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ) )}
            </div>
        )
    }
}

export default Directory;
