import React, { useState } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 2rem;
  grid-template-areas:
    'active completed percentage'
    'clients clients clients';

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'active completed'
      'percentage percentage'
      'clients clients';
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'active'
      'completed'
      'percentage'
      'clients';
  }
`;

const Card = styled.div`
  background: linear-gradient(180deg, #25274d 0%, #22244a 100%);
  padding: 2rem;
  border-radius: 16px;
  color: #f0f0f0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  h3 {
    margin-top: 0;
    color: #e6e6e6;
    font-weight: 600;
    font-size: 1.4rem;
  }
`;

const StatCard = styled(Card)`
  grid-area: ${props => props.area};
  ${props => props.$accent ? 'box-shadow: 0 0 0 2px #4BA3FF, 0 8px 24px rgba(0,0,0,0.2);' : ''}
  h2 {
    font-size: 4.25rem;
    margin: 0.5rem 0;
  }
  p {
    color: #d8d8d8;
    font-size: 1.05rem;
  }
`;

const ChartCard = styled(Card)`
  grid-area: clients;
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  h3 {
    margin: 0;
  }
`;

const PeriodBadge = styled.button`
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  color: #d8d8d8;
  padding: 0.4rem 0.75rem;
  border-radius: 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const PercentageCard = styled(Card)`
  grid-area: percentage;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 360px;
`;

const lineChartData = [
  { name: 'JAN', uv: 20, pv: 30 },
  { name: 'FEB', uv: 30, pv: 25 },
  { name: 'MAR', uv: 40, pv: 50 },
  { name: 'APR', uv: 30, pv: 35 },
  { name: 'MAY', uv: 50, pv: 60 },
  { name: 'JUN', uv: 40, pv: 30 },
  { name: 'JUL', uv: 60, pv: 70 },
  { name: 'AUG', uv: 55, pv: 65 },
  { name: 'SEP', uv: 70, pv: 80 },
  { name: 'OCT', uv: 80, pv: 90 },
  { name: 'NOV', uv: 85, pv: 95 },
  { name: 'DEC', uv: 90, pv: 100 },
];

const quarterlyData = [
  { name: 'OCT', uv: 80, pv: 90 },
  { name: 'NOV', uv: 85, pv: 95 },
  { name: 'DEC', uv: 90, pv: 100 },
];

const monthlyData = [
  { name: 'W1', uv: 18, pv: 22 },
  { name: 'W2', uv: 24, pv: 28 },
  { name: 'W3', uv: 20, pv: 26 },
  { name: 'W4', uv: 27, pv: 30 },
];

const pieChartData = [{ value: 65 }, { value: 35 }];
const COLORS = ['#34D399', '#313346'];

const Analytics = () => {
  const [period, setPeriod] = useState('year');

  const dataset = period === 'year' ? lineChartData : period === 'quarter' ? quarterlyData : monthlyData;

  const cyclePeriod = () => {
    setPeriod(p => (p === 'month' ? 'quarter' : p === 'quarter' ? 'year' : 'month'));
  };

  return (
    <DashboardGrid>
      <StatCard area="active" $accent>
        <h3>Дані 1</h3>
        <h2>37</h2>
        <p>активних проєктів</p>
      </StatCard>
      <StatCard area="completed">
        <h3>Дані 2</h3>
        <h2>124</h2>
        <p>завершено за період</p>
      </StatCard>
      <PercentageCard>
        <h3>Дані 3</h3>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie data={pieChartData} cx="50%" cy="50%" innerRadius={85} outerRadius={110} startAngle={90} endAngle={450} paddingAngle={0} dataKey="value">
              {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="56" fill="#fff">65%</text>
          </PieChart>
        </ResponsiveContainer>
      </PercentageCard>
      <ChartCard>
        <ChartHeader>
          <h3>Дані 4</h3>
          <PeriodBadge onClick={cyclePeriod} title="Клікніть, щоб змінити період">
            Період: {period === 'year' ? 'Рік' : period === 'quarter' ? 'Квартал' : 'Місяць'}
          </PeriodBadge>
        </ChartHeader>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dataset}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3a3d6b" />
            <XAxis dataKey="name" stroke="#a9a9a9" />
            <YAxis stroke="#a9a9a9" />
            <Tooltip contentStyle={{ backgroundColor: '#25274d', border: 'none', color: '#fff' }} />
            <Line type="monotone" dataKey="pv" stroke="#6b7cff" strokeWidth={2.4} dot={false} activeDot={{ r: 4 }} />
            <Line type="monotone" dataKey="uv" stroke="#df5cff" strokeWidth={2.4} dot={false} activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </DashboardGrid>
  );
};

export default Analytics;
