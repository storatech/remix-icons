import { createContext } from 'react'
import { RemixIconVariant } from './types'

export interface RemixIconContextProps {
  variant?: RemixIconVariant
  filled?: boolean
  className?: string
}

export const RemixIconContext = createContext<RemixIconContextProps>({})
