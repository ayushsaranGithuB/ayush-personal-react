import Head from 'next/head'

const SandBox = () => {
    return ( 
        <>
    <Head>
        <title>Ayush Saran - [SANDBOX]</title>   
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="@/styles/sandbox.css" />
 
    </Head>
        <div className="sandboxPage">
            	<section className="sectionPageintro">
		<h1>Development<br /><b>Sandbox</b></h1>
	</section>
	<section className="pageSection">
		<h1>This page has moved...</h1>
		<h2>See: https://sandbox.ayushsaran.info/</h2>
        
		<div className="project">
			<div className="info">
				<h2>Personal Blog</h2>
				<h3>A NetlifyCMS powered static blog site generated with 11ty</h3>
				<p>A JAM-Stack Static Blog generated server-side using <a href="https://www.11ty.dev/" target="_blank">11ty.js</a> with content stored in git and accessed via the Headless <a href="https://decapcms.org/" target="_blank">DecapCMS</a></p>
			</div>
			<ul className="techStack">
				<li>
					<h4>Tech Stack:</h4>
				</li>
				<li>Backend: <a href='https://nodejs.org/' target="_blank">Node.js</a></li>
				<li>UI: <a href='https://tailwindcss.com/' target="_blank">Tailwind</a></li>
				<li>SSG: <a href='https://www.11ty.dev/' target="_blank">11ty.js</a></li>
				<li>Hosting & CD: <a href='https://netlify.com/' target="_blank">Netlify</a></li>
			</ul>
			<a href="http://blog.ayushsaran.info" target="_blank" className="projectLink">blog.ayushsaran.info</a>
		</div>
		
		<div className="project">
			<div className="info">
				<h2>devNotes</h2>
				<h3>A Markdown Blog powered by Next.Js</h3>
				<p>A Static Blog Website generated using Next.Js with content stored in Markdown
					and Rendered via the <a href="https://www.npmjs.com/package/gray-matter" target="_blank">gray-matter</a>
					and <a href="https://www.npmjs.com/package/remarkable" target="_blank">reMarkable</a> libraries</p>
			</div>
			<ul className="techStack">
				<li>
					<h4>Tech Stack:</h4>
				</li>
				<li>Backend: <a href='https://nodejs.org/' target="_blank">Node.js</a></li>
				<li>UI: <a href='https://react.dev/' target="_blank">React</a></li>
				<li>Routing: <a href='https://nextjs.org/' target="_blank">Next.js</a></li>
				<li>Hosting & CD: <a href='https://vercel.com/' target="_blank">Vercel</a></li>
			</ul>
			<a href="http://devnotes.ayushsaran.info" target="_blank" className="projectLink">devnotes.ayushsaran.info</a>
		</div>
		
		<div className="project">
			<div className="info">
				<h2>Ayush Recommends</h2>
				<h3>A curated Movie/TV Show recommendation site</h3>
				<p>
					MERN stack Website
				</p>
			</div>
			<ul className="techStack">
				<li>
					<h4>Tech Stack:</h4>
				</li>
				<li>Backend: <a href='https://nodejs.org/' target="_blank">Node.js</a></li>
				<li>Database: <a href='https://mongodb.com/' target="_blank">MongoDB</a></li>
				<li>UI: <a href='https://react.dev/' target="_blank">React</a></li>
				<li>Routing: <a href='https://nextjs.org/' target="_blank">Express.js</a></li>
				<li>Hosting & CD: <a href='https://railway.app/' target="_blank">Railway</a></li>
			</ul>
			<a href="http://recommendations.ayushsaran.info" target="_blank" className="projectLink">recommendations.ayushsaran.info</a>
		</div>
		{/* <!--/project--> */}

	</section>
        </div>
        </>

     );
}
 
export default SandBox;
