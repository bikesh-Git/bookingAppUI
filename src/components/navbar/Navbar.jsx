import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
          <span className="logo">BikeshBooking</span>
          <div className="navItem">
              <button>Login</button>
              <button>Register</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar
