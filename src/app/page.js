"use client";
import { useState } from "react";
import styles from './bogo.module.css';

const Page = () => {
  const [selectedOffer, setSelectedOffer] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.header}>YAY! It's BOGO</h2>

        {/* Offer 1 */}
        <div className={`${styles.offer} ${selectedOffer === 1 ? styles.selected : ''}`} onClick={() => setSelectedOffer(1)}>
          {selectedOffer != 1 && <div className={styles.discount}>30% Off</div>}
          <div className={styles.details}>
            <input type="radio" name="offer" checked={selectedOffer === 1} readOnly />
            <label>Buy 1 Get 2</label>
            <span className={styles.price}>$18.00 USD</span>
            {selectedOffer != 1 && (<span className={styles.popular}>Most Popular</span>)}
            {selectedOffer === 1 && (
              <div className={styles.selectorContainer}>
                <div className={styles.selector}>
                  <label>#1</label>
                  <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                  </select>
                </div>
                <div className={styles.selector}>
                  <label>#2</label>
                  <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Offer 2 */}
        <div className={`${styles.offer} ${selectedOffer === 2 ? styles.selected : ''}`} onClick={() => setSelectedOffer(2)}>
          {selectedOffer != 2 && <div className={styles.discount}>30% Off</div>}
          <div className={styles.details}>
            <input type="radio" name="offer" checked={selectedOffer === 2} readOnly />
            <label>Buy 2 Get 4</label>
            <span className={styles.price}>
              $24.00 USD
            </span>
            {selectedOffer != 2 && (<span className={styles.popular}>Most Popular</span>)}
            {selectedOffer === 2 && (
              <div className={styles.selectorContainer}>
                <div className={styles.selector}>
                  <label>#1</label>
                  <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                  </select>
                </div>
                <div className={styles.selector}>
                  <label>#2</label>
                  <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Offer 3 */}
        <div className={`${styles.offer} ${selectedOffer === 3 ? styles.selected : ''}`} onClick={() => setSelectedOffer(3)}>
          {selectedOffer != 3 && <div className={styles.discount}>30% Off</div>}
          <div className={styles.details}>
            <div class="offer-container">
              {/* <div class="discount-badge">30% Off</div> */}
              <input type="radio" name="offer" checked={selectedOffer === 3} readOnly />
              <div className={styles.details}>
                <label>Buy 3 Get 6</label>
                <div className="price-container">
                <span className={styles.price}>
              $24.00 USD
            </span>
                  {selectedOffer != 3 && (<span className={styles.popular}>Most Popular</span>)}
                </div>
              </div>
            </div>
            {selectedOffer === 3 && (
              <div className={styles.selectorContainer}>
                <div className={styles.selector}>
                  <label>#1</label>
                  <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                  </select>
                </div>
                <div className={styles.selector}>
                  <label>#2</label>
                  <select>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>



        {/* Free Delivery and Total Amount */}
        <div className={styles.deliveryTotal}>
          <div className={styles.delivery}>Free Delivery</div>
          <div className={styles.totalAmount}>Total: <span>$18.00 USD</span></div>
        </div>

        {/* Add to Cart Button */}
        <button className={styles.addToCart}>+ Add to Cart</button>

        {/* Footer */}

        <div className={styles.footer}> <span className={styles.footertext2}>Powered by</span>
          <span className={styles.footertext}>  Pumper</span> </div>
      </div>
    </div>
  );
};

export default Page;
