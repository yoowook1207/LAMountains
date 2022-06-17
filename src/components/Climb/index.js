import React, {useState} from 'react';
import { ClimbNav, ClimbContainer,ClimbContents,TitleHolder, ClimbText, ClimbTitle,ClimbP,Gallery, TextP,GalleryContainer} from './ClimbElements'
// import Bg1 from './../../images/Bg2-1.png'
import title from './../../images/02Climb.png'
import ClimbNavBar from './ClimbNavBar';
import Mountain1 from '../Mountain1';
import Mountain2 from '../Mountain2';

const Climb = () => {

  const [currentPage, setCurrentPage] = useState('Mountain1');

  const renderPage = () => {
    if (currentPage === 'Mountain1') {
      return <Mountain1 />;
    }
    if (currentPage === 'Mountain2') {
      return <Mountain2 />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
        <ClimbContainer id="climb">

          <TitleHolder>
            <ClimbText>
              <ClimbTitle src={title}>

              </ClimbTitle>
              <ClimbP>
                <TextP>
                  Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. 
                </TextP>
              </ClimbP>
            </ClimbText>
          </TitleHolder>

          <ClimbNav>
            <ClimbNavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
          </ClimbNav>
          
          <ClimbContents>
            {renderPage()}
          </ClimbContents>
 
        </ClimbContainer>
    </>
  )
}

export default Climb