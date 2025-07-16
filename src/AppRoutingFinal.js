import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';


function AppRoutingFinal() {

//TODO cambiar logged segun los datos del local, sesionStorage
  let loggedIn = true;


  return (
    <Router>
      {/* Listado de rutas */}
      <Routes>
        <Route
          exact path='/'
          element={
            loggedIn ?
              <Navigate to='/dashboard' replace />
              :
              <Navigate to='/login' replace />
          }
        />
        {/* Ruta de Login */}
        <Route exact path='/login' element={<LoginPage />} />
        {/* Ruta del Dashboard */}
        <Route
          exact path='/dashboard'
          element={
            loggedIn ?
              ( <DashBoard /> )
              :
              <Navigate to='/login' replace />
          }
        />



        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>

  );
}

export default AppRoutingFinal;