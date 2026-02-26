import Footer from '../components/Footer'
import Gomb from '../components/Gomb'
import Header from '../components/Header'
import InputMezo from '../components/InputMezo'
import '../src/App.css'
import { useState } from "react";
import { regisztracio } from '../src/api'

function Regisztracio() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [psw, setPsw] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [city, setCity] = useState('')
    const [street_housenumber, setStreet_housenumber] = useState('')

    const [uzenet, setUzenet] = useState("")

    async function onReg() {
        setUzenet('')

        if (!username || !email || !psw || !phoneNumber || !postalCode || !city || !street_housenumber) {
            return alert('Minden mezőt tölts ki')
        }

        try {
            const data = await regisztracio(username, email, psw,  phoneNumber, postalCode, city, street_housenumber)
            console.log(data);
            if (data.error) {
                alert(data.error)
            }
            setUzenet(data.message)
        } catch (err) {
            alert("Nem sikerült kapcsolódni a backendhez")
        }
    }

    return (
        <>
            <Header />
            <div className="container-reg" style={{ maxWidth: 520, marginTop: 60 }}>
                <div className='jobb'>

                    <div className='reg-ful'>
                        <h1 className="text-center">Regisztráció</h1>
                        {uzenet && <div className="alert alert-success text-center my-2">{uzenet}</div>}

                        <InputMezo
                            label="Email"
                            type="email"
                            value={email}
                            setValue={setEmail}
                            placeholder="valami@valami.hu"
                        />

                        <InputMezo
                            label="Felhasználónév"
                            type="text"
                            value={username}
                            setValue={setUsername}
                            placeholder="John Doe"
                        />

                        <InputMezo
                            label="Jelszó"
                            type="password"
                            value={psw}
                            setValue={setPsw}
                            placeholder="*******"
                        />

                        <InputMezo
                            label="Telefonszám"
                            type="int"
                            value={phoneNumber}
                            setValue={setPhoneNumber}
                            placeholder="pl: 06 30 123 4567"
                        />

                        <InputMezo
                            label="Irányítószám"
                            type="int"
                            value={postalCode}
                            setValue={setPostalCode}
                            placeholder="pl: 1234"
                        />

                        <InputMezo
                            label="Város"
                            type="text"
                            value={city}
                            setValue={setCity}
                            placeholder="pl: 1234"
                        />

                        <InputMezo
                            label="Utca/házszám"
                            type="text"
                            value={street_housenumber}
                            setValue={setStreet_housenumber}
                            placeholder="pl: 1234"
                        />

                        <div className="text-center mt-10">
                            <Gomb
                                szin='btn btn-dark px-4'
                                onClick={onReg}
                                text='Regisztráció'
                            />
                        </div>

                        <div className="text-center mt-10">
                            <a href='/bejelentkezes'>
                                <Gomb
                                    szin='btn btn-ligth px-4'
                                    onClick=''
                                    text='Már van fiókom'
                                />
                            </a>

                        </div>
                    </div>


                </div>


                <div className='bal'>

                </div>


            </div>
            <Footer />
        </>

    )
}

export default Regisztracio