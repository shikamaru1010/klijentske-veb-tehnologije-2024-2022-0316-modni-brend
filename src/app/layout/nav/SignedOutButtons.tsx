import { Button, MenuItem } from "semantic-ui-react";

type Props ={
    setAuth: (value:boolean) => void;
}
export default function SignedOutButtons({setAuth}:Props) {
  
    return (
    
          <MenuItem position='right' className='navBarLogs'>
                <button className="ui icon button">
                    <i className="user icon"></i>
                </button>
                <Button basic inverted content='Login' onClick={() => setAuth(true)} />
                <Button basic inverted content='Register'/>
            </MenuItem>
  
  )
}
