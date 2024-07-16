import React from 'react'
import styles from "./BannerInfo.module.css";
import imagen from "./player.png"

const BannerInfo = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.categoria}>Front End</h3>
        <h6 className={styles.titulo}>Challenge React</h6>
        <p className={styles.parrafo}>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
      </div> 
      <div>
        <img className={styles.imagen} src={imagen} alt="" />
      </div>
    </div>
  )
}

export default BannerInfo;