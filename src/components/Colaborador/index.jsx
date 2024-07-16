import React from 'react'
import styles from './Colaborador.module.css';
import borrar from './borrar.png'
import editar from './editar.png'
import { rgba } from 'polished';
import { useFormulario } from 'context';

const Colaborador = ({datos, color}) => {

    const {eliminarRegistro, editarRegistro} = useFormulario();

    const sombraStyle = {
        boxShadow: `inset 0px 0px 15px ${rgba(color, 0.7)}`
    };

  return (
    <div className={styles.colaborador} style={{borderColor: `${color}`}}>
        <div className={styles.encabezado}>
            <img src={datos.imagen} alt={datos.titulo} />
        </div>
        <div className={styles.info}>
            <h5>{datos.titulo}</h5>
            <p>{datos.descripcion}</p>
        </div>
        <div className={styles.botones}>
            <div className={styles.borrar} onClick={()=> eliminarRegistro(datos.id)}>
                <img src={borrar} alt="Borrar" />
                <span>Borrar</span>
            </div>
            <div className={styles.editar} onClick={()=> editarRegistro(datos.id)}>
                <img src={editar} alt="Editar" />
                <span>Editar</span>
            </div>
        </div>
        <div className={styles.sombra} style={sombraStyle}></div>
    </div>
  )
}

export default Colaborador