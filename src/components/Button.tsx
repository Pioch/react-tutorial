import { useState } from "react";

interface Props {
  children: string;
  //color?: 'primary' | 'secondary' | 'success';
  //onClickItem: (text: number) => void;
}

const Button = ({children}: Props) => {

  const [clicked, setClicked] = useState(0); // do zmiany stanu przycisku po kliknięciu

  const changeClicked = () => {
    if (clicked != 1) {
      setClicked(1);
    }
    else {
      setClicked(0);
    }
  }

  return (
    <button 
    className={'btn btn-' + (clicked == 1 ? 'success' : 'primary')}
    onClick={changeClicked}>
    {children}
    </button>
  )
}

export default Button;