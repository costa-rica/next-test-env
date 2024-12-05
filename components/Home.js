import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>{process.env.NEXT_PUBLIC_API_BASE_URL}</h2>
      </main>
    </div>
  );
}

export default Home;
