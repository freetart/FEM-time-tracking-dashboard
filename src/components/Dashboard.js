import { useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import { timesData } from '../data';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--gap);
`;

const Dashboard = () => {
  const [times, setTimes] = useState(timesData);
  const [value, setValue] = useState(0);

  const { title, timeframes } = times[value];
  console.log(title, timeframes);

  return (
    <Wrapper>
      <Profile setValue={setValue} />
    </Wrapper>
  );
};

export default Dashboard;
