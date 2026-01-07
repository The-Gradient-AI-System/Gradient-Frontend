import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import userAvatar from '../assets/user.jpg';
import ThemeToggle from './ThemeToggle'; 

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.shadow};
  position: relative;
  transition: background 0.3s ease, border-color 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    margin: 0 1.25rem;
    font-size: 1.2rem;
    letter-spacing: 0.2px;
    padding-bottom: 0.6rem;
    transition: color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
    opacity: 0.9;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      opacity: 1;
    }

    &.active {
      color: ${({ theme }) => theme.colors.text};
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    font-size: 1rem;
    margin-right: 1.5rem;
    transition: color 0.2s ease, opacity 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
      opacity: 1;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border};
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
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border};
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
  border: 2px solid ${({ theme }) => theme.colors.headerBackground};
  background-color: #21ff00; /* online */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ThemeToggle />
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
