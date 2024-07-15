import React from 'react'
import styles from './Boton.module.css';

const Boton = ({value, onClick, type}) => {
  return (
    <button 
      className={styles.boton} 
      onClick={onClick} 
      type={type}>
        {value}
    </button>
  )
}

export default Boton;