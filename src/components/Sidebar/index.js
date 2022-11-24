import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</SidebarLink>
          <SidebarLink to='blog'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Blog</SidebarLink>
          <SidebarLink to='contact'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
