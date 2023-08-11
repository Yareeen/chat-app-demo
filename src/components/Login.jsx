import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import "../index.css";
import {  useState } from 'react';
import {useNavigate} from "react-router-dom";
import { useStore } from './Zustand';


function Login(){



const [username,setName] = useState('');
const navigate = useNavigate();
const setUsernameInStore = useStore((state) => state.setUsername);

const handleSubmit = () => {
  if(username.trim() !== ''){
      setUsernameInStore(username.trim());
      navigate('/chatapp');
  }
  
};

    return(
     
     <div className='loginpage justify-content-center'>

      <Paper elevation={5} className="flex flex-col  py-5 px-10 items-center">
    
        <TextField id="outlined-basic" label="Username" variant={"outlined"} value={username} onChange={e => setName(e.target.value)} type= "text" />
        <Button variant="contained" onClick={handleSubmit} style={{ backgroundColor: 'pink', height: '56px', width: '100%', marginTop: '10px' }}>Go </Button>

      </Paper>
      </div>
    );
    
}

export default Login;