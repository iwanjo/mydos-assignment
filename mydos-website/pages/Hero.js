import styles from './css-modules/Hero.module.css';
import ScrollToTop from "react-scroll-to-top";
import Link from 'next/link';
import Register from './Register';
import Login from './Login';

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

                    <Link href='/Register'>
                    <button className={styles.registerBtn}>Register</button>
                    </Link>

                    <Link href="/Login">
                    <button className={styles.loginBtn}>Log In</button>
                    </Link>

                </div>
            </div>
        </div>



        </>
    )
}

export default Hero;