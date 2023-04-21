import React, { Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import cls from './LoginModal.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: ()=> void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
