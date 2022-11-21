import { nanoid } from 'nanoid'
import { TimeList, TimeItem } from "./FriendsItem.styled";

export const TimeTable = ({ shedule }) => {
    return (<TimeList>
        {shedule.map(item => <TimeItem key={nanoid()}>
            <p>{item.day} : 
            {item.from}-{item.to}</p>
        </TimeItem>)}
        </TimeList>
    )
}