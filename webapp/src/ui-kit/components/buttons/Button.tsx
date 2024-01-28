import type { ComponentPropsWithoutRef, ReactNode } from 'react'

export type ButtonProps = {
  children?: ReactNode
} & ComponentPropsWithoutRef<'button'>
export const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props}>{children}</button>
)
