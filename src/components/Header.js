import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { headingStyles, textStyles } from '../abstracts/Mixins';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);

  .title {
    ${headingStyles}
    color: ${({ theme }) => theme.primaryText};
    font-size: 2.6rem;
    transition: var(--mainTransition);
  }

  .toggler {
    ${textStyles}
    color: ${({ theme }) => theme.primaryText};
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 1rem;
    outline: 0;
    border: 0;
    background-color: transparent;
  }
`;

const Header = ({ theme, themeToggler }) => {
  return (
    <Wrapper>
      <h1 className='title'>timetrack</h1>
      <button className='toggler' onClick={themeToggler}>
        {theme === 'light' ? 'dark' : 'light'}
        {theme === 'light' ? (
          <FiMoon className='icon' />
        ) : (
          <FiSun className='icon' />
        )}
      </button>
    </Wrapper>
  );
};

export default Header;
