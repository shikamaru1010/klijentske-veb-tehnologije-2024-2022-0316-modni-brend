import NavBar from './nav/NavBar'
import Hero from '../features/Brand/dashboard/Hero'
import { Container } from 'semantic-ui-react'

import CollectionDashboard from '../features/Brand/dashboard/CollectionDashboard'
import { useState } from 'react'

export default function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
        <div>
        <NavBar setFormOpen={setFormOpen}/>
        <Hero />
        <Container className='main'>
          <CollectionDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
        </Container>

        </div>

  )
}


