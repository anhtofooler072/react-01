import { useState } from 'react'
import './App.css'
import Slide from '../component/Slide'
import Recentworks from '../component/Recentworks'
import Services from '../component/Services'
import Tweet from '../component/Tweet'
import Footer from '../component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Slide />
    <div className="infoBox">
      <Services />
      <Recentworks />
      <Tweet />
    </div>
    <Footer />
    </>
  )
}

export default App
