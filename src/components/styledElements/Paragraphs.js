import styled, { css } from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p`
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      ${textStyles}
      color: ${({ theme }) => theme.tertiaryText};
      font-size: 1.5rem;
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      ${textStyles}
      color: ${({ theme }) => theme.primaryText};
      font-size: 1.5rem;
    `}
`;

export default Paragraph;
