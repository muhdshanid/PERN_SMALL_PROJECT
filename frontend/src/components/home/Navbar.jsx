import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DesktopMenu,
  HandburgerButton,
  MobileMenu,
  StyledNavbar,
} from "../styled/Navbar.Styled";
import { PostModalButton } from "../styled/PostModel.Styled";

const Navbar = ({setModalOpen}) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledNavbar>
      <HandburgerButton
        onClick={() => setNavOpen((prev) => !prev)}
        className="fas fa-bars"
        style={{cursor:"pointer"}}
      />
      <MobileMenu open={navOpen}>
        <Link to={"/"} onClick={()=>setNavOpen(false)}>
          <h1>Social Media</h1>
        </Link>
        <Link>
          <p>Feed</p>
        </Link>
        <Link>
          <p>Account</p>
        </Link>
        <PostModalButton  className="fas fa-plus" onClick={()=>{setNavOpen(false)
        setModalOpen(prev => !prev)}}/>
      </MobileMenu>
      <DesktopMenu>
      <Link to={"/"}>
          <h1>Social Media</h1>
        </Link>
        <Link to={"/feed"}>
          <p>Feed</p>
        </Link>
        <Link to={"/account"}>
          <p>Account</p>
        </Link>
        <PostModalButton onClick={()=>setModalOpen(prev => !prev)} className="fas fa-plus"/>
         
      </DesktopMenu>
    </StyledNavbar>
  );
};

export default Navbar;
