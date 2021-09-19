import styled from 'styled-components';
import { TimeSubHeading, TimeHeading } from './styledElements/Headings';
import Paragraph from './styledElements/Paragraphs';
import dots from '../assets/icon-ellipsis.svg';

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.appBg};
  color: ${({ theme }) => theme.primaryText};
  box-shadow: var(--mainShadow);
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  .header {
    position: relative;
  }

  .icon {
    position: absolute;
    top: -2.5rem;
    right: 0;
    width: 5rem;
  }

  .info {
    padding: 3rem;
  }

  .info-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .dots {
    width: 2rem;
  }
`;

const Time = ({ icon, value, title, timeframes }) => {
  const {
    daily: { current: dailycurrent, previous: dailyprevious },
    weekly: { current: weeklycurrent, previous: weeklyprevious },
    monthly: { current: monthlycurrent, previous: monthlyprevious },
  } = timeframes;

  return (
    <Wrapper>
      <div className='header'>
        <img src={icon} alt='' className='icon' />
      </div>
      <div className='info'>
        <div className='info-top'>
          <TimeSubHeading>{title}</TimeSubHeading>
          <img src={dots} alt='more info' className='dots' />
        </div>
        {value === 0 && (
          <>
            <TimeHeading>{dailycurrent}hrs</TimeHeading>
            <Paragraph secondary>Last Week - {dailyprevious}hrs</Paragraph>
          </>
        )}
        {value === 1 && (
          <>
            <TimeHeading>{weeklycurrent}hrs</TimeHeading>
            <Paragraph secondary>Last Week - {weeklyprevious}hrs</Paragraph>
          </>
        )}
        {value === 2 && (
          <>
            <TimeHeading>{monthlycurrent}hrs</TimeHeading>
            <Paragraph secondary>Last Week - {monthlyprevious}hrs</Paragraph>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Time;
