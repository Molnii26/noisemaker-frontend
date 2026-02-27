import Footer from '../components/Footer'
import Header from '../components/Header'
import '../src/App.css'

function Regisztracio(){
    return(
        <>
            <Header/>
            <div>
                <div className="container-reg">
                    <div className='reg-header'>
                        <input type="button" className='vissza-button' value="Vissza"/>
                        <h1>Regisztráció</h1>
                    </div>
                        

                    <div className="reg-window">
                        <label for="fname">Email-cím:</label>
                        <input type="text" id="email" name="email"/><br></br>
                        <label for="lname">Jelszó:</label>
                        <input type="text" id="jelszo" name="jelszo"/><br></br>
                        <label for="fname">Felhasználónév:</label>
                        <input type="text" id="fnev" name="fnev"/><br></br>
                        <label for="fname">Telefonszám:</label>
                        <input type="text" id="telefonsz" name="telefonsz"/><br></br>
                        <label for="fname">Irányítószám:</label>
                        <input type="text" id="irszam" name="irszam"/><br></br>
                        <label for="fname">Cím:</label>
                        <input type="text" id="cim" name="cim"/><br></br>
                        <input type="button" className='reg-button' value="Regisztrálj"/>
                        <input type="button" className='reg-button-admin' value="Regisztrálj ADMINKÉNT"/>
                    </div>
                </div>
            </div>
            <Footer/>                                                                                         
        </>
        
    )
}

export default Regisztracio