import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.facebook.com/fracturedlightstudio/" className="icon fa-facebook">  Follow us on Facebook</a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Fractured Light Studio</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
