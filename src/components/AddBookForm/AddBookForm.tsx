import { useAddBookMutation } from '@/store/features/books/booksApi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidateSchemaAddBook } from './ValidateSchemaAddBook';
import { Loader } from '@/shared/Loader/Loader';
import { Input } from '@/shared/Input/Input';

import styles from './AddBookForm.module.scss';

export type AddBookFormType = {
    title: string;
    author: string;
    publishYear: number;
    pagesTotal?: number;
};

export const AddBookForm = () => {
    const [addBook, { isLoading }] = useAddBookMutation();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AddBookFormType>({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaAddBook)
    });

    const onSubmit: SubmitHandler<AddBookFormType> = async (data) => {
        console.log(data);

        try {
            await addBook(data);
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <section className={styles.addBookSection}>
            <form className={styles.addBookForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.addBookFieldsContainer}>
                    <Input
                        type='text'
                        placeholder='Title'
                        label='Book title'
                        id='title'
                        register={register('title')}
                        error={errors.title?.message}
                        labelStyle={styles.addBookLabel}
                        inputStyle={`${styles.addTitleField}`}
                    />
                    <div className={styles.addBookInfoContainer}>
                        <Input
                            type='text'
                            placeholder='Author'
                            label='Author'
                            id='author'
                            register={register('author')}
                            error={errors.author?.message}
                            labelStyle={styles.addBookLabel}
                            inputStyle={`${styles.addBookInfoField} ${styles.authorField}`}
                        />
                        <Input
                            type='text'
                            placeholder='Year'
                            label='Publication year'
                            id='publishYear'
                            register={register('publishYear')}
                            error={errors.publishYear?.message}
                            labelStyle={styles.addBookLabel}
                            inputStyle={styles.addBookInfoField}
                        />
                        <Input
                            type='text'
                            placeholder='Amount'
                            label='Amount of pages'
                            id='pagesTotal'
                            register={register('pagesTotal')}
                            error={errors.pagesTotal?.message}
                            labelStyle={`${styles.addBookLabel}`}
                            inputStyle={styles.addBookInfoField}
                        />
                    </div>
                </div>

                <button className={styles.addBookButton} type='submit'>
                    Add
                </button>
            </form>
        </section>
    );
};
