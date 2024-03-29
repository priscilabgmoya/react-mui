import { useContext } from 'react';
import { Navigate } from 'react-router'; 

const PublicRoutes = ({children}) => {
let bandera = true
  return (bandera)?
     children : <Navigate to="/" />
}

export default PublicRoutes;