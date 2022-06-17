import React from 'react'
import mainBg from '../../images/Hero1.png'
import { HomeContainer, HomeContent,HomeBg,BgImg} from './HomeElements'


const Home = () => {

  return (
    <>
      <HomeContainer>
        <HomeBg>
          <BgImg src={mainBg} alt="snowy mountain top"/>
        </HomeBg>
        <HomeContent>

        </HomeContent>
      </HomeContainer>
    </>
  )
}

export default Home