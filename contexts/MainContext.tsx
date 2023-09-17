import { createContext, useState, ReactNode } from 'react'

interface MainContextProps {
  children: ReactNode
}

interface MainContextValue {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const MainContext = createContext<MainContextValue>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export const MainProvider = ({ children }: MainContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (
    <MainContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </MainContext.Provider>
  )
}
