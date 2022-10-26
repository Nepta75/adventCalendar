import styled from 'styled-components'

export const StyledContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    width: 100%;
    height: 100%;
`

export const ModalContainer = styled.div`
    position: relative;
    min-width: 50%;
    min-height: 50%;
    max-width: 90%;
    max-height: 90%;
    padding: 50px;
    background-color: #fff;
    z-index: 1001;
    border-radius: 10px;
    display: flex;
    justify-content: center;

    img {
        display: flex;
        width: 100%;
        height: max-content;
        align-self: center;
    }
`

export const Overlay = styled.div`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
`

export const CloseContainer = styled.div`
    padding: 10px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
`