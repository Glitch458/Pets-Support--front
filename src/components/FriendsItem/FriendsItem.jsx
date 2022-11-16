import { workDaysCard } from "./workDaysCard"
import { TitleLink,  FriendCard,Time, Text, MapLink, Img, SponsorItem } from "./FriendsItem.styled"
import defaultImage from "../../images/defaultImage.jpg";

export const FriendsItem = ({ title,
    siteUrl,
    mapUrl,
    imageUrl= defaultImage,
    adress,
    workDays,
    phone,
    email }) => {

    
    return (
        <SponsorItem>
            <TitleLink href={siteUrl}>{title}</TitleLink>
            <FriendCard>
                <Img src={imageUrl ?? defaultImage} alt={title}  />
                <div>
                    <Time>Time:  </Time>
                <MapLink href={mapUrl}>Adress: {adress ?? "------------------"}</MapLink>
                <Text>Email: <p>{email ?? "------------------"}</p></Text>
                <Text>Phone: <p>{phone ?? '+38(0XX)XXXXXXX'}</p></Text>
            </div>
            </FriendCard>
        </SponsorItem>
    )   
}