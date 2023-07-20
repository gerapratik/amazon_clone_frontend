import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
// import './amazon-logo.png'
function Header() {

    const [{basket},dispatch]=useStateValue();




    return (
        <div className='header'>
            <Link to='./'>
                <img className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className='header__search'>
                <input className="header__searchInput"
                    type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                <Link to ='/login'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span classname='header__optionLinetwo'>Sign In</span>
                </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span classname='header__optionLinetwo'> &Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span classname='header__optionLinetwo'>Prime</span>
                </div>
                <Link to ='/checkout'>
                <div className='header__optionBasket'>
                    <ShoppingCartIcon className='header__cart' />
                    <span classname='header__basketCount'>{basket?.length}</span>
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
