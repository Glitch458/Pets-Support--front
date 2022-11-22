import { nanoid } from 'nanoid'
import { TimeList, TimeItem } from "./FriendsItem.styled";

export const TimeTable = ({ shedule }) => {
    return (<TimeList>
        {shedule.map(item => <TimeItem key={nanoid()}>
            {(item.isOpen)
            ? <p>{item.day}:{item.from}-{item.to}</p>
            : <p>{item.day}:Closed</p>}
        </TimeItem>)}
        </TimeList>
    )
}