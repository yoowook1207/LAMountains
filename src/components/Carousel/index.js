import Carousel from 'react-bootstrap/Carousel'
import smallpic1 from '../../images/smallpic1.png'
import smallpic2 from '../../images/smallpic2.png'

const CarouselGallery = () => {

    const Carouselstyle = {
        width: '100%'
    }

    return (
        <Carousel style={Carouselstyle}>
            <Carousel.Item>
                <div class="row">
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center">
                        <img  src={smallpic1} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic2} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic1} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic2} alt="smallPic"/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="row">
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center">
                        <img  src={smallpic1} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic2} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic1} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic2} alt="smallPic"/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="row">
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center">
                        <img  src={smallpic1} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic2} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic1} alt="smallPic"/>
                    </div>
                    <div class="col-md-3 col-sm-12 d-flex justify-content-center clearfix d-none d-md-block">
                        <img  src={smallpic2} alt="smallPic"/>
                    </div>
                </div>
            </Carousel.Item>
            </Carousel>
    )
}

export default CarouselGallery