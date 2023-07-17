import React ,{useState ,useEffect ,useContext} from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { Appdata } from "./App";
import '../styles/App.css';


const Register = () => {
    const context = useContext(Appdata);
    

    //state object for formdata
    const [formdata, setFormdata] = useState(initialData);
     //state variable to check form submission status
     const [status, setStatus] = useState(false);

    //state objetc for error data
    //const [formerror, setFormerror] = useState({});
    //state varibel to store api data response
    //const [apiresponse, setApiresponse] = useState({});

    const updateData = (e) => {
        console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...formdata, ...tempObj
        });
    }

    const registerFn = () => {

        setStatus(true);
        let temp = JSON.parse(localStorage.getItem('user')) || [];
        localStorage.setItem('user',JSON.stringify([...temp, formdata]));
        //to black form after submiting
        setFormdata(initialData);
    }

    useEffect(() => {
        let temp = localStorage.getItem('user');
        console.log(JSON.parse(temp));
    },[status])

  return (
    <div className='login-outter'>
            {
                status 
                ?
                <div className='suc-msg'><h2>Successfully Register</h2><h3>Thank you you can log in now</h3>
                </div>
                :
                <div className='login-card-outer'>
                    <div className='login-card-one'>
                        <h2>Register</h2>
                        <br></br>
                        <br></br>
                        <h5>Get access to your Orders, Wishlist and Recommendations</h5>
                        <br></br>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" />
                    </div>

                    <div className='login-card-two'>

                        Name- <input type="text" id="username" onChange={updateData} value={formdata.username} />
                        <br></br>
                        <br></br>
                        Password- <input type="password" id="password" onChange={updateData} value={formdata.password}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                            <button className='btn-loginfn' onClick={registerFn}>Register</button>
                        
                        <br></br>
                        <br></br>
                        Note - Please enter same username and password which is use at time of registration
                    </div>
                </div>
            }
        
        </div>
  )
}


export default Register;