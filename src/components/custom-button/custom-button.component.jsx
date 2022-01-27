import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, googlebtn, ...otherprops}) => (
    <div>
        <button className={`${googlebtn ? 'googlebtn-style' : ''} custom-button`} {...otherprops} >
            {children}
        </button>
    </div>
)

export default CustomButton