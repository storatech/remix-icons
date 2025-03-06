import codePoints from "./codepoints"

type IconKey = keyof typeof codePoints['filled'] | keyof typeof codePoints['regular']

export interface RemixIconProps {
  icon: IconKey
  variant?: keyof typeof codePoints
  filled?: boolean
  className?: string
  css?: React.CSSProperties
}
