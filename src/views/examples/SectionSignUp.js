import { event } from "jquery";
import React, { useState } from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import ProfilePage from "./ProfilePage";
import Axios from 'axios';


// core components
const validator = require('validator');


function SectionSignUp() {
 const [email,setEmail] = useState("");
 const [age,setAge] = useState("");
 const [status,setStatus] = useState("");
 const [name,setName] = useState("");
 const [password,setPassword] = useState("");
 const [gender,setGender] = useState("");
 const [show, setShow] = useState(false);
 const [state, setState] = useState([]);
 const [token ,setToken] = useState("");
 
 const handleEmail = (e)=>{
  setEmail(e.target.value);
 }
 const handleAge = (e)=>{
   setAge(e.target.value)
 }
 const handleStatus = (e)=>{
   setStatus(e.target.value);
 }
 const handleName = (e)=>{
   setName(e.target.value)
 }
 const handlePassword = (e)=>{
   setPassword(e.target.value);
 }
 const handleGender = (e)=>{
   setGender(e.target.value);
 }
 
 const handleSubmit = (e)=>{
 e.preventDefault()
 e.preventDefault()
 const obj = {
   "name":name,
   'email':email,
   'password':password,
   'age':age
 }
 if(obj.name.length < 3){
   window.alert("Name should have atleast 3 characters");
   return;
 }
 else if(!validator.isEmail(obj.email)){
   window.alert("Pls provide valid email");
   return;
 }
 else if(age<=0){
   window.alert("Pls provide valid age");
   return;
 }
 else if(gender!= "Male" && gender!="Female" && gender!="Other"){
   window.alert("Type Male or Female or Other . No other response will be accepted");
   return;
 }
 else if(status != "Married" && status != "Single"){
   window.alert("Type Married or Single . No other response will be accepted");
   return;
 }

 Axios.post('https://hackerxauth.herokuapp.com/users',obj).then((response)=>{
   console.log(response)
   if(response.status===201){
     setToken(response.data.token);
     Axios.post('https://bajajdjango.herokuapp.com/predict/res',{

     }).then(function (response){
       setState(response.data.response);
       setShow(true);
     })
     .catch(function(error){
       console.log(error);
     })
   }
 }).catch((e)=>{
   console.log(e)
 })



 }
  return (
    <div>
    {!show ? 
    <>

     <div
       className="section section-image section-login"
       style={{
         backgroundImage:
           "url(" + require("assets/img/login-image.jpg").default + ")",
       }}
     >
       <Container>
         <Row>
           <Col className="mx-auto" lg="4" md="6">
             <Card className="card-register">
               <h3 className="title mx-auto"> SignUp Page </h3>
               <div className="social-line text-center">
                 <Button
                   className="btn-neutral btn-just-icon mt-0"
                   color="facebook"
                   href="#pablo"
                   onClick={(e) => e.preventDefault()}
                 >
                   <i className="fa fa-facebook-square" />
                 </Button>
                 <Button
                   className="btn-neutral btn-just-icon mt-0 ml-1"
                   color="google"
                   href="#pablo"
                   onClick={(e) => e.preventDefault()}
                 >
                   <i className="fa fa-google-plus" />
                 </Button>
                 <Button
                   className="btn-neutral btn-just-icon mt-0 ml-1"
                   color="twitter"
                   href="#pablo"
                   onClick={(e) => e.preventDefault()}
                 >
                   <i className="fa fa-twitter" />
                 </Button>
               </div>
               <Form className="register-form" onSubmit={handleSubmit}>
               <label>Name</label>
                 <InputGroup className="form-group-no-border" onChange={e=>handleName(e)}>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText >
                       <i className="nc-icon nc-email-85" />
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Name" type="text" />
                 </InputGroup>
                 <label>Email</label>
                 <InputGroup className="form-group-no-border" onChange={e=>handleEmail(e)}>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText >
                       <i className="nc-icon nc-email-85" />
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Email" type="email" />
                 </InputGroup>
                 <label>Password</label>
                 <InputGroup className="form-group-no-border" onChange={e=>handlePassword(e)}>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <i className="nc-icon nc-key-25" />
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Password" type="password" />
                 </InputGroup>
                 <label>Gender</label>
                 <InputGroup className="form-group-no-border" onChange={e=>handleGender(e)}>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <i className="nc-icon nc-key-25" />
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Gender" type="text"/>
                 </InputGroup>
                 <label>Age</label>
                 <InputGroup className="form-group-no-border" onChange={event=>handleAge(event)}>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <i className="nc-icon nc-key-25" />
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Age" type="number" />
                 </InputGroup>
                 <label>Martial Status</label>
                 <InputGroup className="form-group-no-border" onChange={event=>handleStatus(event)}>
                   <InputGroupAddon addonType="prepend">
                     <InputGroupText>
                       <i className="nc-icon nc-key-25" />
                     </InputGroupText>
                   </InputGroupAddon>
                   <Input placeholder="Martial Status" type="text" />
                 </InputGroup>
                 <Button
                   block
                   className="btn-round"
                   color="danger"
                   type="button"
                   onClick={handleSubmit}
                 >
                    SignUp
                 </Button>
               </Form>
               <div className="forgot">
               </div>
             </Card>
             <div className="col text-center">
             <Button
                   className="btn-link"
                   color="danger"
                   href="#pablo"
                   onClick={event=>{window.location.href="/register-page"}}
                 >
                   Already have a account ? Sign in 
                 </Button>
             </div>
           </Col>
         </Row>
       </Container>
     </div>{" "}
   </> 
    :  
    
    <ProfilePage info={state} name = {name} token={token}/>}

      </div>
  );
}

export default SectionSignUp;