import './App.css'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Join/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes> 
    </BrowserRouter> 
    </>
  )
}

export default App
