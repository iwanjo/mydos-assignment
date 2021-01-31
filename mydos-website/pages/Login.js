import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from './css-modules/Login.module.css';
import Register from './Register';

function Login() {
    return(
        <>
        <Head>
            <title>Register - MyDos Technology</title>
            <link rel="icon" href="/logo.jpeg" />

        </Head>

        <Link href="/">
            <Image
            src="/logo.jpeg"
            width={150}
            height={150}
            alt="MyDos Technology Logo"
            loading="eager"
            className={styles.logoImg}
            />
        </Link>


        <div className={styles.formBox}>

        <h2 className={styles.title}>Welcome Back</h2>

        <div className={styles.formArea}>
            <label>Email Address</label>
            <input placeholder="Email Address" type="email" required></input>
            <label>Password</label>
            <input placeholder="Password" type="password" required></input>
            <button>Log in</button>

            <p>Or Log In With</p>
            <div className={styles.iconsContainer}>
            <img src="/facebook(1).png" alt="Facebook Logo"></img>
            <img src="/google(1).png" alt="Google Logo"></img>
            </div>

            <Link href='/Register'>
            <h4>Don't have an account?</h4>
            </Link>

        </div>

        </div>

        </>
    )
}

export default Login;