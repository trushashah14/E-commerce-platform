import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    // eslint-disable-next-line no-undef
    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens Clothing")}}><Link style={{ textDecoration: 'none' }} to='/Mens Clothing'></Link>{menu==="Men's Clothing"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens Clothing")}}><Link style={{ textDecoration: 'none' }} to='/Womens Clothing'></Link>{menu==="Women's Clothing"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids Fashion")}}><Link style={{ textDecoration: 'none' }} to='/Kids Clothing'></Link>{menu==="Kid's Fashion"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar