import styled from 'styled-components';
import Time from './Time';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap);
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
