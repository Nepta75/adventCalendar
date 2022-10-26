import { ReactNode } from 'react';
import { StyledContainer, ModalContainer, Overlay, CloseContainer } from './index.style';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    return (
        isOpen ? (
            <StyledContainer>
                <Overlay onClick={onClose} />
                <ModalContainer>
                    <CloseContainer onClick={onClose}>X</CloseContainer>
                    {children}
                </ModalContainer>
            </StyledContainer>
        ) : <></>
    )
} 