import React from 'react'
import styles from "./Banner.module.css";
import BannerInfo from 'components/BannerInfo';


const Banner = ({color}) => {
  return (
    <section className={styles.capa}>
        <BannerInfo />
    </section>
  )
}

export default Banner