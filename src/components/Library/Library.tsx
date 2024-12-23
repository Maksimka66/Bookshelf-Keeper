import { useState } from 'react';
import { LibraryHeader } from '@/shared/LibraryHeader/LibraryHeader';
import { ModalGuide } from '../modalComponents/ModalGuide/ModalGuide';
import { ModalWindow } from '@/shared/ModalWindow/ModalWindow';

export const Library = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <LibraryHeader />
            <button type='button' onClick={() => setModalOpen(true)}>
                Click
            </button>
            {modalOpen && (
                <ModalWindow>
                    <ModalGuide onClose={() => setModalOpen(false)} />
                </ModalWindow>
            )}
        </>
    );
};
