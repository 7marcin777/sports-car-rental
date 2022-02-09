import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signIn } from '../../store/actions/authentication.action';
import './Valid.css';

const messages = {
    email_incorrect: 'E-Mail musi składać się co najmniej z 7 znaków!',
    password_incorrect: 'Hasło musi składać się co najmniej z 5 znaków!',
};

interface Error {
    email: boolean;
    password: boolean;
}

const ValidSignIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<Error>({
        email: false,
        password: false,
    });
    const [message, setMessage] = useState<string>('');

    const canProceed = useMemo<boolean>(() => {
        if (!email || email.length < 7) {
            return false;
        } else if (!password || password.length < 5) {
            return false;
        }

        return true;
    }, [email, password]);

    const handleSubmit = useCallback(async () => {
        if (!canProceed) {
            return;
        }

        await dispatch(signIn({
            email, password
        }));
        history.replace('/');
    }, [dispatch, canProceed, email, password]);

    useEffect(() => {
        setErrors({
            email: false,
            password: false,
        });
        setMessage('');

        if (email !== '' && email.length <= 6) {
            setErrors({
                ...errors,
                email: true,
            });

        } else if (password !== '' && password.length <= 4) {
            setErrors({
                ...errors,
                password: true,
            });

        }
    }, [email, password]);

    return (
        <div className='validation'>
            <h1>Zaloguj Się</h1>
            <h4><em>Zaloguj się aby móc korzystać z pełni serwisu.</em></h4>
            <form noValidate>
                <label htmlFor='email'> <h3>Twój email</h3>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="err">
                        {messages.email_incorrect}   </span>}
                </label>
                <label htmlFor='password'> <h3>Twoje hasło</h3>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="err">
                        {messages.password_incorrect}   </span>}
                </label>
                <button type='button' onClick={handleSubmit} className="btn-val">Zaloguj się</button>
            </form>
            {message !== '' && <h3>{message}</h3>}
        </div>
    )
};

export default ValidSignIn;