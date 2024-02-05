export const ArrowIcon = ({
  color = 'white',
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="34"
    viewBox="0 0 50 34"
    fill="none"
    {...props}
  >
    <path stroke={color} d="M16.09.334 1.373 16.687M16.347 33.43.961 16.334M2 16.5h48" />
  </svg>
)
