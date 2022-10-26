import Head from 'next/head'
import StyledContainer  from './index.style'
import { Calendar } from '../src/components/Calendar' 

export default function Home() {
  const date = new Date();

  return (
    <StyledContainer>
      <Head>
        <title>Calendrier de l{"'"}avent</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>Calendrier de l{"'"}avent {date.getFullYear()}</h1>
      <Calendar/>
    </StyledContainer>
  )
}
