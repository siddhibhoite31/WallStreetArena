import React, { createContext, useContext, useState, useCallback } from 'react';
import RegistrationModal from '../components/RegistrationModal';

const RegistrationModalContext = createContext({
  isOpen: false,
  openRegistrationModal: () => {},
  closeRegistrationModal: () => {},
});

export function RegistrationModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openRegistrationModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeRegistrationModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <RegistrationModalContext.Provider
      value={{
        isOpen,
        openRegistrationModal,
        closeRegistrationModal,
      }}
    >
      {children}
      <RegistrationModal isOpen={isOpen} onClose={closeRegistrationModal} />
    </RegistrationModalContext.Provider>
  );
}

export function useRegistrationModal() {
  const context = useContext(RegistrationModalContext);
  if (!context) {
    throw new Error('useRegistrationModal must be used within a RegistrationModalProvider');
  }
  return context;
}
