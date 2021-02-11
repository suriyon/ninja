import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
      <>
        <Head>
          <title>Ninja List | Home</title>
          <meta name="keywords" content="ninjas"/>
        </Head>
        <div>        
          <h2 className={styles.title}>Homepage</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illo. Commodi doloremque velit aperiam fugit aliquid temporibus odio aspernatur quo eos, sit pariatur corporis atque id quisquam eligendi, nemo animi.</p>                        
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, architecto doloribus. Aperiam, illum magnam? In eos a quibusdam soluta, velit, optio, asperiores adipisci facilis beatae aliquam aspernatur repudiandae omnis aut.</p>
          <Link href="/ninjas">
            <a className={styles.btn}>See Ninja Listing</a>
          </Link>
        </div>
      </>
  )
}
