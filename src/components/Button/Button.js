import { Button as ButtonMaterial } from '@material-ui/core';

const Button = ({ text, event, disabled, variant, color}) => {
  return (
    <ButtonMaterial variant={variant} color={color} onClick={event} disabled={disabled}>
      {text}
    </ButtonMaterial>
  )
}

export default Button;
