import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePagee from './pages/home/StatePagee';





function AppRoutingOne() {

  let logged = false;


  let taskList = [
    {
      id: 1,
      name: 'Tarea 1',
      description: 'Mi primera tarea'
    },
    {
      id: 2,
      name: 'Tarea 2',
      description: 'Mi segunda tarea'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/task/1'>| Tarea 1 |</Link>
          <Link to='/task/2'>| Tarea 2 |</Link>
          <Link to='/404'> | NOT FOUND | </Link>
          <Link to='/Login'>| Iniciar Sesión |</Link>
          
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/online-state' element={<StatePagee />} />

            {/* Ruta Protegida */}
            <Route path='/login' element={
              logged ?
                // Alerta y Navegación si el usuario ya está loggeado. 
                // Usamos un fragmento para manejar la alerta y el Navigate.
                (<>
                  {(() => {
                    alert('Ya estás loggeado. Redireccionando a inicio.');
                  })()}
                  <Navigate to='/' replace />
                </>)
                :
                // Si no está loggeado, muestra LoginPage
                <LoginPage />
            } />

            {/* Rutas dinámicas */}
            {['/about', '/faqs'].map((path, index) => (
              <Route key={index} path={path} element={<AboutPage />} />
            ))}

            <Route path='/profile' element={
              logged ? (
                <ProfilePage />
              ) : (
                <>
                  {(() => {
                    alert('Debes estar loggeado. Redireccionando a inicio...');
                    return <Navigate to='/login' replace />
                  })()}
                </>
              )
            }
            />


            <Route path='/tasks' element={<TaskPage />} />
            <Route path='/task/:id' element={<TaskDetailPage taskList={taskList}/>}
            />


            {/* Ruta 404 */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;