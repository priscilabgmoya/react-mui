import { useContext } from 'react';
import { Navigate } from 'react-router';


const PrivateRoutes = ({children}) => {
  let bandera = true
  return (bandera)?
     children : <Navigate to="/auth" />
}

export default PrivateRoutes