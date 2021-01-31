import Image from 'next/image';
import Link from 'next/link';
import styles from './css-modules/Register.module.css'
import Head from 'next/head';

function Register() {
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

        <h2 className={styles.title}>Create an account with us</h2>

        <div className={styles.formArea}>
            <label>Name</label>
            <input placeholder="Full Name" type="name" required></input>
            <label>Email Address</label>
            <input placeholder="Email Address" type="email" required></input>
            <label>Password</label>
            <input placeholder="Password" type="password" required></input>
            <button>Register</button>

        </div>

        </div>

        
        </>

    )
}

export default Register;