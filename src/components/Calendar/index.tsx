import { useEffect, useState, useMemo } from 'react';
import { CalendarContainer, BoxCalendar } from './index.style'
import { Modal } from '../Modal'

export const Calendar = () => {
    const [openedDays, setOpenedDays] = useState<string[]>([])
    const [isDecember, setIsDecember] = useState(false);
    const [selectedDay, setSelectedDay] = useState<number | null>(null)
    const [url, setUrl] = useState('');

    const currentDay = useMemo(() => new Date(), []);

    useEffect(() => {
        const month = currentDay.getMonth();
        setIsDecember(month === (10 - 1));

        if (typeof window !== "undefined") {
            const openedDaysLocalStorage = window.localStorage.getItem("openedDays");
            if (!openedDaysLocalStorage) return;

            const openedDaysParsed = JSON.parse(openedDaysLocalStorage);
            setOpenedDays(openedDaysParsed);
        }
    }, [currentDay]);

    const handleClick = (day: string) => {
        fetch(`/api/image?day=${day}`).then(res => res.json()).then((data: { error?: string, url?: string })  => {
            if (data.error) {
                alert(data.error)
            }
            if (data.url) {
                let newOpendedDays = openedDays;
                if (!openedDays.includes(day)) {
                    newOpendedDays.push(day)
                }
                setOpenedDays(newOpendedDays)
                localStorage.setItem('openedDays', JSON.stringify(newOpendedDays));
                setUrl(data.url)
                setSelectedDay(Number(day))
            } 
        })
    }
    return (
        <>
            <Modal isOpen={!!url} onClose={() => setUrl('')}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt={`img-${selectedDay}`} />
            </Modal>
            <CalendarContainer>
                {Array.from(Array(24).keys()).map((d: number) => {
                    const currentDay = new Date();
                    const day = d + 1;
                    const date = new Date(currentDay.getFullYear(), 10 - 1, day);
                    const isValidDay = isDecember && (currentDay.getTime() >= date.getTime())
                    
                    return (
                        <BoxCalendar
                            disabled={!isValidDay}
                            hasOpened={openedDays.includes(day.toString())}
                            key={day}
                            onClick={() => handleClick(day.toString())}
                        >
                            {day}
                        </BoxCalendar>
                    )
                })}
            </CalendarContainer>
        </>
    )
}