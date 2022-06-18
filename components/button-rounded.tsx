import { Field } from 'formik'
import React from 'react'

type Props = {
  text?: string
  color?: string
  textColor?: string
  width?: string
}

const ButtonRounded = ({
  text,
  color = 'bg-main',
  textColor = 'text-white',
  width = '',
}: Props) => {
  return (
    <input
      className={`
    rounded-3xl p-3 mt-1 placeholder:text-gray-300 placeholder:font-light cursor-pointer
    ${color} ${textColor} ${width}
    `}
      type='submit'
      value={text}
    />
  )
}

export default ButtonRounded
