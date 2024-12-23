import React from 'react';

import styles from './ModalWindow.module.scss';

interface ModalWindowProps {
    children: React.ReactNode;
}

export const ModalWindow = ({ children }: ModalWindowProps) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>{children}</div>
        </div>
    );
};
