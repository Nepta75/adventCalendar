import styled from 'styled-components'


export const CalendarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    padding: 50px 20px;
    max-width: 1600px;
    
    @media screen and (min-width: 768px) {
        padding: 50px 100px;
    }
`
 
export const BoxCalendar = styled.div(({ hasOpened, disabled }: { hasOpened: boolean, disabled: boolean }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${disabled ? 'default' : 'pointer'};
    width: calc((100% / 2) - 40px);
    height: 100px;
    margin: 10px;
    border-radius: 10px;
    color: ${disabled ? '#b8b8b8' : `${hasOpened ? '#fff' : '#00000'}`};
    background-color: ${disabled ? '#dddddd' : `${hasOpened ? '#ff6e14' : '#fff'}`};
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.14);

    :hover {
        box-shadow: 0px 0px 16px 2px rgba(255,110,20,0.39);
        cursor: pointer;
    }

    @media screen and (min-width: 1024px) {
        width: calc((100% / 4) - 80px);
    }
`)
