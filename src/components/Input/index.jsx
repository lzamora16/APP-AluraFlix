import React from 'react';
import styles from './Input.module.css'

const Input = ({label, placeholder, tipo='text', clase, value, onChange}) => {
  return (
    <div className={`${styles[`container-${clase}`]}`}>
        <label className={`${styles[`label-${clase}`]}`}>{label}: </label>
        <input
            className={`${styles[`input-${clase}`]}`}
            placeholder={placeholder} 
            type={tipo} 
            value={value}
            onChange={onChange}    
        />
    </div>
  )
}

export default Input