import Link from 'next/link';
import styles from '../styles/PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.page_404}>
      <div className="container">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden ">
            <div className="text-center">
              <div className={styles.four_zero_four_bg}></div>
              <div className={styles.contant_box_404}>
                <h1>404</h1>
                <h3>Look like you are lost</h3>
                <Link href="/" className={styles.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageNotFound;
