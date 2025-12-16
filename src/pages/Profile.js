import React from 'react';
import styled from 'styled-components';
import { FaEye } from 'react-icons/fa';

const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Card = styled.div`
  background-color: #25274d;
  padding: 2rem;
  border-radius: 10px;
  color: #f0f0f0;
`;

const ProfileCard = styled(Card)`
  flex: 1;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
  }

  h2 {
    margin-top: 0;
  }
`;

const HistoryCard = styled(Card)`
  flex: 2;
`;

const InputGroup = styled.div`
  margin: 1.5rem 0;
  text-align: left;

  label {
    display: block;
    color: #a9a9a9;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    background-color: #1a1b2d;
    border: 1px solid #3a3d6b;
    border-radius: 5px;
    color: #f0f0f0;
    font-size: 1rem;
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 1rem;
    color: #a9a9a9;
    cursor: pointer;
  }
`;

const HistoryList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid #3a3d6b;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const Status = styled.span`
  color: ${props => {
    switch (props.status) {
      case 'Успіх': return '#28a745';
      case 'В роботі': return '#ffc107';
      case 'Відмова': return '#dc3545';
      default: return '#f0f0f0';
    }
  }};
  font-weight: bold;
`;

const leads = [
  { id: 245, date: '22/03/2025', status: 'Успіх' },
  { id: 242, date: '19/03/2025', status: 'В роботі' },
  { id: 238, date: '15/03/2025', status: 'Успіх' },
  { id: 230, date: '10/03/2025', status: 'Відмова' },
];

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileCard>
        <h2>Профіль</h2>
        <img src="https://via.placeholder.com/120" alt="User Avatar" />
        <InputGroup>
          <label>Email:</label>
          <input type="email" value="email@example.com" readOnly />
        </InputGroup>
        <InputGroup>
          <label>Password:</label>
          <PasswordWrapper>
            <input type="password" value="************" readOnly />
            <FaEye />
          </PasswordWrapper>
        </InputGroup>
      </ProfileCard>
      <HistoryCard>
        <h3>Історія Взятих Лідів</h3>
        <HistoryList>
          {leads.map(lead => (
            <li key={lead.id}>
              <span>Лід {lead.id} - {lead.date}</span>
              <Status status={lead.status}>{lead.status}</Status>
            </li>
          ))}
        </HistoryList>
      </HistoryCard>
    </ProfileContainer>
  );
};

export default Profile;
