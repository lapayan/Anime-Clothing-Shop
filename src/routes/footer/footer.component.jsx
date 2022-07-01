import './footer.styles.scss'
import React from 'react';
import {Fragment} from 'react';
import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as Github} from '../../assets/github.svg';
import {ReactComponent as Instagram} from '../../assets/instagram.svg';
import {ReactComponent as LinkedIn} from '../../assets/linkedin-circled.svg';
import {ReactComponent as Twitter} from '../../assets/twitter.svg';


const Footer = () =>  {
  return (
  <Fragment>
    <Outlet/>
      <div className = 'spacer'> anfljannajnaljfnafjnfjanfjanfjan </div> 
        <div className='main-footer-container' >
          <div className='icon-container'>

            <Link className = 'github-icon' to={{ pathname: "https://twitter.com/" }} target="_blank">
              <Github className='github-logo'/>
            </Link>

            <Link className = 'instagram-icon' to={{ pathname: "https://twitter.com/" }} target="_blank">
              <Instagram className='instagram-logo'/>
            </Link>

            <Link className = 'linked-in-icon'to={{ pathname: "https://twitter.com/" }} target="_blank">
              <LinkedIn className='linkedIn-logo'/>
            </Link>

            <Link className = 'twitter-icon' to={{ pathname: "https://twitter.com/" }} target="_blank">
              <Twitter className='twitter-logo'/>
            </Link>

          </div>

            <div className='footer-text-container'>
              <span>
                Anime Apparel Clothing Co. ®
              </span>
            </div>
          </div>
    </Fragment>
  );
}

export default Footer;
