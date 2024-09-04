import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size: 'sm' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, size, children }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'min-[576px]:max-w-[300px]',
    lg: 'min-[992px]:max-w-[800px]',
    xl: 'min-[1200px]:max-w-[1140px]',
  };

  return (
    <div className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`pointer-events-auto relative w-auto translate-y-[-50px] opacity-100 transition-all duration-300 ease-in-out ${sizeClasses[size]} bg-white rounded-md shadow-4`}
      >
        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
          <h5 className="text-xl font-medium leading-normal text-surface dark:text-white">
            {title}
          </h5>
          <button
            type="button"
            className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="[&>svg]:h-6 [&>svg]:w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </button>
        </div>

        {/* Modal body */}
        <div className="relative p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
