import styled from 'styled-components';

export const TitleLink = styled.a`
margin-bottom:12px;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
color: #F59256;
text-align :center;
@media screen and (min-width: 768px) {
margin-bottom:16px;
}
@media screen and (min-width: 1280px) {
font-size: 20px;
line-height: 27px;
}
`

// export const Info = styled.div`

// `

export const FriendCard = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

export const Time = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
margin-bottom:12px;

@media screen and (min-width: 768px) {
font-size: 14px;
line-height: 19px;
}
@media screen and (min-width: 1280px) {
font-size: 16px;
line-height: 22px;
}
`

export const Text = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
margin-bottom:12px;

@media screen and (min-width: 768px) {
font-size: 14px;
line-height: 19px;
}
@media screen and (min-width: 1280px) {
font-size: 16px;
line-height: 22px;
}
`

export const MapLink = styled.a`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
margin-bottom:12px;
@media screen and (min-width: 768px) {
font-size: 14px;
line-height: 19px;
}
@media screen and (min-width: 1280px) {
font-size: 16px;
line-height: 22px;
}
`

export const Img = styled.img`
margin-right:23px;
max-width:137px;
height:auto;
@media screen and (min-width: 768px) {
margin-right:21px;
}
@media screen and (min-width: 1280px) {
margin-right:36px;
}
`

export const SponsorItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom:12px;
width:280px;
height:192px;
background-color: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 20px;
}
@media screen and (min-width: 768px) {
margin-right:32px;
margin-bottom:32px;
width:336px;
height:246px;
border-radius: 40px;
}
@media screen and (min-width: 1280px) {
width:395px;
height:287px;
padding:16px 10px 0 16px;
}
`