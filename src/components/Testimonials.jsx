import styled from 'styled-components'

const Section = styled.section`
  padding: 40px;
  background: linear-gradient(135deg, var(--primary), #FFF5EE);
  border-radius: 20px;
  margin: 20px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`

const TestimonialCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 15px;
  color: var(--text);
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
  }

  .name {
    font-weight: bold;
    color: var(--secondary);
  }
`

function Testimonials() {
  return (
    <Section>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Ce que nos clientes en disent</h2>
      <Grid>
        <TestimonialCard>
          <Quote>"J'ai enfin trouvé une solution douce et efficace pour mon duvet ! Super pratique à emporter partout."</Quote>
          <Author>
            <div className="avatar">S</div>
            <div className="name">Sarah L.</div>
          </Author>
        </TestimonialCard>
        <TestimonialCard>
          <Quote>"Fini la cire douloureuse, cet épilateur est devenu mon indispensable beauté !"</Quote>
          <Author>
            <div className="avatar">E</div>
            <div className="name">Emma R.</div>
          </Author>
        </TestimonialCard>
      </Grid>
    </Section>
  )
}

export default Testimonials
