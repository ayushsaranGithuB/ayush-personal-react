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
          <h3>I build simple systems that make complicated processes easier to use</h3>
          <p className={styles.intro}>For the last 10 years I’ve run my own Indie lifestyle brand and now work with other Brands, Start-Ups and Solo entrepreneurs helping them navigate technology and bring fun joy and character back to their web presence and customer interactions.</p>
        </section>

        <section className={styles.homeSoloEnt}>
          <h2>I especially like working with solo entrepreneurs and finding creative solutions to challenges with limited budgets</h2>
        </section>

        <section className={styles.homeServices}>
          
          <h4>I can help with:</h4>

          <div className={styles.service}>
            <img src='/img/thumb-gd.png' />
            <h5>Graphic Design</h5>
            <p>Endlessly generating AI art can be fruitless without the right prompts and the right models to train from.</p>
          </div>

          <div className={styles.service}>
            <img src='/img/thumb-bd.png' className={styles.branding} />
            <h5>Branding</h5>
            <p>Hire a Human to give your brand the voice and emotional connect that’s unique to your story.</p>
            <p>It tends to go missing over time as organizations evolve and a usability review can help correct the  messaging and convert customers from 'users' into 'fans'.</p>
          </div>

          <div className={styles.service}>
            <img src='/img/thumb-ts.png' />
            <h5>Tech Stacks</h5>
            <p>Help lowering your overheads and monthly subscription costs by avoiding unnecessary services and prefering open-source alternatives when available.</p>
          </div>

        </section>

        <section className={styles.homeCTA}>
          <p>If your start-up or brand could use a usability review or redesign then please in touch and let's see if we are the right fit for each other...</p>
          <p><a href="mailto:mail@ayushsaran.info">mail@ayushsaran.info</a></p>
          <small>
            Don't be shy, I love helping small brands, solo entrepreneurs, non-profits and even if its out of scope for me I may be able to direct you to the right resources to Do-It-Yourself but not get burned :)
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
