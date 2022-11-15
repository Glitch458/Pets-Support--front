import styled from 'styled-components';

export const NewsTitle = styled.h2`
height: 99px;
margin-bottom:16px;
font-size: 24px;
line-height: 33px;
text-align: left;
vertical-align: top;
letter-spacing: -1%;
overflow:hidden;
`

export const NewsText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
margin-bottom:20px;
overflow: hidden;
height: 154px;
@media screen and (min-width: 768px) {
  margin-bottom:40px;
 }
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`

export const NewsCard = styled.li`
margin-bottom:40px;
padding-left:20px;
padding-right:20px;
`

export const OverLine = styled.div`
width:80%;
height:4px;
margin-bottom:4px;
border-radius: 40px;
background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
 @media screen and (min-width: 768px) {
   width:280px;
   height:8px; 
 }
@media screen and (min-width: 1280px) {
    width: 340px;
  }
`

export const ReadMoreLink = styled.a`
 font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  text-decoration-line: underline;
  color: #F59256;
`

export const Time = styled.p`
color: rgba(17, 17, 17, 0.6);
`