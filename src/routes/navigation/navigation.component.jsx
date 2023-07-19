import {Fragment, useContext} from 'react';
import { UserContext } from '../../contexts/user.context';
import {Outlet,Link} from 'react-router-dom';
import  logo from '../../assets/animeApparel.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component' ;
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {CartContext} from '../../contexts/cart.context';
import {signOutUser} from '../../utilities/firebase/firebase.utilities';
import Footer from '../footer/footer.component';

import './navigation.styles.scss';

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className = 'navigation'>
      <Link className = 'logo-container' to ='/'>
        <img src ={logo} alt= 'logo' className = 'logo'
        style={{ height: 150, width: 150 }}/>
      </Link>
        <div className = 'nav-title'>
          <h2>Anime Apparel</h2>
          <p> Clothing Co. </p> 
        </div>
          <div className = 'nav-links-container'>
          <Link className = 'nav-link' to = '/shop'>
            Shop
          </Link>
          {
            currentUser ? (
              <span className = 'nav-link' onClick = {signOutUser}>Sign Out</span>)
              : (
                <Link className = 'sign-in-link' to = '/auth'>
                  SIGN IN
                </Link>
              )
            }
          <CartIcon />
        </div>
      { isCartOpen && <CartDropdown />}
      </div>
      <Outlet/> 
    </Fragment>
  );
};
export default Navigation;
