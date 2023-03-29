export const FacebookIcon = ({
  color = "white",
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5.5H7.25A3.75 3.75 0 0 0 3.5 4.25V6.5H1.25v3H3.5v6h3v-6h2.25l.75-3h-3V4.25a.75.75 0 0 1 .75-.75H9.5v-3z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
