import React from 'react'

const NewsItem = ({item}) => {
    
    const date =  new Date(item.isoDate)
    const dateString = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    
    return (
        <div className="news-item">
            <p>{dateString}</p>
            <a href="/">{item.content}</a>
        </div>
    )
}

export default NewsItem
