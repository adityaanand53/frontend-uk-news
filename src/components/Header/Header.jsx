import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.Header}>
      <img src={process.env.PUBLIC_URL + 'images/newspaper.png'} alt="news"/>
    </header>
  );
}

export default Header;
