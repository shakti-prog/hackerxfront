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
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar/>
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Our Journey</h2>
                <h5 className="description">
                   <strong>
                     Bajaj Finserv was formed in April 2007 as a result of its demerger from Bajaj Auto Limited as a seperate entity to focus purely on financial services buisness of the group . The process of demerger was completed in Feb 2008
                     The constantly changing demographics and dynamics of the India economy , has led to creation of varoius needs of the customer . The Indian customer now demands proper avenues of channelizing their savings , financial protection and is also desirous of spending more on valuable goods and services. All these wants need to be met by dynamic players in the 
                     financial service space.Bajaj Finserv was formed specifically to cater to these needs.
                    </strong>
                </h5>
                <br/>
                <h5 className="description">
                  <strong>
                    The operating companies carry with Bajaj brand,which carries with it decades of commitment to buisness ethics,integrity and highest standards of 
                    fiduciary responsibilty   
                  </strong>
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Started - </h4>
                    <p className="description" >
                      <strong>
                     April 2007
                     </strong>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Founder -</h4>
                    <p>
                      <strong>
                      Rahul Bajaj
                      </strong>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Industry - </h4>
                    <p className="description">
                      <strong>
                     Financial Service
                     </strong>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Headquaters -</h4>
                    <p className="description">
                      <strong>Pune,Maharashtra,India </strong>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
          </Container>
        </div>
        
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
