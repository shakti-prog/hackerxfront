import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import mutualfund from '../../assets/img/mutfund.png';
import homloan from '../../assets/img/homloan.png';
import asscare from '../../assets/img/assetcare.png';
import homins from '../../assets/img/homeins.png';
import perloan from '../../assets/img/perloan.png';
import dematAcc from '../../assets/img/dematacc.png';
import wheel23 from '../../assets/img/wheel23.png';
import motins from '../../assets/img/motins.png';
import healthins from '../../assets/img/healthins.png';
import eminet from '../../assets/img/eminet.png';
import cred from '../../assets/img/cred.png';
import {FadeTransform} from 'react-animation-components';
import Rating from 'material-ui-rating'
import Axios from 'axios';


function RenderCard(props) {
  var img = cred
  if (props.name == "Credit Card") {
    img = cred
  }
  else if (props.name == "Demat Account") {
    img = dematAcc;
  }
  else if (props.name == "2&3 Wheeler Loan") {
    img = wheel23;
  }
  else if (props.name == "Asset Care") {
    img = asscare;
  }
  else if (props.name == "Health Insurance") {
    img = healthins;
  }
  else if (props.name == "EMI NETWORK Card") {
    img = eminet
  }
  else if (props.name == "Personal Loan") {
    img = perloan;
  }
  else if (props.name == "Mutual Funds") {
    img = mutualfund;
  }
  else if (props.name == "Home Insurance") {
    img = homins;
  }
  else if (props.name == "Home Loan") {
    img = homloan;
  }
  else {
    img = motins;
  }
  const [value, setValue] = React.useState(0);
   function handleRating(){
      const obj = {
        "product":props.name,
        "rating":value
      }
  
      Axios.patch('https://hackerxauth.herokuapp.com/users/me/rating',obj,{headers:
     {
      "Authorization" :props.token
     }
    }).
      then((response)=>{
         if(response.status == 200){
           window.alert("Your ratings have been submitted")
         }
         else  if(response.status==401){
           window.alert("Not submmited");
         }
      }).catch((err)=>console.log(err))
  
  
    }
  
  return( 
    <FadeTransform
    in
    transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
    }}
    >
    <Card>
      <CardImg src={img} />
      <CardBody>
        <CardTitle> <strong>{props.name}</strong></CardTitle>
        <br/>
        <CardSubtitle><strong>Rating - </strong></CardSubtitle>
          <CardText><strong>{parseFloat(props.rating.toFixed(3))}</strong></CardText>
          <br/>
          <CardSubtitle><strong>Give a rating -</strong> </CardSubtitle>
          <Rating
            value={value}
            max={5}
            onChange={(value) =>setValue(value)}
          />
          <Button onClick={handleRating}>Submit Rating</Button>
      </CardBody>
    </Card>
    </FadeTransform>
     
  );
}

function SingInDash(props) {

 
  const [activeTab, setActiveTab] = React.useState("1");
 

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar token={props.token}/>
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/logo.png").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                {props.name} <br />
              </h4>
              <h6 className="description">User status - Existing User</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                Welcome user , here are some top rated recommendations for you .
                <br/> Products are placed in non-decreasing 
                 order of their ratings 
              </p>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Update profile
              </Button>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <h1>Products</h1>
            </div>
          </div>
          {/* Tab panes */}
        </Container>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-md m-1">
              <RenderCard name={props.info[0].name} rating={props.info[0].est} token={props.token}/>
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard name = {props.info[1].name} rating={props.info[1].est} token={props.token}/>
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard  name = {props.info[2].name} rating={props.info[2].est} token={props.token}/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-md m-1">
              <RenderCard name={props.info[3].name} rating={props.info[3].est} token={props.token} />
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard name = {props.info[4].name} rating={props.info[4].est} token={props.token} />
            </div>
            <div className="col-12 col-md m-1">
              <RenderCard  name = {props.info[5].name} rating={props.info[5].est} token={props.token}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingInDash;