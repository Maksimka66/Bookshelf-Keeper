import { useDispatch, useSelector } from 'react-redux';
import { ModalGuide } from '../modalComponents/ModalGuide/ModalGuide';
import { ModalWindow } from '@/shared/ModalWindow/ModalWindow';
import { closeModal, selectIsModalFirstOpen } from '@/store/features/options/optionsSlice';
import { AddBookForm } from '../AddBookForm/AddBookForm';
import { GoingToRead } from '../GoingToRead/GoingToRead';
import { PlusButton } from '@/shared/PlusButton/PlusButton';

export const Library = () => {
    const dispatch = useDispatch();

    const modalOpen = useSelector(selectIsModalFirstOpen);

    return (
        <>
            <AddBookForm />
            <GoingToRead />
            {modalOpen && (
                <ModalWindow>
                    <ModalGuide onClose={() => dispatch(closeModal(false))} />
                </ModalWindow>
            )}
            <PlusButton />
        </>
    );
};
