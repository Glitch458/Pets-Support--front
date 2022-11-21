import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: ${p => p.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewsListContainer = styled.div`
  background-color: ${p => p.theme.colors.background};
`;
