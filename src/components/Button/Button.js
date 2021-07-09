import { Button as ButtonMaterial } from '@material-ui/core';

const Button = ({ text, event, disabled }) => {
  return (
    <ButtonMaterial variant="contained" color="primary" onClick={event} disabled={disabled}>
      {text}
    </ButtonMaterial>
  )
}

export default Button;
