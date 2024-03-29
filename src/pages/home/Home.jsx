
import './home.scss'
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse For Property  type</h1>
        <PropertyList/>
        <h1 className='homeTitle'>Home guest love</h1>
        <FeaturedProperties/>
        <MailList />
        <Footer />

      </div>
      
       
    </div>
  )
}

export default Home
