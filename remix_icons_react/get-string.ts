import codePoints from './codepoints'

export type IconVariant = 'regular' | 'filled' | (string & {})
export type IconKey = keyof typeof codePoints.regular

export const getValue = (variant: IconVariant, icon: IconKey): string => {
  const codePoint: number | undefined = codePoints.regular[icon]

  if (codePoint === undefined || codePoint === null || isNaN(codePoint)) {
    if (variant === 'filled') {
      if (!icon.endsWith('-filled')) {
              return getValue('regular', (icon + '-filled') as IconKey)
      }
    } else {
      return getValue('filled', (icon + (icon.endsWith('-filled') ? '' : '-filled')) as IconKey)
    }

    return ''
  }

  return String.fromCodePoint(codePoint)
}
