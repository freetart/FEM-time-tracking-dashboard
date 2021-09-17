import styled from 'styled-components';
import profileImage from '../assets/image-jeremy.png';
import Paragraph from '../components/styledElements/Paragraphs';
import { ProfileHeading } from '../components/styledElements/Headings';
import { textStyles } from '../abstracts/Mixins';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .top {
    background-color: ${({ theme }) => theme.blue};
    padding: 3rem;
    border-radius: var(--mainRadius);
    box-shadow: var(--mainShadow);
  }

  .image {
    width: 10rem;
    margin-bottom: 5rem;
  }

  .tabs {
    background-color: ${({ theme }) => theme.appBg};
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    border-radius: var(--mainRadius);
    transition: var(--mainTransition);
    box-shadow: var(--mainShadow);
  }

  .tab {
    ${textStyles}
    color: ${({ theme }) => theme.secondaryText};
    background-color: transparent;
    outline: 0;
    border: 0;
    font-size: 1.8rem;
    transition: var(--mainTransition);

    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.primaryText};
    }
  }
`;

const Profile = ({ setValue }) => {
  return (
    <Wrapper>
      <div className='top'>
        <img src={profileImage} alt='profile' className='image' />
        <Paragraph primary>Report for</Paragraph>
        <ProfileHeading>Jeremy Robson</ProfileHeading>
      </div>
      <div className='tabs'>
        <button className='tab' onClick={() => setValue(0)}>
          Daily
        </button>
        <button className='tab' onClick={() => setValue(1)}>
          Weekly
        </button>
        <button className='tab' onClick={() => setValue(2)}>
          Monthly
        </button>
      </div>
    </Wrapper>
  );
};

export default Profile;
