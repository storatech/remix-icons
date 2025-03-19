import codePoints from './codepoints'

export type IconVariant = keyof typeof codePoints
export type IconKey = keyof typeof codePoints.filled | keyof typeof codePoints.regular

export const getValue = (variant: IconVariant, icon: IconKey, tryOtherVariant = true): string => {
  const codePoint: number | undefined = (codePoints[variant] as any)[icon]

  if (codePoint === undefined || codePoint === null || isNaN(codePoint)) {
    if (!tryOtherVariant) return ''
    return getValue(variant === 'filled' ? 'regular' : 'filled', icon, false)
  }

  return String.fromCodePoint(codePoint)
}
