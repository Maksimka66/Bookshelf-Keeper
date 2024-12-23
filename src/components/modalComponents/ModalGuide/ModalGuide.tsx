import { IconBook } from '@/shared/Svg/IconBook';
import { IconFlag } from '@/shared/Svg/IconFlag';
import { IconArrowRight } from '@/shared/Svg/IconArrowRight';

import styles from './ModalGuide.module.scss';

interface ModalGuideProps {
    onClose: () => void;
}

export const ModalGuide = ({ onClose }: ModalGuideProps) => {
    return (
        <div className={styles.guideMainContainer}>
            <ul className={styles.guideList}>
                <li className={styles.guideListItem}>
                    <h3 className={styles.guideHeader}>Step 1.</h3>
                    <div className={styles.guideFirstContainer}>
                        <IconBook />
                        <h4 className={styles.guideStepsHeader}>Create your own library</h4>
                    </div>
                    <div className={styles.guideSecondContainer}>
                        <IconArrowRight />
                        <p className={styles.guideStepsText}>
                            Add there books which you are going to read.
                        </p>
                    </div>
                </li>
                <li className={styles.guideListItem}>
                    <h3 className={styles.guideHeader}>Step 2.</h3>
                    <div className={styles.guideFirstContainer}>
                        <IconFlag />
                        <h4 className={styles.guideStepsHeader}>Create your first training</h4>
                    </div>
                    <div className={styles.guideSecondContainer}>
                        <IconArrowRight />
                        <p className={styles.guideStepsText}>
                            Set a goal, choose period, start training.{' '}
                        </p>
                    </div>
                </li>
            </ul>
            <button className={styles.closeModal} onClick={onClose} type='button'>
                Ok
            </button>
        </div>
    );
};
