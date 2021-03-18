import client from 'grapqhl/client'
import { GET_PAGES } from 'grapqhl/querys'
import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}

//getStaticPaths -> serve para gerar as urls em build time /about/trips/londrina
//getStaticProps -> buscar dados das página em build time (props) - static
//geServerSideProps -> buscar dados das página em tempo real (props) - runtime em toda requisição (bundle fica no server)
//getInitialProps- > buscar dados das página em tempo real (props) - runtime em toda requisição (bundle também fica no client) - hydrate
