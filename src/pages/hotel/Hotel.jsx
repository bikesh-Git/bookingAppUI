import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './hotel.scss'

const Hotel = () => {
  const [open, setOpen] = useState(false)
  const [slideNumber, setSlideNumber] = useState(0)
  const img = [
    "https://i.picsum.photos/id/47/200/300.jpg?hmac=qgEtmhYzb3otRNnLN3afPLzmn6VJKj6x86OGOjDcBxQ",
    "https://i.picsum.photos/id/571/200/200.jpg?hmac=ZSwz8C6BIiypoF_yBd_c037Mh7UIfW8KMgbiCtJHLSM",
    "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    "https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://i.picsum.photos/id/301/200/300.jpg?grayscale&hmac=M9va8JbVrNcpjt8DMm9QHgEcfz3cmQAXVOLHwTHl3I0",
    "https://i.picsum.photos/id/981/200/300.jpg?blur=2&hmac=OnGoVGZXCtNt1TEXOxOHPwuDXojisfa6JWav9lQhsoM"
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='hotelContainer'>

        {open && <div className='hotelSlider'>
          <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)} className="close" />
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          <div className='sliderWrapper'>
            <img src={img[slideNumber]} alt="" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>}

        <div className='hotelWrapper'>
          <button className='hotelBookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Grand hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>over clover center</span>
          </div>
          <span className='hotelDistance'>Excellent loaction 2 km from MG road</span>
          <span className='hotelPriceHighlight'>Book a style ove 1221 at this property and get a free airport taxi</span>
          <div className='hotelImages'>
            {img.map((el, i) =>
              <div className='hotelImgWrapper'>
                <img onClick={() => handleOpen(i)} src={el} />
              </div>
            )}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsText'>
              <h1 className='hotelTitle'>xsxas xs x as xa s </h1>
              <p className='hotelDesc'>xsaxs xs x ax as xa sx a xasasx xsxasxaefwfg erg erg fsdwecw c c wcw </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>asd dsad dssad</h1>
              <span>sa xs as  saxasxascc</span>
              <h2><b>$231.21</b>7 nignt</h2>
              <button>Reserve or Book now </button>
            </div>
          </div>

        </div>
        <MailList />
        <Footer />
      </div>

    </div>
  )
}

export default Hotel
