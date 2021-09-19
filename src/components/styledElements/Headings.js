import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const ProfileHeading = styled.h2`
  ${headingStyles}
  font-weight: 300;
  color: #fff;
  font-size: 4rem;
`;

export const TimeSubHeading = styled.h3`
  ${headingStyles}
  font-weight: 500;
  font-size: 1.8rem;
`;

export const TimeHeading = styled(ProfileHeading)`
  font-size: 5.6rem;
  color: ${({ theme }) => theme.primaryText};
  transition: var(--mainTransition);
`;
