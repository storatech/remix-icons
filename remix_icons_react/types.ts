import codePoints from "./codepoints"
import { IconKey } from "./get-string"

export interface RemixIconProps {
  icon: IconKey
  variant?: keyof typeof codePoints
  filled?: boolean
  className?: string
  css?: React.CSSProperties
}
