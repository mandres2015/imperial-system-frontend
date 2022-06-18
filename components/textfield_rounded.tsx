import { Field } from 'formik'
import React from 'react'

type Props = {
  id: string
  name: string
  placeholder: string
  type?: string
  value?: string
}

const TextFieldRounded = ({ id, name, placeholder, type = 'text' }: Props) => {
  return (
    <Field
      className='border rounded-3xl py-2 px-4 mt-1 placeholder:text-gray-300 placeholder:font-light outline-none'
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default TextFieldRounded
