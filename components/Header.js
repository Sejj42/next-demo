import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Demo</span>Text
      </h1>
      <p className={headerStyles.description}>
        lorem ipsum something doodle google booble
      </p>
    </div>
  );
};

export default Header;
