import logo from '../images/Around.svg';

export default function Header() {
    return ( 
        
      <header className="header">
         <img className="header__logo" src={logo} alt="Around the U.S. logo"/>
      </header>
      
    );
}