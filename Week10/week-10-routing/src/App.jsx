import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route path="/neet/online-coaching-11" element={<Class11Program/>}/>
          <Route path="/neet/online-coaching-12" element={<Class12Program/>}/>
          <Route path="/" element={<Landing />}/>
          <Route path="*" element={< ErrorPage/>}/>
        </Route>
      </Routes>
      Footer | contact us
    </BrowserRouter>
    </div>
  )
}

function Layout (){
  return <div style={{height: "100vh" , background: "black"}}>
    <Header/>
    <div style={{height: "90vh", background: "red"}}>
      <Outlet />
    </div>
    footer
  </div>
}

function Header(){
  return <>
    <Link to="/">Allen</Link>  
    | 
    <Link to="/neet/online-coaching-11">Class 11</Link> 
    |  
    <Link to="/neet/online-coaching-12">Class 12</Link>
  </>
}

function ErrorPage(){
  return <div>
    sorry page not found
  </div>
}


function Landing() {
  return <div>
    welcome to allen
  </div>
}

function Class11Program() {
  return <div>
    NEET program for Class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }
  return <div>
    NEET program for Class 12th
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}
export default App
