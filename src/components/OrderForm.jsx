
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const Form = styled.form`
  max-width: 600px;
  margin: 40px auto;
`

const FormGroup = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4