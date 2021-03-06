import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//ReactComponent lo usamos para importar Logo que es un .svg como un componente normal
import { ReactComponent as Logo } from '../../assets/image/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

//import de auth para el logout
import { auth } from '../../firebase/firebase.utils';

import './Header.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>

        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>

      {!hidden ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
