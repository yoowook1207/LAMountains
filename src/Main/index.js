import React, {useState} from 'react'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import History from '../components/History'
import Climb from '../components/Climb'
import Footer from '../components/Footer'

const Main = () => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!isOpen)
    }

  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Home />
        <History/>
        <Climb/>
        <Footer/>
      </>

  )
}

export default Main