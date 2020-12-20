import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed By:
                        <span className="text-warning font-weight-normal">
                        Tharaka Dilruk
                        </span>
                        , Using <i className="fab fa-react" /> React JS &amp; Redux JS
                        integrated with external books data API
                        <a
                        href="https://developer.nytimes.com/ "
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Developer.nytimes
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;