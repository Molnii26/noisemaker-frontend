const BACKEND_URL = 'http://127.0.0.1:3000/users'

export async function regisztracio(username, email, psw,  phoneNumber, postalCode, city, street_housenumber){
    const res = await fetch(`${BACKEND_URL}/regisztracio`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, psw,  phoneNumber, postalCode, city, street_housenumber })
    })

    //console.log(res)

    const data = await res.json()

    if (!data.error) {
        return data
    }
    return data
}

export async function bejelentkezes(psw, email){
    const res = await fetch(`${BACKEND_URL}/bejelentkezes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ psw, email })
    })

    //console.log(res)

    const data = await res.json()

    if (!data.error) {
        return data
    }
    return data
}