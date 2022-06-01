import Logo from '../images/airbnb-logo.png'

export default function Header(){
    return (
        <header>
            <img className='header--logo' src={Logo}/>
        </header>
    )
}