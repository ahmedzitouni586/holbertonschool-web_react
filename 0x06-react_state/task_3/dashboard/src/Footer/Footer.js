import React from "react";
import './Footer.css'
import {getFooterCopy, getFullYear} from '../utils/utils'
import myContext from '../App/AppContext';

function Footer() {
    return (
        <myContext.Consumer>
        {(context) => {
            return(
                <footer className="App-footer">
                    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
                    {context.user.isLoggedIn && <p>Contact us</p>}
                </footer>
            )
        }}
        
        </myContext.Consumer>
    )
}

export default Footer;