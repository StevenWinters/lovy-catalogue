interface Props {
  children: string;
  className?: string;
  type?: "primary" | "secondary" | "accent";
}

const Button = ({ children, className, type }: Props) => {
  return (
    <button className={`btn btn--${type ? type : "accent"} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
