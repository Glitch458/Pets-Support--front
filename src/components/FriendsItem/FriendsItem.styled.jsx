import styled from 'styled-components';

export const TitleLink = styled.a`
margin-bottom:12px;
font-weight: 700;
font-size: 12px;
line-height: 16px;
color:${p => p.theme.colors.accent };
text-align :center;
@media screen and (min-width: 768px) {
margin-bottom:16px;
}
@media screen and (min-width: 1280px) {
font-size: 20px;
line-height: 27px;
}
`

export const FriendCard = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

export const Time = styled.button`
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
padding: 0;
cursor:pointer;
border:none;
background-color:inherit;
:hover,
:focus{
  color:${p=>p.theme.colors.accent}
}

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
font-weight: 500;
font-size: 12px;
line-height: 16px;

@media screen and (min-width: 768px) {
font-size: 14px;
line-height: 19px;
}
@media screen and (min-width: 1280px) {
font-size: 16px;
line-height: 22px;
}
`

export const TextWrapper = styled.li`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom:12px;
`

export const Link = styled.a`
font-weight: 500;
font-size: 12px;
line-height: 16px;
:hover,
:focus{
  color:${p=>p.theme.colors.accent}
}

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
background-color: ${p => p.theme.colors.white };
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 20px;
padding:16px 10px;

@media screen and (min-width: 768px) {
margin-right:32px;
margin-bottom:32px;
border-radius: 40px;
}
@media screen and (min-width: 1280px) {
max-width:395px
}
`

export const List = styled.ul`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
`