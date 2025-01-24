import styles from "./Card.module.css";
const Card = ({ country, flag }) => {
  console.log("inside card");
  return (
    <>
      <div className={styles.countryCard}>
        <img
          src={flag}
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <p>{country}</p>
      </div>
    </>
  );
};
export default Card;
