import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signOut } from '../store/slices/authentication.slice';
import './SignOutButton.css';

const SignOutButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = useCallback(async () => {
        await dispatch(signOut());
        history.replace('/');

    }, [dispatch]);

    return (
        <button className='btn' onClick={handleClick}>SIGN OUT</button>
    )
}

export default SignOutButton;