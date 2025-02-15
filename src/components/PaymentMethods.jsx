import styled from 'styled-components'

const Section = styled.section`
  padding: 20px;
  margin: 20px 0;
  background: #f9f9f9;
  border-radius: 8px;
`

const Title = styled.h2`
  color: var(--secondary);
  margin-bottom: 15px;
`

const Method = styled.div`
  margin: 10px 0;
`

function PaymentMethods() {
  return (
    <Section>
      <Title>Moyens de paiement</Title>
      <Method>
        <h3>TWINT</h3>
        <p>+41 79 679 68 11</p>
      </Method>
      <Method>
        <h3>Virement bancaire</h3>
        <p>Les informations bancaires vous seront communiquées après la validation de votre commande.</p>
      </Method>
    </Section>
  )
}

export default PaymentMethods
