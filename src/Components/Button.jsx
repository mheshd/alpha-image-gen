const Button = (props) => {
  const { styles, btnText, handleClick } = props;
  return (
    <button className={styles} type="button" onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default Button;
