import client from 'grapqhl/client'
import { GET_PAGES } from 'grapqhl/querys'
import { useRouter } from 'next/dist/client/router'
import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto ta sendo criado
  if (router.isFallback) return null

  return <PageTemplate />
}

//gerando urls da pagina
export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

// export const getStaticProps = async () => {
//  c

//   console.log(pages)

//   return {
//     props: {}
//   }
// }

//getStaticPaths -> serve para gerar as urls em build time /about/trips/londrina
//getStaticProps -> buscar dados das página em build time (props) - static
//geServerSideProps -> buscar dados das página em tempo real (props) - runtime em toda requisição (bundle fica no server)
//getInitialProps- > buscar dados das página em tempo real (props) - runtime em toda requisição (bundle também fica no client) - hydrate
