import { Card } from "./Card"
import { CounterApp } from "./Contador"


function App() {


  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center">List Card</h1>
        <div className="col-md-12">
          <div className="row">
            <Card />
          </div>
          <div className="row" style={{
            backgroundColor: 'aliceblue'
          }}>
          <CounterApp />
        </div>
      </div>
    </div>
    </>

  )
}

export default App
