import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import icon from '../public/assets/icon.png';
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Pokedex powered by Next.js!</h1>

        <p className={styles.description}>
          <Link href="/pokemon">
            Get started by navigating
            <code className={styles.code}>pokemon listing !!!</code>
          </Link>
        </p>

        <div className={styles.grid}>
          <Image
            width="200"
            height="200"
            quality="10"
            src={icon}
            alt={'Default Icon'}
          />
        </div>
      </main>
    </div>
  );
}
