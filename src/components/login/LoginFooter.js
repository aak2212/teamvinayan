import React from "react";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Nav, Navbar, NavbarBrand, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const FooterContainer = styled.footer`
justify-content: center;

.footer-middle {
  background: var(--mainDark);
  padding-top: 0.5rem;
  padding-bottom: 6rem;
  margin-top: 6rem;
  position: relative;
  z-index: 5;
  color: var(--mainWhite);
}

.footer-bottom{
  padding-top: 1rem;
  padding-bottom: 1rem;
}

ul li a {
  color: var(--mainWhite);
}

ul li a:hover {
  color: var(--mainLightGrey);
}
`;

export const LoginFooter = () => {
  return (
    <FooterContainer className="fixed-bottom">
      <div className="footer-middle">
      <div className="container">
        <div className="row">
          {/* Coulmn 1*/}
          <div className="co;l-md-3 col-sm-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>+91 8989898989</li>
              <li>teamvinayan@gmail.com</li>
              
            </ul>
          </div>
          <div className="co;l-md-3 col-sm-6">
            <ul className="list-unstyled">
              <li ><a href="/">Blogs</a></li>
              <li ><a href="/">Careers</a></li>  
              <li ><a href="/">Refund Policy</a></li>
              <li ><a href="/">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Vinayan - All Rights Reserved
          </p>
        </div>
        </div>  
      </div>
    </FooterContainer>
  );
}
