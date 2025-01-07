import { IconBook } from '@/shared/Svg/IconBook';
import { useUserInfoQuery } from '@/store/features/user/userApi';
import { IBooksState } from '@/types/booksTypes/booksTypes';
import { Loader } from '@/shared/Loader/Loader';
import { MyTrainingButton } from '@/shared/MyTrainingButton/MyTrainingButton';
import { useSelector } from 'react-redux';
import { selectToken } from '@/store/features/auth/authSlice';

import styles from './GoingToRead.module.scss';

export const GoingToRead = () => {
    const token = useSelector(selectToken);

    const { data, isLoading } = useUserInfoQuery(
        {},
        {
            skip: !token
        }
    );

    if (isLoading) return <Loader />;

    return (
        <section className={styles.goingToReadSection}>
            <h2 className={styles.goingToReadTitle}>Going to read</h2>
            <ul className={styles.booksList}>
                {data &&
                    data.goingToRead.length > 0 &&
                    data.goingToRead.map((book: IBooksState) => (
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
            <MyTrainingButton />
        </section>
    );
};
