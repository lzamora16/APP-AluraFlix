import React from 'react'
import styles from './PiePagina.module.css'
import aluraFlix from './aluraFlix.png';

const PiePagina = () => {
  return (
    <footer className={styles.footer}>
        <img src={aluraFlix} alt="Alura Flix" />
    </footer>
  )
}

export default PiePagina;