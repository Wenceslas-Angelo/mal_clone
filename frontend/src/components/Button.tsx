import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
};

function Button({ children, variant = 'primary' }: ButtonProps) {
  let btnStyle;
  switch (variant) {
    case 'primary':
      btnStyle = 'bg-secondary2 text-white';
      break;
    case 'secondary':
      btnStyle = 'bg-secondary3/50 text-black';
      break;
    case 'white':
      btnStyle = 'bg-white text-black';
      break;
  }

  return (
    <button
      type="button"
      className={`py-2 px-5 font-semibold rounded-md mx-1 ${btnStyle}`}
    >
      {children}
    </button>
  );
}

export default Button;
