import {Menu,Container, MenuItem, Button} from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu inverted={true} style={{height: "10vh"}}>
        <Container className='navBar'>
            <MenuItem header position='left'>
                <img className='logo' src="/logo.png" alt='Logo' style={{width: "fit-content"}} height={100} />
            </MenuItem>
            <MenuItem className='Links'>
                    <ul className="main-nav-list">
                        <li><a href="index.html" className="main-nav-link">Home</a></li>
                        <li><a href="html/collection.html" className="main-nav-link">Collection</a>
                        </li>
                        <li><a href="html/contact.html" className="main-nav-link">Contact</a></li>
                    </ul>
            </MenuItem>
            <MenuItem position='right' className='navBarLogs'>
                <button className="ui icon button">
                    <i className="user icon"></i>
                </button>
                <Button basic inverted content='Login' />
                <Button basic inverted content='Register'/>
            </MenuItem>
        </Container>
    </Menu>
  )
}
