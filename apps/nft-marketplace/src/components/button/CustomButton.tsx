import React from 'react';

export type CustomButtonProps = {
  model?: 'primary' | 'secondary';
  label: string;
  padding?: string;
};

const CustomButton = ({ model, label, padding }: CustomButtonProps) => {
  return (
    <button
      type="button"
      className={`${
        model === 'secondary' ? 'secondary-button' : 'primary-button'
      } ${padding ? padding : 'py-2 px-5'}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
