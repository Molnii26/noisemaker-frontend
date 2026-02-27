import "../src/App.css"

function Header() {
    return (
        <div className="header">
            <a className="cim" href='/fooldal' rel="noopener noreferrer">
                <h1 className="cim-text">NOISEMAKER</h1>
            </a>
            <div className="kereses">
                <div class="topnav">
                    <input type="text" placeholder="Keresés..." />
                    
                </div>

            </div>
            <a className="register" href='/regisztracio' rel="noopener noreferrer">
                <img className="reg" src="../images/reg.svg" alt="Reg" />
            </a>
            <a className="cart-link" href='/kosar' rel="noopener noreferrer">
                <img className="cart" src="../images/cart-white.svg" alt="Cart Icon" />
            </a>
        </div>
    )
}

export default Header