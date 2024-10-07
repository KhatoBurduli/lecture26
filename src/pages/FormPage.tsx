import React from 'react'
import { Form } from 'react-router-dom'

const FormPage:React.FC = () => {
  return (
    <Form method='POST' action='/form-page'>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name='email'/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="pass" id="" />
      </div>

      <button type='submit'>Submit</button>
    </Form>
  )
}

export default FormPage

export const action = async ({request}:any) => {
  const data = await request.formData()

  const input = {
    email: data.get('email'),
    message: data.get('password')
  }

  console.log(input)
}