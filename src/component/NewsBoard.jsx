import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category,country}) => {

  const [articles,setArticles]=useState([]);
  useEffect(()=>{
     let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
       import.meta.env.VITE_API_KEY
     }`; 
     fetch(url).then((res)=>res.json()).then((data)=>{
      setArticles(data.articles)
     })
  },[category,country])
  return (
    <div>
      <h3 className='text-center mt-2'>Latest <span className='badge bg-danger'>News</span></h3>
      {
        articles.map((news,index)=>{
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })
      }
    </div>
  )
}

export default NewsBoard
