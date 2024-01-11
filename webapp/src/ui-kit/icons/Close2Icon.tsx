export const CloseIcon = ({
  color = 'white',
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg width="36" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m1 1.047 34 17.811M1.063 18.88 34.63.88"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
