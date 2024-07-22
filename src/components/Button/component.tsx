import React from "react";
import { Loader2 } from 'lucide-react'


type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'small' | 'medium' | 'large';
type IconPosition = 'left' | 'right';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ElementType; //React.Element type is used because it's flexible and icon libraries often export their icons as components
  iconPosition?: IconPosition;
  tooltip?: string
}

const Button: React.FC<ButtonProps> = ({
  children, //not explicitly defined in the interface because it's included in the ButtonHTML that is being extended 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  tooltip,
  className = '',
  ...props

}) => {

  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-offset-2';

  // const variantStyles: 


  const sizeStyles: Record<ButtonSize, string> = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  //all of the styling attributes concatenated  *variants not yet included
  const buttonClasses = `
  ${baseStyles}
  ${sizeStyles[size]}
  ${disabled || loading ? `opacity-50 cursor-not-allowed` : 'hover:bg-opacity-90'}
  transform active:scale-95
  ${className} 
  `.trim();//removes whitespace 

  const iconStyles = 'w-5 h-5'

  const buttonContent = (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <Loader2 className={`${iconStyles} mr-2 animate-spin`} />}
      {!loading && iconPosition === 'left' && Icon && (
        <Icon className={`${iconStyles} mr-2`} />
      )}
      {children}
      {!loading && iconPosition === 'right' && Icon && (
        <Icon className={`${iconStyles} ml-2`} />
      )}
    </button>
  )
  return (tooltip ? (
    <Tooltip content={tooltip}> //tooltip needs to be imported
      {buttonContent}
    </Tooltip>
  ) : buttonContent

  )
};

export default Button;
