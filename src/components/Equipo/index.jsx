import React from 'react'
import styles from './Equipo.module.css'
import Colaborador from 'components/Colaborador';

const Equipo = ({nombre, color, videosSeleccionado}) => {
  
  return (
    videosSeleccionado.length > 0 &&
    <section className={styles.equipo}>
        <h3 style={{backgroundColor: `${color}`}}>{nombre}</h3>
        <div className={styles.colaborades}>
          {
            videosSeleccionado.map((video, index) => <Colaborador 
              datos={video}
              key={index}
              color={color}
            />)
          }
        </div>
    </section>
  )
}

export default Equipo;


