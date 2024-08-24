import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import FormAddMoney from './Components/FormAddMoney'
import MainControl from './Components/MainControl'


function App() {
  const [count, setCount] = useState(0)
  const [isValid, setIsValid] =useState(false)
  const component = isValid 
                  ? <MainControl count={count}/>
                  : <FormAddMoney setCount={setCount} setIsValid={setIsValid}/>


  return (
    <div className="App">

      <div className="container is-flex is-justify-content-center is-align-items-center" style={{ }}>
        <div className="box m-2"
          style={{
            background: 'linear-gradient(300deg, purple, lightblue)',
            width: '80%',
            textAlign: 'center',
            color: 'black'
          }}>
          <Header />
          {component}

        </div>
      </div>

    </div>
  )
}

export default App
