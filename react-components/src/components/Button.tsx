
interface Props {
    children: string;
    color?: 'success' | 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}
const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button