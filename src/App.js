import { useState } from 'react';
import Globals from './abstracts/Globals';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './abstracts/Themes';
import {
  sectionSpacingLg,
  maxWidthMd,
  sectionSpacingSm,
} from './abstracts/Mixins';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Tag from './components/Tag';
import Responsive from './abstracts/Responsive';

const Main = styled.main`
  ${sectionSpacingLg}
  ${maxWidthMd}
  margin: 0 auto;

  ${Responsive.md`
    ${sectionSpacingSm}
  `}
`;

const App = () => {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Globals />
        <Main>
          <Header theme={theme} themeToggler={themeToggler} />
          <Dashboard />
        </Main>
        <Tag />
      </ThemeProvider>
    </>
  );
};

export default App;
