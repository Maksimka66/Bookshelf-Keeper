import { useDispatch, useSelector } from 'react-redux';
import { ModalGuide } from '../modalComponents/ModalGuide/ModalGuide';
import { ModalWindow } from '@/shared/ModalWindow/ModalWindow';
import { closeModal, selectIsModalFirstOpen } from '@/store/features/options/optionsSlice';
import { AddBookForm } from '../AddBookForm/AddBookForm';
import { useUserInfoQuery } from '@/store/features/user/userApi';
import { GoingToRead } from '../GoingToRead/GoingToRead';
import { PlusButton } from '@/shared/PlusButton/PlusButton';

export const Library = () => {
    const { data } = useUserInfoQuery({});
    const dispatch = useDispatch();

    console.log(data);

    const modalOpen = useSelector(selectIsModalFirstOpen);

    return (
        <>
            <AddBookForm />
            {data && <GoingToRead />}
            {modalOpen && (
                <ModalWindow>
                    <ModalGuide onClose={() => dispatch(closeModal(false))} />
                </ModalWindow>
            )}
            <PlusButton />
        </>
    );
};
