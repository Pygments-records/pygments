export const InstaIcon = ({
  color = "white",
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 1H6a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V6a5 5 0 0 0-5-5z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 10.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 15 10.37z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 5.5h.01"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
