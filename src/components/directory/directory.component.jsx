import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-items/menu-item.component';

import BG1 from './bgimg/hat2.jpg';
import BG2 from './bgimg/jacket.jpg';
import BG3 from './bgimg/sneakers.jpg';
import BG4 from './bgimg/women.jpg';
import BG5 from './bgimg/men1.jpg';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            section: [
                {
                    title: 'hat',
                    imageUrl: BG1,
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jacket',
                    imageUrl: BG2,
                    id: 2,
                    linkUrl: 'jacket'
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
                    title: 'men',
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
                {this.state.section.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ) )}
            </div>
        )
    }
}

export default Directory;
