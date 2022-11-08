import './Footer.css'

const Footer = () => {
    return(
        <footer className="footerContainer">
            <nav className="navFooter">
                <ul className='listRedes'>
                    <li>
                        <a className='redesBtn' href="http://www.instagram.com" rel='noopener noreferrer'> Instagram</a>
                    </li>
                    <li>
                        <a className='redesBtn'href="http://www.instagram.com" rel='noopener noreferrer'> Facebook</a>
                    </li>
                    <li>
                        <a className='redesBtn'href="http://www.instagram.com" rel='noopener noreferrer'> Twitter</a>
                    </li>
                </ul>
            </nav>
            <p>Copyright Alkemy Challenge</p>
        </footer>
    )
}

export default Footer