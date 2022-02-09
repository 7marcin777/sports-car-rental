import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/authentication.action';
import './Valid.css';

const messages = {
    name_incorrect: 'Imię musi składać się co najmniej z 3 znaków!',
    email_incorrect: 'E-Mail musi składać się co najmniej z 7 znaków!',
    password_incorrect: 'Hasło musi składać się co najmniej z 5 znaków!',
    passwordConfirmation_incorrect: 'Hasła się nie zgadzają!',
    accept_incorrect: 'Nie potwierdzona akceptacja !'
};

interface Error {
    name: boolean;
    email: boolean;
    password: boolean;
    passwordConfirmation: boolean;
    accept: boolean;
}

const Valid = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [accept, setAccept] = useState<boolean>(false);
    const [errors, setErrors] = useState<Error>({
        name: false,
        email: false,
        password: false,
        passwordConfirmation: false,
        accept: false,
    });
    const [message, setMessage] = useState<string>('');

    const canProceed = useMemo<boolean>(() => {
        if (!name || name.length < 3) {
            return false;
        } else if (!email || email.length < 7) {
            return false;
        } else if (!password || password.length < 5) {
            return false;
        } else if (!passwordConfirmation || passwordConfirmation.length < 5) {
            return false;
        } else if (password !== passwordConfirmation) {
            return false;
        } else if (!accept) {
            return false;
        }

        return true;
    }, [name, email, password, passwordConfirmation, accept]);

    const handleSubmit = useCallback(async () => {
        if (!canProceed) {
            return;
        }

        if (!accept) {
            setMessage('Proszę zaakceptować warunki.');
            return;
        }

        await dispatch(signUp({
            name, email, password, passwordConfirmation
        }));
        alert('Konto załozone poprawnie.');
    }, [dispatch, canProceed, name, email, password, passwordConfirmation, accept]);

    useEffect(() => {
        setErrors({
            name: false,
            email: false,
            password: false,
            passwordConfirmation: false,
            accept: false,
        });
        setMessage('');

        if (name !== '' && name.length <= 2) {
            setErrors({
                ...errors,
                name: true,
            });
        } else if (email !== '' && email.length <= 6) {
            setErrors({
                ...errors,
                email: true,
            });

        } else if (password !== '' && password.length <= 4) {
            setErrors({
                ...errors,
                password: true,
            });

        } else if (passwordConfirmation !== '' && passwordConfirmation.length <= 4) {
            setErrors({
                ...errors,
                passwordConfirmation: true,
            });

        } else if (password !== '' && passwordConfirmation !== '' && password !== passwordConfirmation) {
            setErrors({
                ...errors,
                password: true,
                passwordConfirmation: true,
            });
        }
    }, [name, email, password, passwordConfirmation, accept]);

    return (
        <div className='validation'>
            <h1>Program lojalnościowy</h1>
            <h4><em>Zapisz się do programu lojalnościowego, wynajmuj nasze samochody i otrzymuj gigantyczne <span className="big-rabat">RABATY!</span></em> </h4>
            <form noValidate>
                <label htmlFor='user'> <h3>Twoje imię</h3>
                    <input
                        type='text'
                        id='user'
                        name='name'
                        placeholder='Enter your username'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {errors.name && <span className="err">
                        {messages.name_incorrect}   </span>}

                </label>
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
                <label htmlFor='password2'> <h3>Powtórz hasło</h3>
                    <input
                        type='password'
                        id='passwordConfirmation'
                        name='passwordConfirmation'
                        placeholder='Confirm your password'
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    {errors.passwordConfirmation && <span className="err">
                        {messages.passwordConfirmation_incorrect}   </span>}
                </label>


                <label htmlFor="accept">
                    <h2>Akceptacja</h2>
                    <input
                        className="checkbox"
                        type='checkbox'
                        id='accept'
                        name='accept'
                        checked={accept}
                        onChange={() => setAccept(!accept)}
                    />
                    {errors.accept && <span className="err">
                        {messages.accept_incorrect}   </span>}
                </label>

                <button type='button' onClick={handleSubmit} className="btn-val">Zapisz się</button>
            </form>
            {message !== '' && <h3>{message}</h3>}
        </div>
    )
};

export default Valid;