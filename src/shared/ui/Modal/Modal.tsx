import React, { ReactNode } from 'react';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import { useModal } from '../../lib/hooks/useModal/useModal';
import { classNames, Mods } from '../../lib/classNames/classNames';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        'opened': isOpen,
        'isClosing': isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames('Modal', mods, [
                    className,
                    'app_modal',
                    'modalOld',
                ])}
            >
                <Overlay onClick={close} />
                <div className={'content'}>{children}</div>
            </div>
        </Portal>
    );
};
