import React from 'react'
import { HistoryContainer, HistoryBg,BgImg,HistoryContents, HistoryText, HistoryTitle,HistoryP,Gallery, TextP,GalleryContainer} from './HistoryElements'
import mainBg from './../../images/Bg2.png'
import title from './../../images/01History.png'
import CarouselGallery from '../Carousel'


const History = () => {

  return (
    <>
        <HistoryContainer id="history">
          <HistoryBg>
            <BgImg src={mainBg} alt="mountain lake"/>
          </HistoryBg>
        <HistoryContents>
          <HistoryText>
            <HistoryTitle src={title}>

            </HistoryTitle>
            <HistoryP>
              <TextP>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. 
              </TextP>
            </HistoryP>
          </HistoryText>

          <Gallery>
            <GalleryContainer>
              <CarouselGallery/>
            </GalleryContainer>
          </Gallery>

        </HistoryContents>
          
        </HistoryContainer>
    </>
  )
}

export default History