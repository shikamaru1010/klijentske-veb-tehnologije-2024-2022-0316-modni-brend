import {Menu,Container, MenuItem, Button} from 'semantic-ui-react';

type Props = {
    setFormOpen: 
        (value: boolean) => void;
    
}
export default function NavBar({setFormOpen}: Props) {
  return (
    <Menu inverted={true}>
        <Container className='navBar'>
            <MenuItem header position='left'>
                <img className='logo' src="/logo.png" alt='Logo' style={{width: "fit-content"}} height={100} />
            </MenuItem>
            <MenuItem className='Links'>
                    <ul className="main-nav-list">
                        <li><a href="index.html" className="main-nav-link">Home</a></li>
                        <Button 
                        onClick={() => setFormOpen(true)}
                        floated='right' positive={true} inverted={true} content="Ask">

                        </Button>
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
