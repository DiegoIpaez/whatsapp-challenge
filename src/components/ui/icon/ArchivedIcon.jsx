const ArchivedIcon = ({ height = '24', width = '24', ...props }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      height={height}
      width={width}
      {...props}
    >
      <title>archived</title>
      <path
        d="M18.54 3.23L17.15 1.55C16.88 1.21 16.47 1 16 1H4C3.53 1 3.12 1.21 2.84 1.55L1.46 3.23C1.17 3.57 1 4.02 1 4.5V17C1 18.1 1.9 19 3 19H17C18.1 19 19 18.1 19 17V4.5C19 4.02 18.83 3.57 18.54 3.23ZM4.24 3H15.76L16.57 3.97H3.44L4.24 3ZM3 17V6H17V17H3ZM11.45 8H8.55V11H6L10 15L14 11H11.45V8Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default ArchivedIcon;
