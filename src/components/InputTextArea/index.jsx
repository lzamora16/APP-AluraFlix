import React from 'react'
import styles from './InputTextArea.module.css'

const InputTextArea = ({label, placeholder, clase, value, onChange}) => {
  return (
    <div className={`${styles[`container-${clase}`]}`}>
        <label className={`${styles[`label-${clase}`]}`}>{label}: </label>
        <textarea 
          className={`${styles[`textarea-${clase}`]}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        ></textarea>
    </div>
  )
}

export default InputTextArea