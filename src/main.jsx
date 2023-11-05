import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import GlobalStyle from './utils/style/GlobalStyle'
import Help from "./pages/Help"
import Join from "./pages/Join_we"
import Login from "./pages/Login"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/join' element={<Join />} />
          <Route path='/help' element={<Help />} />
        </Routes>
    </Router>
  </React.StrictMode>
)
