export const SoundCloudIcon = ({
  color = 'white',
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="15"
    viewBox="0 0 27 15"
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M1 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Zm3-3a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1Zm3-3a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1Zm13 6.11A8 8 0 0 0 15 0a3 3 0 0 0-3 3v11a1 1 0 0 0 2 0V3a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 0 0 1 1 2 2 0 0 1 0 4h-5a1 1 0 1 0 0 2h5a4 4 0 0 0 1-7.89Z"
    />
  </svg>
)
