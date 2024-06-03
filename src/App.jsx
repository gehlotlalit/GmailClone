import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/shared/Navbar'

function App() {

  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden '>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App
