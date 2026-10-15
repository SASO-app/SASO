import { createContext, useContext, useState } from 'react'

const CampaignModalContext = createContext(null)

export function CampaignModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <CampaignModalContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </CampaignModalContext.Provider>
  )
}

export function useCampaignModal() {
  return useContext(CampaignModalContext)
}
