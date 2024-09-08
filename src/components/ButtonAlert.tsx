import React from 'react'

interface Props {
  children: string;
  onClickItem: () => void;
}

const ButtonAlert = ({children, onClickItem}: Props) => {
  return (
    <button className='btn btn-primary' 
      onClick={onClickItem}>
      {children}
    </button>
  )
}

export default ButtonAlert