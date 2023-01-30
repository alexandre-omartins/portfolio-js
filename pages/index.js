import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'



export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Alexandre | Web Developer</title>
        <meta name="description" content="I’m a front-end web developer" />
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
