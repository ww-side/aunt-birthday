import { ReactNode } from 'react';
import { cn } from '../utils/styles.ts';

export const Button = ({
  children,
  onClick,
  variant = 'primary',
}: {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'danger';
  onClick?: () => void;
}) => {
  const btnClasses = cn('transition duration-300 ease-in-out cursor-pointer', {
    ['text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800']:
      variant === 'success',
    ['text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900']:
      variant === 'danger',
    ['text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900']:
      variant === 'primary',
  });

  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};
