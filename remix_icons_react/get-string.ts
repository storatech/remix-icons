import codePoints, { type IconKey, type IconVariant } from './codepoints'

export const getValue = (variant: IconVariant, icon: IconKey, tryOtherVariant = true): string => {
  const codePoint = codePoints[variant][icon]

  if (codePoint === undefined || codePoint === null || isNaN(codePoint)) {
    if (!tryOtherVariant) return ''
    return getValue(variant === 'filled' ? 'regular' : 'filled', icon, false)
  }

  return String.fromCodePoint(codePoint)
}
