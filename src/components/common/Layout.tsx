import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div>
       <div className="flex">
       <Header/>
        <Outlet/>
       </div>
        <Footer/>
    </div>
  )
}

export default Layout