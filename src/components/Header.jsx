import styled from 'styled-components'

const HeaderSection = styled.header`
  text-align: center;
  padding: 40px 0;
  background: linear-gradient(135deg, var(--primary), #FFF5EE);
  border-radius: 20px;
  margin: 20px 0;
`

const HeroImage = styled.div`
  margin: 20px auto;
  max-width: 300px;
  img {
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--secondary);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--text);
  max-width: 800px;
  margin: 0 auto 30px;
`

const CTA = styled.button`
  background: var(--secondary);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(219, 161, 124, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(219, 161, 124, 0.4);
  }
`

function Header() {
  return (
    <HeaderSection>
      <HeroImage>
        <img src="/images/epilator.png" alt="Épilateur facial Lovable" />
      </HeroImage>
      <Title>✨ Envie d'une peau douce sans les inconvénients de l'épilation classique ? ✨</Title>
      <Subtitle>🔥 Découvrez l'épilateur facial ultra-doux qui élimine les poils sans douleur, rougeurs ni irritation !</Subtitle>
      <CTA>🛍️ Commander maintenant pour seulement CHF 24.-</CTA>
    </HeaderSection>
  )
}

export default Header
