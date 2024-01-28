import React from 'react'

export const OuterArrow = ({ ...props }: React.SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    {...props}
  >
    <path
      stroke={'#fff'}
      d="m18.445 8.568 7.115 8.115M18.195 24.186l7.708-7.88M25.703 16.653H7.998"
    />
    <circle cx="17" cy="17" r="16.5" stroke={'#fff'} />
  </svg>
)
