import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Cards from "./Cards";


const HeaderStyle = styled.header`
  width: 100%;
  height: 70vh;
  background: url(https://images.unsplash.com/photo-1517115358639-5720b8e02219?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80) no-repeat center/cover;
`;
const OverlayDiv = styled.div`
  /* Overlay */
  height: 70%;
  position: absolute;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function Showcase({fish}) {
  
  return (
    <>
    <HeaderStyle className="header">
      <OverlayDiv>
        <nav>
          <div className="menu-icon">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          
          <div className="logo">FISH FACTORY</div>
          <div className="menu">
            <ul>
              <li>
                <a href="#0">Home</a>
              </li>
              <li>
                <Link to="/form">Add Fish</Link>
              </li>
            </ul>
          </div>
        </nav>
      </OverlayDiv>
    </HeaderStyle>
    <Cards fish={fish}/>
    </>
  );
}
