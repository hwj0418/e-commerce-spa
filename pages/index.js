import products from "../products.json";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moon Store
        </title>
        <link rel="icon" href="/fullmoonicon.png" />
      </Head>

      <div className={styles.grid}>
        {products.map((product) => {
          return (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={`Preview of ${product.title}`} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          );
        })}
      </div>

      <footer className={styles.footer}>
        <p>
          I should put some contact info here, but now let't go with a simple
          link to
        </p>
        <img src="../images/pointing_left.png" />
        <a href="https://www.github.com/hwj0418" name="my_github_link">my github </a>
      </footer>
    </div>
  );
}
