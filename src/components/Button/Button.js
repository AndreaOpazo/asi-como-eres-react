import { Button as ButtonMaterial } from '@material-ui/core';

const Button = ({ text, event, disabled, variant}) => {
  return (
    <ButtonMaterial variant={variant} color="primary" onClick={event} disabled={disabled}>
      {text}
    </ButtonMaterial>
  )
}

export default Button;
