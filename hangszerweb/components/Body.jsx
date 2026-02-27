import "../src/App.css"

function Body() {
  return (
    <div className="body">
      <div className="container">
        <div className="left-part">
          
        </div>

        <div className="right-part">

          <navbar className="navbar-right">
            <h1 className="navbar-cim">Hangszerek</h1>

            <card>
              <a href="/billentyus">
                <h2>BILLENTYŰS</h2>
              </a>
            </card>

            <card>
              <a href="/huros">
                <h2>HÚROS</h2>
              </a>
            </card>

            <card>
              <a href="/fuvos">
                <h2>FÚVÓS</h2>
              </a>
            </card>

            <card>
              <a href="/utos">
                <h2>ÜTŐS</h2>
              </a>
            </card>
          </navbar>
        </div>
      </div>
    </div>
  )
}

export default Body