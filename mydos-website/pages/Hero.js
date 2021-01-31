import styles from './css-modules/Hero.module.css';
import ScrollToTop from "react-scroll-to-top";

function Hero() {
    return(
        <>
            <ScrollToTop smooth color="#6f00ff" />
            <div className={styles.group}>
            <div className={styles.leftSide}>
                <img src="/heart.jpeg" alt="Education System with AR"></img>
            </div>

            <div className={styles.rightSide}>
                <h3 className={styles.sideHeading}>Welcome to MyDos Technology</h3>
                <p className={styles.sideText}>Our startup will create next generation AR games for kids education</p>
                <div className={styles.buttonGroup}>
                    <button className={styles.registerBtn}>Register</button>
                    <button className={styles.loginBtn}>Log In</button>

                </div>
            </div>
        </div>



        </>
    )
}

export default Hero;