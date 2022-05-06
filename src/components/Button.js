import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; // two types of buttons
const SIZES = ['btn--medium', 'btn--large'];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; // by default, button--medium

    return (
        <Link to="/sign-up" className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
                onclick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link >

    )
}

export  { Button };