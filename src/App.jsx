import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import ProductInfo from './components/ProductInfo'
import Testimonials from './components/Testimonials'
import OrderForm from './components/OrderForm'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

function App() {
  return (
    <Container>
      <Header />
      <ProductInfo />
      <Testimonials />
      <OrderForm />
    </Container>
  )
}

export default App
