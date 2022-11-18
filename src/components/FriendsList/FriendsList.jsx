import sponsors from "../../data/sponsors.json";
import { FriendsItem } from "components/FriendsItem/FriendsItem";
import { List, Title } from "./FriendsList.styled";

export const FriendsList = () => {
    return (
        <>
        <Title>Our Friends</Title>
        <List>
                {sponsors.map(({ title,
                    url,
                    addressUrl,
                    imageUrl ,
                    address,
                    workDays,
                    phone,
                    email }) => <FriendsItem
            key={title}
            title={title}
            siteUrl={url}
            mapUrl={addressUrl}
            imageUrl={imageUrl}
            adress={address}
            workDays={workDays}
            phone={phone}
            email={email} />)}
    </List></>
    )
}