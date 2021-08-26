/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React , {useState} from "react";
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
// core components
import { event } from "jquery";
import SingInDash from "./SignInDash";
import Axios from 'axios';

const validator = require('validator');

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [state, setstate] = useState(false);
   const [data,setData] = useState([]);
   const [name,setName] = useState("");
   const [token ,setToken] = useState("");
   


   const handleEmail = (event)=>{
     setEmail(event.target.value);
   }
   const handlePassword = (event)=>{
     setPassword(event.target.value);
   }
   const handleSubmit = (event)=>{
     event.preventDefault();
     if(!validator.isEmail(email)){
       window.alert("Pls provide a valid email");
       return;
     }
     Axios.post('https://hackerxauth.herokuapp.com/users/login', {
       'email': email,
       'password': password
     }).then((response) => {
       setToken(response.data.token);

       if (response.data.ret) {
         Axios.post("https://bajajdjango.herokuapp.com/predict/res1", {
           'name': response.data.user.name
         }).then((response) => {
           setData(response.data.resp)
           setName(response.data.name)
           setstate(true)

         })
       } else {
         alert("User not found please signup")
         window.location.href = "/signup-page"
       }
     }).catch((e) => {
       console.log(e)
     })
   }

  return (
    <div>
       {!state ? 
       <>
       <div
         className="page-header"
         style={{
           backgroundImage:
             "url(" + require("assets/img/login-image.jpg").default + ")",
         }}
       >
         <div className="filter" />
         <Container>
           <Row>
             <Col className="ml-auto mr-auto" lg="4">
               <Card className="card-register ml-auto mr-auto">
                 <h3 className="title mx-auto">Welcome to Sign In Page</h3>
                 <div className="social-line text-center">
                   <Button
                     className="btn-neutral btn-just-icon mr-1"
                     color="facebook"
                     href="#pablo"
                     onClick={(e) => e.preventDefault()}
                   >
                     <i className="fa fa-facebook-square" />
                   </Button>
                   <Button
                     className="btn-neutral btn-just-icon mr-1"
                     color="google"
                     href="#pablo"
                     onClick={(e) => e.preventDefault()}
                   >
                     <i className="fa fa-google-plus" />
                   </Button>
                   <Button
                     className="btn-neutral btn-just-icon"
                     color="twitter"
                     href="#pablo"
                     onClick={(e) => e.preventDefault()}
                   >
                     <i className="fa fa-twitter" />
                   </Button>
                 </div>
                 <Form className="register-form">
                   <label>Email</label>
                   <Input placeholder="Email" type="text" onChange={e=>handleEmail(e)}/>
                   <label>Password</label>
                   <Input placeholder="Password" type="password" onChange={e=>handlePassword(e)} />
                   <Button block className="btn-round" color="danger" onClick={handleSubmit}>
                     SignIn
                   </Button>
                 </Form>
                 <div className="forgot">
                   <Button
                     className="btn-link"
                     color="danger"
                     href="#pablo"
                     onClick={(event)=>window.location.href="/signup-page"}
                   >
                    Don't have a account ? Sign Up 
                   </Button>
                 </div>
               </Card>
             </Col>
           </Row>
         </Container>
         <div className="footer register-footer text-center">
         </div>
       </div>
     </>     
       :<SingInDash info={data} name={name} token={token}/>}
    </div>
  );
}

export default RegisterPage;
