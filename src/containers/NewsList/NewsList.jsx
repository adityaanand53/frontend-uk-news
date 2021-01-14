import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import classes from "./NewsList.module.scss";

const Headlines = (props) => {
  const [newsList, setNewsList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchHeadlines("")
      .then((data) => {
        setNewsList(data.articles);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const changeHandler = (event) => {
    setSearch(event.target.value);
    fetchHeadlines(event.target.value)
      .then((data) => {
        setNewsList(data.articles);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className={classes.Container}>
      <Input
        className={classes.Input}
        changed={(event) => changeHandler(event)}
        value={search}
        label="Search"
      ></Input>
      <h3>{search ? "Top results" : "Today's headlines"}</h3>
      {newsList && newsList.length ? (
        <div className={classes.List}>
          {newsList.map((newsObj, i) => {
            return (
              <Link
                key={i}
                className={classes.Nav}
                to={{
                  pathname: "/news-item",
                  params: { ...newsObj },
                }}
              >
                <img
                  className={classes.Image}
                  src={newsObj.urlToImage}
                  alt={newsObj.title}
                />
                <p className={classes.Para}>{newsObj.title}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
};

const fetchHeadlines = (query) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API_URL}/news?q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          resolve(res.data);
        }
        reject(res.message);
      });
  });
};

export default Headlines;
