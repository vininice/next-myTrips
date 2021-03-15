import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/" aria-label="Home">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        minima sit quidem, nostrum optio, molestias facilis accusamus similique
        quod quis ipsam consectetur unde odio natus quaerat quisquam tenetur,
        recusandae atque.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
