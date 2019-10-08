import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    {/*<a href="#" className="image avatar"><img src={avatar} alt="" /></a>*/}
                    <h1><strong>Fractured Light Studio</strong>
                        <div>Creating one of a kind pieces of art from upcycled glass.</div>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
