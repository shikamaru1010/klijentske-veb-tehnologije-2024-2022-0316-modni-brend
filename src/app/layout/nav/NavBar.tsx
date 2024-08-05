import { NavLink } from 'react-router-dom';
import {Menu,Container, MenuItem, Button} from 'semantic-ui-react';
import SignedOutButtons from './SignedOutButtons';
import SignedInMenu from './SignedInMenu';
import { useState } from 'react';


export default function NavBar() {
    const[auth,setAuth] = useState(true);
  return (
    <Menu inverted={true}>
        <Container className='navBar'>
            <MenuItem header as={NavLink} to="/" position='left'>
                <img className='logo' src="/logo.png" alt='Logo' style={{width: "fit-content"}} height={100} />
            </MenuItem>
            <MenuItem className='Links'>
                    <ul className="main-nav-list">
                        <Button as={NavLink} to="/">

                        <li>Home</li>
                        </Button>
                        <Button 
                        as={NavLink} to="Ask Us"
                        floated='right' positive={true} inverted={true} content="Ask Us">

                        </Button>
                        <Button as={NavLink} to="/Brand">
                        <li>Collection</li>
                        </Button>
                    </ul>
            </MenuItem>
            {auth ?  <SignedInMenu setAuth={setAuth}/> : <SignedOutButtons setAuth={setAuth}/>}
        </Container>
    </Menu>
  )
}
