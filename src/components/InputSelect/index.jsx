import React from 'react';
import styles from './InputSelect.module.css';
import { useFormulario } from 'context';

const InputSelect = ({label, value, clase, onChange}) => {

  const {categorias} =useFormulario(); 
    
  return (
    <div className={`${styles[`container-${clase}`]}`}>
        <label className={`${styles[`label-${clase}`]}`}>{label}: </label>
        <select className={`${styles[`select-${clase}`]}`} value={value} onChange={onChange} >
            <option className={`${styles[`option-${clase}`]}`} value="" disabled hidden>Seleccionar categoría</option>
            {
                categorias.map(({categoria, id}) => {
                    return <option className={`${styles[`option-${clase}`]}`} key={id} value={categoria}>{categoria}</option>
                })
            }
        </select>
    </div>
  )
}

export default InputSelect;