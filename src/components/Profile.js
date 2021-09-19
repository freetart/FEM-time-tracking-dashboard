import styled from 'styled-components';
import profileImage from '../assets/image-jeremy.png';
import Paragraph from '../components/styledElements/Paragraphs';
import { ProfileHeading } from '../components/styledElements/Headings';
import { textStyles } from '../abstracts/Mixins';
import Responsive from '../abstracts/Responsive';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${Responsive.md`
    text-align: center;
  `}

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

    ${Responsive.md`
      align-items: center;
      justify-content: center;
      flex-direction: row;
    `}
  }

  .tab {
    ${textStyles}
    color: ${({ theme }) => theme.secondaryText};
    background-color: transparent;
    outline: 0;
    border: 0;
    font-size: 1.8rem;
    transition: var(--mainTransition);

    &.active-tab {
      color: ${({ theme }) => theme.primaryText};
    }
  }
`;

const Profile = ({ tabs, value, setValue }) => {
  return (
    <Wrapper>
      <div className='top'>
        <img src={profileImage} alt='profile' className='image' />
        <Paragraph primary>Report for</Paragraph>
        <ProfileHeading>Jeremy Robson</ProfileHeading>
      </div>
      <div className='tabs'>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`tab ${index === value && 'active-tab'}`}
            onClick={() => setValue(index)}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Profile;
