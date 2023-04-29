import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function App() {
  return (
    <>
      <Head>
        	<title>Ayush Saran - Product Designer.</title>
      </Head>
      <div className={styles.homePage}>
        <section className={styles.sectionPageintro}>
          <h1>Hello I'm<br /><b>Ayush Saran.</b></h1>
        </section>
        <section className={styles.pageSection}>
          <h2>Product Designer from Mumbai, India </h2>
          <h3>I'm a designer who likes to code, has an interest in project management and most importantly
            problem-solving. </h3>
          <h3>I like building simple, intuitive and user-friendly interfaces that simplify complex processes into clear
            and manageable steps. </h3>
          <h3>I'm seeking a position in a team focused on building functional tools & web apps aimed at helping
            individuals accomplish tasks efficiently. I like to be hands-on with design, strategy and code and enjoy small teams of multi-talented folks. </h3>

          <h4>Check out my <a href="/cv">Resume</a> and some recent <a href="/sandbox">Dev projects</a>
          </h4>

        </section>
      </div>
    </>
  )
}
