import { useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";

import classes from "./NewsItem.module.scss";

const NewsItem = (props) => {
  useEffect(() => {}, []);

  return (
    <section className={classes.Container}>
      <Link
        className={classes.Nav}
        to={{
          pathname: "/",
        }}
      >
        Back
      </Link>
      <h3>{props.location.params && props.location.params.title}</h3>
      <div className={classes.ArticleInfo}>
        <span>Written by: {props.location.params && props.location.params.author}</span>
        <span>
          Published at:{" "}
          {Moment(props.location.params && props.location.params.publishedAt).format("DD-MMM-YYYY")}
        </span>
      </div>
      <h4>{props.location.params && props.location.params.description}</h4>
      <img
        className={classes.Image}
        src={props.location.params && props.location.params.urlToImage}
        alt={props.location.params && props.location.params.title}
      />
      <p>{props.location.params && props.location.params.content}</p>
      <p>
        Source:{" "}
        {props.location.params && props.location.params.source
          ? props.location.params.source.name
          : "Unknown"}
      </p>
    </section>
  );
};

export default NewsItem;
