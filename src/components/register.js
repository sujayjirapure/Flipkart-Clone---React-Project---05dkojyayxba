import React ,{useState ,useEffect ,useContext} from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { Appdata } from "./App";
import '../styles/App.css';


const Register = () => {
  
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
  

  const registerFn = () => {

    setStatus(true);
    let temp = JSON.parse(localStorage.getItem('user')) || [];
    localStorage.setItem('user',JSON.stringify([...temp, formdata]));
    //to black form after submiting
    setFormdata(initialData);
  } 

  useEffect(() => {
      const items = JSON.parse(localStorage.getItem('user'));
      console.log("login stst-",loginstatus);
      console.log("login stst-",items);
  },[loginstatus])


  return (
    <div className='login-outter'>
            {
                loginstatus 
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

                        Name- <input type="text" id="username" onChange={updateData} value={loginformdata.username} />
                        <br></br>
                        <br></br>
                        Password- <input type="password" id="password" onChange={updateData} value={loginformdata.password}/>
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