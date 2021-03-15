import React from 'react'
import NewsItem from './NewsItem'

const News = ({ news }) => {

    if (!news) {
        return (
            <div className="news-container">
                Loading news...
            </div>
        )
    } else {
        return (
            <div className="news-container">
                <h1>Latest news</h1>
                <div className="row">
                    <div className="news">
                        <NewsItem item={news[0]} />
                        <NewsItem item={news[1]} />
                        <NewsItem item={news[2]} />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
