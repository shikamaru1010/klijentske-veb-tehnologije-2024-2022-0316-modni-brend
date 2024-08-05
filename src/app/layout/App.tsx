import NavBar from './nav/NavBar'
import { Container } from 'semantic-ui-react'
import { Outlet, useLocation } from 'react-router-dom'
import HomePage from '../features/home/HomePage';


export default function App() {
  const location = useLocation();

  return (
      <>
      {location.pathname === "/" ? <HomePage/> : (
      <>
        <NavBar/>
        <Container className='main'>
          {location.pathname === "/" ? <HomePage /> : <Outlet />}
        </Container>
      </>
      )}
      </>

  )
}


