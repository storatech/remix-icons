import React, { FunctionComponent, useContext } from 'react'
import { RemixIconProps } from './types'
import { getValue } from './get-string'
import { RemixIconContext } from './context'

const RemixIconComponent: FunctionComponent<RemixIconProps> = ({ css, variant: propVariant, filled: propFilled, icon, className }) => {
  const contextProps = useContext(RemixIconContext)

  const variant = propVariant ?? contextProps.variant ?? ((propFilled ?? contextProps.filled ?? false) ? 'filled' : 'regular')

  const value = getValue(variant, icon)

  return (
    <span style={css} data-stora-icon data-remix-icons aria-hidden='true' data-remix-icons-variant={variant} className={[className, contextProps.className].filter(x => Boolean(x) && x!.trim().length > 0).join(' ')}>
      {value}
    </span>
  )
}

export const RemixIcon = Object.assign(RemixIconComponent, {
  Context: RemixIconContext,
  displayName: 'RemixIcon'
})
