import styled from 'styled-components';

export const List = styled.ul`
display: grid;
list-style:none;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr
    }
    @media screen and (min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
` 