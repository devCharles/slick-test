import logo from './logo.svg';
import {useRef, useEffect} from 'react'
import "../node_modules/slick-carousel/slick/slick.css" 
import "../node_modules/slick-carousel/slick/slick-theme.css"
import './App.css';
import Slider from 'react-slick'

function App() {
  const slider = useRef(null)
  useEffect(() => {
    const dots = document.getElementsByClassName('custom-dot')
    if (dots && dots[0]) {
      dots[0].style= ''
    }
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dotsClass: "custom-dot",
    arrows: false,
    centerMode: true,
    customPaging: function(i) {
      return (
        <div className='div-slider'>
          <div className="barra">&nbsp;</div>
          {i== 0 && <p>uno</p>}
          {i== 1 && <p>dos</p>}
          {i== 2 && <p>tres</p>}
        </div>
      );
    },
  }

  return (
    <main>
      <div className="content">
        contenido
      </div>
      <div className="slider">
        <Slider {...settings} ref={slider}>
          <div className='slide'>
            <img src="https://picsum.photos/800/200" alt="uno"/>
          </div>
          <div className='slide'>
            <img src="https://picsum.photos/801/200" alt="uno"/>
          </div>
          <div className='slide'>
            <img src="https://picsum.photos/802/200" alt="uno"/>
          </div>
        </Slider>
      </div>
    </main>
  )
}

export default App;
