import {  useEffect } from 'react';
import css from './Modal.module.css';
import { ReactComponent as CloseIcon } from '../../images/close-button.svg';



export const Modal = ({ onClose, children }) => {

    
    function clickBackDrop({ currentTarget, target }) {
        if (currentTarget === target) {
            onClose();
        }
    }   
    useEffect(() => {
        const clickKeyEscape = (e) => {
          if (e.code === 'Escape') {
        onClose();
            }
    }
        window.addEventListener('keydown', clickKeyEscape)
        return ()=> { window.removeEventListener('keydown', clickKeyEscape)}
    }, [onClose])


        return (
          
            <div className={css.Overlay} onClick={clickBackDrop}>
                <div className={css.Modal}>
                <CloseIcon onClick={onClose} className={css.close_icon} />
                   {children}       
                </div>
            </div>
        )
}