import { createContext, useContext, useState } from 'react'

const STORAGE_KEY = 'fasaderen_segment'
const SegmentContext = createContext(null)

export function SegmentProvider({ children }) {
  const [segment, setSegmentState] = useState(
    () => localStorage.getItem(STORAGE_KEY) || 'privat',
  )

  const setSegment = (value) => {
    setSegmentState(value)
    localStorage.setItem(STORAGE_KEY, value)
  }

  return (
    <SegmentContext.Provider value={{ segment, setSegment, isBedrift: segment === 'bedrift' }}>
      {children}
    </SegmentContext.Provider>
  )
}

export function useSegment() {
  const ctx = useContext(SegmentContext)
  if (!ctx) throw new Error('useSegment must be used within SegmentProvider')
  return ctx
}
