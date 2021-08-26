import React, { useState, useEffect, useRef } from 'react'
import Message from '../Message/Message';
import styles from './Header.module.css'


const Header = ({city = 'NaN', onCitySubmit, onGetLocation}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState(city);
    const [error, setError] = useState(null);
    const input = useRef(null);
    const form = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /\w/i;
        if(!regex.test(text)) {
            setError('Please type something!');
            return;
        };
        onCitySubmit(text);
        setIsEdit(false);
    }

    useEffect(() => {
        const clickOutline = (e) => {
            if(!form?.current?.contains(e.target)) {
                setIsEdit(false);
            }
        }
        if(isEdit) {
            document.addEventListener('mousedown', clickOutline);
            input.current.focus();
        } else {
            document.removeEventListener('mousedown', clickOutline);
            setText(city);
        }
        return () => {
            document.removeEventListener('mousedown', clickOutline);
        }
    }, [isEdit, city]);

    const handleFindGeoLocation = () => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
        
        navigator.geolocation.getCurrentPosition((pos) => {
            onGetLocation(pos.coords);
        },(err) => {
            setError(err.message);
        }, options);
    }

    return (
        <header>  
            {error && <Message text={error} onClose={() => setError(null)}></Message>}
            <h1 className={styles['header__title']} >
                {isEdit ? 
                    <form onSubmit={handleSubmit} className={styles.form} ref={form}>
                        <input ref={input} autoComplete="off" className={styles.header__input} value={text} onInput={(e) => setText(e.target.value)} type="text" name="city" />
                        <button type="submit" className={styles.submit}><i className="fas fa-search"></i></button>
                    </form>
                : 
                    <span className={styles.header__text}>
                        {city}
                        <button onClick={handleFindGeoLocation} type="submit" className={styles.mark}><i className="fas fa-map-marker-alt"></i></button>
                    </span>
                }
                {!isEdit && <i onClick={() => setIsEdit(true)} className={`fas fa-pencil-alt ${styles.header__icon}`}></i>}
            </h1>
        </header>
    )
}

export default Header
