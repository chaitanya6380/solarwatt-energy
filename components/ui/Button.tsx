import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'white-secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading,
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-orange-600 focus:ring-orange-500 shadow-lg shadow-orange-500/30",
    secondary: "bg-secondary text-white hover:bg-blue-800 focus:ring-blue-700 shadow-lg shadow-blue-500/30",
    outline: "border-2 border-primary text-primary hover:bg-orange-50 focus:ring-orange-500",
    ghost: "text-gray-600 hover:text-primary hover:bg-gray-100",
    white: "bg-white text-primary hover:bg-gray-50 focus:ring-white shadow-lg shadow-black/10",
    'white-secondary': "bg-white text-secondary hover:bg-gray-50 focus:ring-white shadow-lg shadow-black/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;