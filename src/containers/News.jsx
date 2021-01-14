
import React from 'react';
import { Route } from "react-router-dom";

import NewsItem from "./NewsItem/NewsItem";
import NewsList from "./NewsList/NewsList";

function News() {
  return (
    <React.Fragment>
      <Route path="/" exact component={NewsList} />
      <Route path="/news-item" component={NewsItem} />
    </React.Fragment>
  );
}

export default News;
