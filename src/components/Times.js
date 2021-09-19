import styled from 'styled-components';
import Time from './Time';
import Responsive from '../abstracts/Responsive';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap);

  ${Responsive.lg`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${Responsive.sm`
    grid-template-columns: 1fr;
  `}
`;

const Times = ({ value, times }) => {
  return (
    <Wrapper>
      {times.map((time) => (
        <Time key={time.id} {...time} value={value} />
      ))}
    </Wrapper>
  );
};

export default Times;
