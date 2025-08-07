 
import './App.css'

function App() {

  return (
    <>
      <Counter />
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);  
  return <div>
    {count}
    <Decrease setCount={setCount} />
    <Increase setCount={setCount} />
  </div>
}

function Decrease(){

  function decrease() {
    setCount(c => c-1)
  }
  return(
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Increase(){

  function increase() {
    setCount(c => c+1)
  }
  return(
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default App
