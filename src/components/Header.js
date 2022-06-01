import Logo from '../images/airbnb-logo.png'
import "./Header.css"

export default function Header(){
    return (
        <header>
            <img className='header--logo' src={Logo}/>
        </header>
    )
}