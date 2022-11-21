import { useState } from 'react';

import {
  SponsorLink,
  FriendCard,
  Time,
  Text,
  Link,
  Img,
  SponsorItem,
  TextWrapper,
  List,
} from './FriendsItem.styled';
import { TimeTable } from './TimeTable';
import defaultImage from '../../images/defaultImage.jpg';

export const FriendsItem = ({
  title,
  siteUrl,
  mapUrl,
  imageUrl = defaultImage,
  adress,
  workDays,
  phone,
  email,
}) => {

const [isVisible, setIsVisible] = useState(true);

const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
const newWorkDays =  workDays && workDays.map((day, index) => {
    return { day: week[index], ...day }
  });
      
  return (
    <SponsorItem>
      <SponsorLink href={siteUrl} target="_blank">{title}</SponsorLink>
      <FriendCard>
        <Img src={imageUrl ?? defaultImage} alt={title} />
        <List>
          <TextWrapper
            onClick={() => { setIsVisible(!isVisible) }}
            onMouseLeave={() => {setTimeout(()=>{setIsVisible(true)}, 1000)}}>
            
          {(workDays === null || workDays === undefined)
            ? <Time>Time: дані відсутні</Time>
            : <>
            <Time>Time:{workDays[0].from}-{workDays[0].to}</Time>
            {isVisible || <TimeTable shedule={newWorkDays}/>}
            </>} 
          </TextWrapper>
          <TextWrapper >
            <Text>Adress:</Text>
            {mapUrl
              ? <Link href={mapUrl}>{adress}</Link>
              : <Text>дані відсутні</Text>}
          </TextWrapper>
          <TextWrapper>
            <Text>Email:</Text>
            {email
              ? <Link href={email}>{email}</Link>
              : <Text>дані відсутні</Text>}
          </TextWrapper>
          <TextWrapper>
            <Text>Phone:</Text>
            {phone
              ? <Link href={phone}>{phone}</Link>
              : <Text>дані відсутні</Text>}
          </TextWrapper>
        </List>
      </FriendCard>
    </SponsorItem>
  );
};
