import './Button.css';

const Button = ({buttonType}) => {
  let className = `button button-${buttonType}`;
  return (
    <div className={className}>
    </div>
  )
}

export default Button;