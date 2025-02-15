import styled from 'styled-components'

const Section = styled.section`
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  margin: 20px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Features = styled.ul`
  list-style: none;
  margin: 20px 0;
`

const Feature = styled.li`
  margin: 15px 0;
  padding-left: 30px;
  position: relative;
  font-size: 1.1rem;

  &:before {
    content: "✨";
    position: absolute;
    left: 0;
    color: var(--secondary);
  }
`

const Price = styled.div`
  background: var(--primary);
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  margin: 20px 0;

  .amount {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--secondary);
  }

  .details {
    font-size: 1rem;
    color: var(--text);
    margin-top: 10px;
  }
`

const ImageGallery = styled.div`
  display: grid;
  gap: 20px;
  
  img {
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`

function ProductInfo() {
  return (
    <Section>
      <Grid>
        <div>
          <Features>
            <Feature>Élimine les poils du visage en douceur</Feature>
            <Feature>Sans douleur, sans irritation, sans coupures</Feature>
            <Feature>Design élégant et discret, format type rouge à lèvres</Feature>
            <Feature>Rechargeable via USB – plus besoin de piles !</Feature>
            <Feature>Convient à tous types de peaux</Feature>
          </Features>
          <Price>
            <div className="amount">CHF 24.-</div>
            <div className="details">Livraison incluse en Suisse</div>
          </Price>
        </div>
        <ImageGallery>
          <img src="/images/epilator-detail.png" alt="Détails de l'épilateur" />
          <img src="/images/epilator-use.png" alt="Utilisation de l'épilateur" />
        </ImageGallery>
      </Grid>
    </Section>
  )
}

export default ProductInfo
