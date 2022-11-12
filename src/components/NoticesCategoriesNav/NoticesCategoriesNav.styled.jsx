import styled from 'styled-components';

export const NoticesCategoriesNavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
export const PrivateUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
export const PublicUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
export const Li = styled.li`
  display: inline-block;
  margin-right: 15px;
  list-style-type: none;
`;
