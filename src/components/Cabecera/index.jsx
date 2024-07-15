import React from 'react'
import styles from "./Cabecera.module.css";
import logo from "./aluraFlix.png"
import { Link } from 'react-router-dom';
import CabeceraLink from 'components/CabeceraLink';


const Cabecera = () => {
  return (
    <header className={styles.cabecera}>
        <Link to="/">
            <section className={styles.logoContainer}>
                <img src={logo} alt="AluraFlix" />  
            </section>
        </Link>
        <nav>
            <CabeceraLink url="./">
                Inicio
            </CabeceraLink>
            <CabeceraLink url="./Nuevo">
                Nuevo Video
            </CabeceraLink>
        </nav>
    </header>
  )
}

export default Cabecera