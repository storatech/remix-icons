import codePoints from "./codepoints"
import { IconKey } from "./get-string"

export interface RemixIconProps {
  icon: IconKey
  variant?: RemixIconVariant
  filled?: boolean
  className?: string
  css?: React.CSSProperties
}

export type RemixIconVariant = 'filled' | 'regular'