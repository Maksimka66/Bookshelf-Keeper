import { useSelector } from 'react-redux';
import { IconBook } from '@/shared/Svg/IconBook';
import { selectGoingToRead } from '@/store/features/user/userSlice';

import styles from './GoingToRead.module.scss';

export const GoingToRead = () => {
    const goingToReadBooks = useSelector(selectGoingToRead);

    console.log(goingToReadBooks);

    return (
        <section className={styles.goingToReadSection}>
            <h2 className={styles.goingToReadTitle}>Going to read</h2>
            <ul className={styles.booksList}>
                {goingToReadBooks &&
                    goingToReadBooks.length > 0 &&
                    goingToReadBooks.map((book) => (
                        <li key={book._id} className={styles.booksListItem}>
                            <IconBook />
                            <div className={styles.booksListContainer}>
                                <h3 className={styles.bookInfoText}>{book.title}</h3>
                                <div className={styles.booksInfoContainer}>
                                    <div className={styles.bookInfoContainer}>
                                        <p className={styles.bookInfo}>Author:</p>
                                        <p className={styles.bookInfoText}>{book.author}</p>
                                    </div>
                                    <div className={styles.bookInfoContainer}>
                                        <p className={styles.bookInfo}>Year:</p>
                                        <p className={styles.bookInfoText}>{book.publishYear}</p>
                                    </div>
                                    <div className={styles.bookInfoContainer}>
                                        <p className={styles.bookInfo}>Pages:</p>
                                        <p className={styles.bookInfoText}>{book.pagesTotal}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </section>
    );
};
