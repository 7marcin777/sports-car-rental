import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <>
            <Link to='sign-up' className={'btn-link'}>
                <button className='btn'>SIGN UP</button>
            </Link>
            <Link to='sign-in' className={'btn-link'}>
                <button className='btn'>SIGN IN</button>
            </Link>
        </>
    )
}

