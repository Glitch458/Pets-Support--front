import { NewsItem } from "components/NewsItem/NewsItem";
import { List } from "components/NewsList/NewsList.styled";
// import news from "../../data/news.json"

export const NewsList = ({ news }) => {
    return (
        <List>
            {news.map(({ title, url, description, date }) => (
                <NewsItem 
                    key={title}
                    title={title}
                    url={url}
                    description={description}
                    date={date}
              />  
            ))}
        </List>
    )
}