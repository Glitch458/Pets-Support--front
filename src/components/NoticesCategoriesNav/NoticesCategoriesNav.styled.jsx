import styled from 'styled-components';

export const NoticesCategoriesNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
export const CotegiriesButonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const PrivateUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
export const PublicUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
export const Li = styled.li`
  margin-right: 15px;
  margin-bottom: 15px;
  list-style-type: none;
`;
export const AddButton = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 50%;
    right: 0;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-shrink: 0;
    align-self: flex-start;
  }
`;
