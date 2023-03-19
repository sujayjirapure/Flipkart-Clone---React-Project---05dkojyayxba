import React ,{useState ,useEffect ,useContext} from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { Appdata } from "./App";
import '../styles/App.css';

const Loginfn = () => {

    const {loginstatus ,setStatus} = useContext(Appdata);
    const {loginformdata, setFormdata} = useContext(Appdata);

   
    //state objetc for error data
    //const [formerror, setFormerror] = useState({});
    //state varibel to store api data response
    //const [apiresponse, setApiresponse] = useState({});

    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...loginformdata, ...tempObj
        });
    }
    const tempnavigate = useNavigate();

    const loginfn = () => {

        //setStatus(true);
        let temp = JSON.parse(localStorage.getItem('user'));
        let username = loginformdata.username;
        let password = loginformdata.password;

        for(let i=0; i<temp.length ; i++){
            if(temp[i].username === loginformdata.username){
                if(temp[i].password === loginformdata.password){
                    setStatus(true);
                }
            }
        }

        setFormdata(initialData);
    }

    useEffect(() => {
        //let temp = localStorage.getItem('user');   //getting data from loacl storage (syntax)
        //console.log(JSON.parse(temp));
        const items = JSON.parse(localStorage.getItem('user'));
        console.log("login stst-",loginstatus);
        console.log("login stst-",items);
    },[loginstatus])

  return (

    <div className='login-outter'>
            {
                loginstatus ?
                <h2>Successfully login</h2>
                
                 :
                <div className='login-card'>

                    Name- <input type="text" id="username" onChange={updateData} value={loginformdata.username} />
                    <br></br>
                    <br></br>
                    Mobile- <input type="password" id="password" onChange={updateData} value={loginformdata.password}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className='btn-loginfn' onClick={loginfn}>Login</button>
                    <br></br>
                    <br></br>
                    Note - Please enter same username and password which is use at time of registration
                </div>
            }
    </div>
  )
}


export default Loginfn;