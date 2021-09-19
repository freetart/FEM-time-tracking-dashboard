import { useState } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Times from './Times';
import { tabsData, timesData } from '../data';
import Responsive from '../abstracts/Responsive';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--gap);

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}
`;

const Dashboard = () => {
  const [times, setTimes] = useState(timesData);
  const [tabs, setTabs] = useState(tabsData);
  const [value, setValue] = useState(0);

  return (
    <Wrapper>
      <Profile tabs={tabs} value={value} setValue={setValue} />
      <Times value={value} times={times} />
    </Wrapper>
  );
};

export default Dashboard;
