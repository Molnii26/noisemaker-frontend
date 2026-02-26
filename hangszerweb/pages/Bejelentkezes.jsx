import { bejelentkezes } from "../src/api";
import Gomb from "../components/Gomb";
import InputMezo from "../components/InputMezo";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Bejelentkezes() {
    const [Email, setEmail] = useState('')
    const [PSW, setPsw] = useState('')

    const [uzenet, setUzenet] = useState("")

    async function onLog() {
        setUzenet('')

        if (!Email || !PSW) {
            return alert('Minden mezőt tölts ki')
        }

        try {
            const data = await bejelentkezes(PSW, Email)
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
            <div className="container-log" style={{ maxWidth: 520, marginTop: 60 }}>
                <h1 className="text-center">Bejelentkezés</h1>

                {uzenet && <div className="alert alert-success text-center my-2">{uzenet}</div>}

                <InputMezo
                    label="Email"
                    type="email"
                    value={Email}
                    setValue={setEmail}
                    placeholder="valami@valami.hu"
                />

                <InputMezo
                    label="Jelszó"
                    type="password"
                    value={PSW}
                    setValue={setPsw}
                    placeholder="*******"
                />

                <div className="text-center mt-3">
                    <a href="/sikeresBejelentkezes">
                    <Gomb
                        szin='btn btn-dark px-4'
                        onClick={onLog}
                        text='Belépés'
                    />
                    </a>
                </div>

                <div className="text-center mt-3">
                    <a href="/fooldal">
                    <Gomb
                        szin='btn btn-ligth px-4'
                        onClick=''
                        text='Vissza a főoldalra'
                    />
                    </a>
                </div>

                <div className="text-center mt-3">
                    <a href="/regisztracio">
                    <Gomb
                        szin='btn btn-ligth px-4'
                        onClick=''
                        text='Még nincs fiókom'
                    />
                    </a>
                </div>
            </div>
            <Footer />
        </>

    )
}