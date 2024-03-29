import NavBar from '../NavBar/NavBar'
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { routePrivate } from '../../helpers/route'
import Footer from '../Footer/Footer'
function PrivateLayout() {

  return (
    <NavBar>
    < Container maxWidth="xl" className='mainRender'>
        <Routes>
            {
                routePrivate.map((route, index)=>{
                    return  <Route key={index} path={route.path} element={route.element}/>
                })
            }
        </Routes>
    </Container>
    <Footer/>
    </NavBar>
  )
}

export default PrivateLayout