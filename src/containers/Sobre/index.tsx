import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Desenvolvedor Front-end apaixonado por criar experiências digitais
      incríveis.
    </Paragrafo>
    <GithubSecao>
      <img
        alt="GitHub Stats"
        src="https://github-readme-stats-sigma-five.vercel.app/api?username=Rattori94&show_icons=true&theme=dracula"
      />
      <img
        alt="#Rattori94"
        src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Rattori94&layout=compact&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
