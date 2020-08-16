import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//ReactComponent lo usamos para importar Logo que es un .svg como un componente normal
import { ReactComponent as Logo } from '../../assets/image/crown.svg';

//import de auth para el logout
import { auth } from '../../firebase/firebase.utils';

import './Header.scss';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
