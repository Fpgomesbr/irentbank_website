import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      EARN THE MOST<br className="sm:block hidden" /> VALUABLE REWARDS.

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Earning the most valuable points has its perks. Redeem 
      for incredibly valueable rewards across travel, fitness, 
      shopping and more.

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
