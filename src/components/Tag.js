import styled from 'styled-components';
import { flexCenter, textStyles, headingStyles } from '../abstracts/Mixins';
import logo from '../assets/logo/habibdevgif.gif';

const Wrapper = styled.footer`
  ${flexCenter};
  flex-wrap: wrap;
  padding: 2rem;

  .heading {
    ${textStyles};
    color: ${({ theme }) => theme.primaryText};
    text-align: center;
    font-size: var(--xxs);
    transition: var(--mainTransition);
  }

  .link {
    ${headingStyles};
    color: ${({ theme }) => theme.blue};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .logo {
    width: 5rem;
  }
`;

const Tag = () => {
  return (
    <Wrapper>
      <h3 className='heading'>
        project for{' '}
        <a
          href='https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          frontend mentor
        </a>{' '}
        coded by{' '}
        <a
          href='https://github.com/habibdev96'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          habibdev{' '}
        </a>
      </h3>
      <img src={logo} alt='logo' className='logo' />
    </Wrapper>
  );
};

export default Tag;
