
import { Route } from "react-router-dom";

import NewsItem from "./NewsItem/NewsItem";
import NewsList from "./NewsList/NewsList";

function News() {
  return (
    <div>
      <Route path="/" exact component={NewsList} />
      <Route path="/news-item" component={NewsItem} />
    </div>
  );
}

export default News;
