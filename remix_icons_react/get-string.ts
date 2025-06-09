import codePoints from './codepoints'
import { RemixIconVariant } from './types'

export type IconVariant = RemixIconVariant
export type IconKey = keyof typeof codePoints.regular

export const getValue = (variant: IconVariant, icon: IconKey): string => {
  let codePoint: number | undefined

  if (variant === 'filled') {
    codePoint = codePoints.regular[icon + '-filled' as IconKey] ?? codePoints.regular[icon] ?? codePoints.regular[icon.replace(/-filled$/, '') as IconKey]
  } else {
    codePoint = codePoints.regular[icon] ?? codePoints.regular[icon + '-filled' as IconKey]
  }

  if (codePoint === undefined || codePoint === null || isNaN(codePoint)) {
    return ''
  }

  return String.fromCodePoint(codePoint)
}
