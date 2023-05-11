import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function App() {
  return (
    <>
      <Head>
        	<title>Ayush Saran - Product Designer.</title>
      </Head>
      <div className={styles.homePage}>

        <section className={styles.homeHero}>
          <h1>
            <em>Hello I'm 
              <img src='/img/arrow-down.svg' />
            </em> Ayush Saran. 
          </h1>
          <h2>A Designer who likes to <span className={styles.highlight}>code</span></h2>
          <img src='/img/hi-2.png' id={styles.homeHeroImg} />
        </section>

        <section className={styles.homeIntro}>
          <h3>I build simple systems that make complex processes easier to use</h3>
          <p className={styles.intro}>For the last 10 years I've run my own Indie lifestyle brand and now work with other Brands, Start-Ups and Entrepreneurs helping them navigate technology and bring their distinct personality to their web presence and customer interactions.</p>
        </section>

        <section className={styles.homeSoloEnt}>
          <h2>I especially like working with solo entrepreneurs and finding creative solutions to challenges within limited budgets</h2>
        </section>

        <section className={styles.homeServices}>
          
          <h4>I can help with:</h4>

          <div className={styles.service}>
            <img src='/img/thumb-gd.png' />
            <h5>Graphic Design</h5>
            <p>From mockups to interactive prototypes. I can help communicate your ideas visually for maximum impact.</p>
          </div>

          <div className={styles.service}>
            <img src='/img/thumb-bd.png' className={styles.branding} />
            <h5>Branding</h5>
            <p>Give your brand the personality and voice that's unique to your story and build a memorable connection with customers.</p>
            
          </div>

          <div className={styles.service}>
            <img src='/img/thumb-ts.png' />
            <h5>Tech Consulting</h5>
            <p>Help untangling bloated legacy systems and switching to best-in-class open-source and DIY alternatives instead.</p>
          </div>

        </section>

        <section className={styles.homeCTA}>
          <p>If your start-up or brand could use a usability review or redesign then please in touch and let's see if we are the right fit for each other...</p>
          <p><a href="mailto:mail@ayushsaran.info">mail@ayushsaran.info</a></p>
          <small>
            Don't be shy, I love helping small brands, solo entrepreneurs, non-profits and even if its out of scope for me I may be able to direct you to the right experts or resources to help DIY it on your own :)
            </small>
          
        </section>

        <section className={styles.homeRecentProjects}>
          
          <h2>Recent Projects</h2>

          <div className={styles.projectsAll}>
            <div className={styles.project}>
              <div className={styles.projectThumb}></div>
              <h5>Dribble Design</h5>
              <p className={styles.projLink}>
                <a href="/">
                  Graphic Design for Screen
                </a>
              </p>
              <p>Endlessly generating AI art can be fruitless without the right prompts and the right models to train from.</p>
               <a href="/" className={styles.linkMore} >
                  See More..
                </a>
            </div>
            
            <div className={styles.project}>
              <div className={styles.projectThumb}></div>
              <h5>Dribble Design</h5>
              <p className={styles.projLink}>
                 <a href="/">
                  Graphic Design for Screen
                </a>
              </p>
              <p>Endlessly generating AI art can be fruitless without the right prompts and the right models to train from.</p>
               <a href="/" className={styles.linkMore} >
                  See More..
                </a>
            </div>
            
            <div className={styles.project}>
              <div className={styles.projectThumb}></div>
              <h5>Dribble Design</h5>
              <p className={styles.projLink}>
                 <a href="/">
                  Graphic Design for Screen
                </a>
              </p>
              <p>Endlessly generating AI art can be fruitless without the right prompts and the right models to train from.</p>
               <a href="/" className={styles.linkMore} >
                  See More..
                </a>
            </div>
          </div>{/* projectsAll */}          
        </section>        

      </div>
    </>
  )
}
