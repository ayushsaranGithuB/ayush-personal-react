import Head from 'next/head'
import styles from '@/styles/resume.module.css'

export default function About() {
  return (
    <>
    <Head>
        <title>Ayush Saran - [Resume / CV]</title>   
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
 
    </Head>
    <div className={styles.resumeBox}>

     {/* <!-- PAGE INTRO ---------------------------  --> */}
    <section className="sectionPageintro">
        <h2><i className="fa fa-file-text-o"></i> Resume / CV</h2>
    </section>


    {/* <!-- RESUME ---------------------------  --> */}
        <div className={['pageSection', styles.resumeSection].join(' ')}>
            <div className={styles.resumeContainer}>
                <img src="img/Resume.png" width="800" height="auto" />
            </div>
            <h3 className="centerText">
                <a href="AyushSaranResumeCV.pdf">
                    <i className="fa fa-file-pdf-o"></i>&nbsp;
                    Download Resume/CV as PDF
                </a>
            </h3>
        </div>
    </div>

    </>
  )
}
