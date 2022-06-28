import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './'

import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const {showCart, setShowCart, totalQuantities } = useStateContext();
  // console.log(totalQuantities)

  return (
    <div className='navbar'>
      <div className="navbar-container">
        {/* <div className='nav-items'>

        </div> */}
        <p className="logo">
          <Link href="/">JSM Headphones</Link>
        </p>
        <button type="button" className='cart-icon' onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}

    </div>
    
  )
}

export default Navbar