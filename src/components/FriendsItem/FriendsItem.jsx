import {
  TitleLink,
  FriendCard,
  Time,
  Text,
  Link,
  Img,
  SponsorItem,
  TextWrapper,
  List,
} from './FriendsItem.styled';
// import { TimeTable } from './TimeTable';
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

  // const week = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  // const newWorkDays = workDays.map((day, index) => day.isOpen && { day: week[index], ...day });
  
  return (
    <SponsorItem>
      <TitleLink href={siteUrl}>{title}</TitleLink>
      <FriendCard>
        <Img src={imageUrl ?? defaultImage} alt={title} />
        <List>
           <TextWrapper>
          {(workDays === null || workDays === undefined)
            ? <Time>Time: дані відсутні</Time>
            : <><Time>
                Time:{workDays[0].from}-{workDays[0].to}
              </Time>
                {/* <TimeTable shedule={newWorkDays} /> */}
              </>
            }
            
          </TextWrapper>
          <TextWrapper >
            <Text>Adress:</Text>
            <Link href={mapUrl}>{adress ?? 'дані відсутні'}</Link>
          </TextWrapper>
          <TextWrapper>
            <Text>Email:</Text>
            <Link href={email}>{email ?? 'дані відсутні'}</Link>
          </TextWrapper>
          <TextWrapper>
            <Text>Phone:</Text>
            <Link href={phone}>{phone ?? 'дані відсутні'}</Link>
          </TextWrapper>
        </List>
      </FriendCard>
    </SponsorItem>
  );
};
