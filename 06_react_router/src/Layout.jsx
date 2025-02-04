import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
/*
    - Outlet: se header aur footer har page pe rehega and sirf bihcme ka components will change accordingly.
*/


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout