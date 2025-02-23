import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Parichay</h1>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat iste quas incidunt ex fuga inventore mollitia atque temporibus, molestias dicta delectus laboriosam nulla, veniam unde, porro nesciunt praesentium? Sunt necessitatibus quas consequatur harum earum rerum.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("/hero/image.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero