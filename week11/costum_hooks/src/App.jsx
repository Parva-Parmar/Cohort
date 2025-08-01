import { useEffect, useState } from 'react'
import './App.css'
import { useFetch, usePostTitle } from './hooks/useFetch'


// costom hook
// function useCounter(){
//   const [count , setCount] = useState(0);

//   function increaseCount(){
//     setCount(count+1);
//   }

//   return{
//     count: count,
//     increaseCount: increaseCount
//   }
// }

function App() {
  const [CurrentPost ,setCurrentPost] = useState(1);
  const {finalData, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/" + CurrentPost, 10);



  if(loading){
    return <div>
      loading...
    </div>
  }
  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
       {JSON.stringify(finalData)}
    </div>
  )
}

// function Counter(){
//   const {count,increaseCount} = useCounter();

//   return <div>
//     <button onClick ={increaseCount}>Increase {count}</button>
//   </div>
// }

export default App
