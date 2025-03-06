import { createContext } from 'react'

export interface RemixIconContextProps {
  variant?: 'filled' | 'regular'
  filled?: boolean
  className?: string
}

export const RemixIconContext = createContext<RemixIconContextProps>({})
