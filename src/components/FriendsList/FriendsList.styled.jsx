import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    list-style:none;
    margin-top:40px;
    
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
         margin-top:45px;
    }
    @media screen and (min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top:60px;
        margin-right:-32px
    }
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #000000;
    margin-top:47px;

@media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
    margin-top:94px;
    }
    @media screen and (min-width: 1280px) {
    margin-top:72px;
    }
`