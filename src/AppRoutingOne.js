import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/404'> NOT FOUND </Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />

            {/* Rutas dinámicas */}
            {['/about', '/faqs'].map((path, index) => (
              <Route key={index} path={path} element={<AboutPage />} />
            ))}

            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/tasks' element={<TaskPage />} />
            <Route path='/task/:id' element={<TaskDetailPage />} />

            {/* Ruta 404 */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;