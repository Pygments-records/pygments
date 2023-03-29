export const MenuIcon = ({
  color = "white",
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    width="42"
    height="32"
    viewBox="0 0 42 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.25 16h31.5M5.25 8h31.5M5.25 24h31.5"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
