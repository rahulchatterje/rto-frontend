

import Carousel from 'react-bootstrap/Carousel';
const Corousal=({img})=>{
   



    return (
        <Carousel>
          <Carousel.Item interval={1000}>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
         
        </Carousel>
      );
    
}