import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';
import userAvatar from '../assets/user.jpg'; 

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(180deg, #1b1c2f 0%, #18192b 100%);
  color: #f0f0f0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: #a9a9a9;
    text-decoration: none;
    margin: 0 1.25rem;
    font-size: 1.2rem;
    letter-spacing: 0.2px;
    padding-bottom: 0.6rem;
    transition: color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
    opacity: 0.9;

    &:hover {
      color: #e6e6e6;
      opacity: 1;
    }

    &.active {
      color: #f0f0f0;
      border-bottom: 3px solid #4BA3FF;
    }
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    color: #a9a9a9;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 1.5rem;
    transition: color 0.2s ease, opacity 0.2s ease;

    &:hover {
      color: #ffffff;
      opacity: 1;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.06);
  }
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f1f3f6;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.06);
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const StatusIndicator = styled.span`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #1b1c2f;
  background-color: #21ff00; /* online */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Аналітика</NavLink>
        <NavLink to="/automation" className={({ isActive }) => (isActive ? 'active' : '')}>Автоматизація</NavLink>
      </Nav>
      <UserMenu>
        <button>Вийти</button>
        <Link to="/profile">
          <UserAvatar>
            <AvatarImage src={userAvatar} alt="User avatar" />
            <StatusIndicator />
          </UserAvatar>
        </Link>
      </UserMenu>
    </HeaderContainer>
  );
};

export default Header;
