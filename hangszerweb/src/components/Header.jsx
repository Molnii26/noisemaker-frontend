import "../src/App.css"

function Header(){
    return (
        <div className="header">
            <div className="felul">
                <a className="cim" href='/fooldal' rel="noopener noreferrer">
                    <p className="cim-text">NoiseMaker</p>
                </a>
                <div className="kereses">
                    <div class="topnav">
                        <input type="text" placeholder="Keresés..."/>
                    </div>
                    <button className="gomb-kereses">
                        <img src="../images/search.svg"/>
                    </button>
                </div>
                <a className="register" href='/regisztracio' rel="noopener noreferrer">
                    <img className="reg" src="../images/reg.svg" alt="Reg"/>
                </a>
                <a className="cart-link" href='/kosar' rel="noopener noreferrer">
                    <img className="cart" src="../images/cart-white.svg" alt="Cart Icon"/>
                </a>
            </div>
            

            <div className="alul">
                <div className="navbar-alul">

                </div>
            </div>
      </div>
    )
}

export default Header