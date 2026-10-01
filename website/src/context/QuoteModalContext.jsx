import { createContext, useContext, useState } from 'react'

const QuoteModalContext = createContext(null)

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState('')

  const openModal = (service = '') => {
    setPreselectedService(service)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal, preselectedService }}>
      {children}
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext)
  if (!ctx) throw new Error('useQuoteModal must be used within QuoteModalProvider')
  return ctx
}
