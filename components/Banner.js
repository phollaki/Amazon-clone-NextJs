import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div>
          <img
            src='https://m.media-amazon.com/images/I/61dhHiVerAL._SX3000_.jpg'
            alt=''
            loading='lazy'
          />
        </div>
        <div>
          <img
            src='https://m.media-amazon.com/images/I/71R-pn19ECL._SX3000_.jpg'
            alt=''
            loading='lazy'
          />
        </div>
        <div>
          <img
            src='https://m.media-amazon.com/images/I/615YUOqLN5L._SX3000_.jpg'
            alt=''
            loading='lazy'
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
