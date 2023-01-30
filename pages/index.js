import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import crud2Img from '../public/assets/projects/crud2.jpg'
import galaxyImg from '../public/assets/projects/galaxy.jpg'


export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Alexandre | Web Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="../public/assets/logo.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
