
import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import {  routePublic } from '../../helpers/route'
import Footer from '../Footer/Footer'
function PublicLayout() {

  return (
    <>
    <Container maxWidth="xl" className='mainRender'>
        <Routes>
            {
                routePublic.map((route, index)=>{
                    return  <Route key={index} path={route.path} element={route.element}/>
                })
            }
        </Routes>
    </Container>
    <Footer/>
    </>
  )
}

export default PublicLayout