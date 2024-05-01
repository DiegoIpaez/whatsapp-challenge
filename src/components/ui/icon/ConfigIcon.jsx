const ConfigIcon = ({ height = '30', width = '30', ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      height={height}
      width={width}
      {...props}
    >
      <title>settings-outline</title>
      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
      ></circle>
      <mask id="gear-outline" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1253 22H13.8753C14.1253 22 14.342 21.9167 14.5253 21.75C14.7087 21.5833 14.817 21.375 14.8503 21.125L15.1503 18.8C15.3503 18.7167 15.5503 18.6167 15.7503 18.5C15.9503 18.3833 16.142 18.2583 16.3253 18.125L18.4503 19.025C18.6837 19.1083 18.9212 19.1125 19.1628 19.0375C19.4045 18.9625 19.592 18.8167 19.7253 18.6L21.5753 15.4C21.7087 15.1833 21.7503 14.95 21.7003 14.7C21.6503 14.45 21.5253 14.25 21.3253 14.1L19.4503 12.675C19.4837 12.5583 19.5003 12.4458 19.5003 12.3375V11.6625C19.5003 11.5542 19.492 11.4417 19.4753 11.325L21.3503 9.9C21.5503 9.75 21.6753 9.55 21.7253 9.3C21.7753 9.05 21.7337 8.81667 21.6003 8.6L19.7503 5.375C19.617 5.15833 19.4337 5.01667 19.2003 4.95C18.967 4.88333 18.7337 4.89167 18.5003 4.975L16.3253 5.875C16.142 5.74167 15.9545 5.61667 15.7628 5.5C15.5712 5.38333 15.367 5.28333 15.1503 5.2L14.8503 2.875C14.817 2.625 14.7087 2.41667 14.5253 2.25C14.342 2.08333 14.1253 2 13.8753 2H10.1253C9.87534 2 9.65867 2.08333 9.47534 2.25C9.292 2.41667 9.18367 2.625 9.15034 2.875L8.85034 5.2C8.65034 5.28333 8.45034 5.38333 8.25034 5.5C8.05034 5.61667 7.85867 5.74167 7.67534 5.875L5.50034 4.975C5.267 4.89167 5.0295 4.87917 4.78784 4.9375C4.54617 4.99583 4.367 5.14167 4.25034 5.375L2.40034 8.6C2.267 8.81667 2.22534 9.05 2.27534 9.3C2.32534 9.55 2.45034 9.75 2.65034 9.9L4.52534 11.325C4.50867 11.4417 4.50034 11.5542 4.50034 11.6625V12.3375C4.50034 12.4458 4.50867 12.5583 4.52534 12.675L2.65034 14.1C2.45034 14.25 2.32534 14.45 2.27534 14.7C2.22534 14.95 2.267 15.1833 2.40034 15.4L4.25034 18.625C4.38367 18.8417 4.567 18.9833 4.80034 19.05C5.03367 19.1167 5.267 19.1083 5.50034 19.025L7.67534 18.125C7.85867 18.2583 8.04617 18.3833 8.23784 18.5C8.4295 18.6167 8.63367 18.7167 8.85034 18.8L9.15034 21.125C9.18367 21.375 9.292 21.5833 9.47534 21.75C9.65867 21.9167 9.87534 22 10.1253 22Z"
        ></path>
      </mask>
      <path
        d="M14.8503 21.125L16.8328 21.3893L16.8339 21.3809L14.8503 21.125ZM15.1503 18.8L14.3811 16.9538L13.3146 17.3982L13.1668 18.5441L15.1503 18.8ZM16.3253 18.125L17.1053 16.2834L16.0638 15.8422L15.149 16.5075L16.3253 18.125ZM18.4503 19.025L17.6704 20.8666L17.7234 20.8891L17.7777 20.9085L18.4503 19.025ZM19.7253 18.6L21.4287 19.6482L21.4431 19.6248L21.4568 19.601L19.7253 18.6ZM21.5753 15.4L19.872 14.3518L19.8576 14.3752L19.8439 14.399L21.5753 15.4ZM21.3253 14.1L20.1151 15.6924L20.1253 15.7L21.3253 14.1ZM19.4503 12.675L17.5273 12.1256L17.1517 13.4401L18.2402 14.2673L19.4503 12.675ZM19.4753 11.325L18.2652 9.73268L17.3292 10.444L17.4954 11.6078L19.4753 11.325ZM21.3503 9.9L20.1503 8.29997L20.1402 8.30768L21.3503 9.9ZM21.6003 8.6L19.8655 9.59517L19.8809 9.62193L19.897 9.64819L21.6003 8.6ZM19.7503 5.375L21.4852 4.37983L21.4698 4.35307L21.4537 4.32681L19.7503 5.375ZM18.5003 4.975L17.8277 3.09152L17.7812 3.10811L17.7356 3.12697L18.5003 4.975ZM16.3253 5.875L15.149 7.49247L16.0549 8.15135L17.09 7.72303L16.3253 5.875ZM15.1503 5.2L13.1668 5.45594L13.3194 6.63862L14.4324 7.06669L15.1503 5.2ZM14.8503 2.875L16.8339 2.61905L16.8328 2.61067L14.8503 2.875ZM14.5253 2.25L15.8707 0.77012L14.5253 2.25ZM9.47534 2.25L8.12999 0.77012L9.47534 2.25ZM9.15034 2.875L7.16786 2.61067L7.16678 2.61906L9.15034 2.875ZM8.85034 5.2L9.61957 7.04615L10.686 6.60179L10.8339 5.45594L8.85034 5.2ZM7.67534 5.875L6.91063 7.72303L7.94573 8.15135L8.85168 7.49247L7.67534 5.875ZM5.50034 4.975L6.26504 3.12697L6.21946 3.10811L6.17301 3.09152L5.50034 4.975ZM4.78784 4.9375L4.31856 2.99334L4.31856 2.99334L4.78784 4.9375ZM4.25034 5.375L5.98517 6.37017L6.01362 6.32057L6.03919 6.26943L4.25034 5.375ZM2.40034 8.6L4.10365 9.64819L4.11982 9.62193L4.13517 9.59517L2.40034 8.6ZM2.27534 9.3L4.2365 8.90777L2.27534 9.3ZM2.65034 9.9L3.86053 8.30764L3.85034 8.3L2.65034 9.9ZM4.52534 11.325L6.50524 11.6078L6.6715 10.444L5.7355 9.73268L4.52534 11.325ZM4.52534 12.675L5.7355 14.2673L6.6715 13.556L6.50524 12.3922L4.52534 12.675ZM2.65034 14.1L3.85036 15.7L3.8605 15.6923L2.65034 14.1ZM2.27534 14.7L4.2365 15.0922L2.27534 14.7ZM2.40034 15.4L4.13517 14.4048L4.11982 14.3781L4.10365 14.3518L2.40034 15.4ZM4.25034 18.625L2.51551 19.6202L2.53086 19.6469L2.54702 19.6732L4.25034 18.625ZM5.50034 19.025L6.17301 20.9085L6.21946 20.8919L6.26504 20.873L5.50034 19.025ZM7.67534 18.125L8.85168 16.5075L7.94573 15.8487L6.91063 16.277L7.67534 18.125ZM8.85034 18.8L10.8339 18.5441L10.6813 17.3614L9.5683 16.9333L8.85034 18.8ZM9.15034 21.125L7.16676 21.3809L7.16788 21.3893L9.15034 21.125ZM13.8753 20H10.1253V24H13.8753V20ZM13.18 20.2701C13.2592 20.1981 13.3692 20.1239 13.5074 20.0708C13.6452 20.0178 13.7739 20 13.8753 20V24C14.6179 24 15.3155 23.7345 15.8707 23.2299L13.18 20.2701ZM12.8679 20.8607C12.8796 20.7729 12.9092 20.6624 12.9697 20.546C13.0304 20.4292 13.1066 20.3369 13.18 20.2701L15.8707 23.2299C16.4099 22.7397 16.7383 22.0978 16.8328 21.3893L12.8679 20.8607ZM13.1668 18.5441L12.8668 20.8691L16.8339 21.3809L17.1339 19.0559L13.1668 18.5441ZM14.7426 16.7724C14.6142 16.8474 14.4937 16.9069 14.3811 16.9538L15.9196 20.6462C16.207 20.5264 16.4865 20.386 16.7581 20.2276L14.7426 16.7724ZM15.149 16.5075C15.0211 16.6005 14.8858 16.6889 14.7426 16.7724L16.7581 20.2276C17.0149 20.0778 17.2629 19.9161 17.5017 19.7425L15.149 16.5075ZM19.2303 17.1834L17.1053 16.2834L15.5454 19.9666L17.6704 20.8666L19.2303 17.1834ZM18.57 17.1274C18.6391 17.1059 18.7311 17.089 18.8385 17.0909C18.9465 17.0928 19.0438 17.1132 19.123 17.1415L17.7777 20.9085C18.4281 21.1408 19.1099 21.148 19.7556 20.9476L18.57 17.1274ZM18.022 17.5518C18.0718 17.4708 18.1486 17.3774 18.2568 17.2932C18.3652 17.2089 18.4761 17.1565 18.57 17.1274L19.7556 20.9476C20.4623 20.7283 21.0432 20.2746 21.4287 19.6482L18.022 17.5518ZM19.8439 14.399L17.9939 17.599L21.4568 19.601L23.3068 16.401L19.8439 14.399ZM19.7392 15.0922C19.7189 14.9906 19.7114 14.8586 19.7377 14.7109C19.7641 14.5632 19.817 14.4412 19.872 14.3518L23.2787 16.4482C23.6774 15.8002 23.8104 15.0521 23.6615 14.3078L19.7392 15.0922ZM20.1253 15.7C20.0401 15.6361 19.9489 15.5438 19.8731 15.4225C19.7976 15.3017 19.7577 15.1847 19.7392 15.0922L23.6615 14.3078C23.5171 13.5858 23.1275 12.9516 22.5253 12.5L20.1253 15.7ZM18.2402 14.2673L20.1152 15.6923L22.5355 12.5077L20.6605 11.0827L18.2402 14.2673ZM17.5003 12.3375C17.5003 12.2393 17.5156 12.1665 17.5273 12.1256L21.3734 13.2244C21.4517 12.9502 21.5003 12.6524 21.5003 12.3375H17.5003ZM17.5003 11.6625V12.3375H21.5003V11.6625H17.5003ZM17.4954 11.6078C17.4999 11.6389 17.5003 11.6566 17.5003 11.6625H21.5003C21.5003 11.4517 21.4841 11.2444 21.4552 11.0422L17.4954 11.6078ZM20.1402 8.30768L18.2652 9.73268L20.6855 12.9173L22.5605 11.4923L20.1402 8.30768ZM19.7642 8.90777C19.7827 8.81526 19.8226 8.69828 19.8981 8.5775C19.9739 8.45616 20.0651 8.36393 20.1503 8.3L22.5503 11.5C23.1525 11.0484 23.5421 10.4142 23.6865 9.69223L19.7642 8.90777ZM19.897 9.64819C19.842 9.5588 19.7891 9.43682 19.7627 9.28908C19.7364 9.14142 19.7439 9.00936 19.7642 8.90777L23.6865 9.69223C23.8354 8.94794 23.7024 8.19983 23.3037 7.55181L19.897 9.64819ZM18.0155 6.37017L19.8655 9.59517L23.3352 7.60483L21.4852 4.37983L18.0155 6.37017ZM18.6509 6.87305C18.5353 6.84001 18.4086 6.78048 18.2899 6.68882C18.1726 6.59818 18.0945 6.50037 18.047 6.42319L21.4537 4.32681C21.0724 3.70724 20.4884 3.238 19.7498 3.02695L18.6509 6.87305ZM19.173 6.85848C19.1082 6.88163 19.0224 6.90138 18.9217 6.90498C18.8206 6.90859 18.7279 6.89505 18.6509 6.87305L19.7498 3.02695C19.106 2.84301 18.4454 2.8709 17.8277 3.09152L19.173 6.85848ZM17.09 7.72303L19.265 6.82303L17.7356 3.12697L15.5606 4.02697L17.09 7.72303ZM14.7229 7.2084C14.8674 7.29634 15.0094 7.39097 15.149 7.49247L17.5017 4.25753C17.2746 4.09236 17.0416 3.93699 16.8027 3.7916L14.7229 7.2084ZM14.4324 7.06669C14.5411 7.10849 14.6371 7.15615 14.7229 7.2084L16.8027 3.7916C16.5052 3.61052 16.1929 3.45817 15.8683 3.33331L14.4324 7.06669ZM12.8668 3.13094L13.1668 5.45594L17.1339 4.94406L16.8339 2.61906L12.8668 3.13094ZM13.18 3.72988C13.1066 3.66314 13.0304 3.57076 12.9697 3.45395C12.9092 3.33761 12.8796 3.22709 12.8679 3.13933L16.8328 2.61067C16.7383 1.90221 16.4099 1.26032 15.8707 0.77012L13.18 3.72988ZM13.8753 4C13.7739 4 13.6452 3.98222 13.5074 3.92919C13.3692 3.87605 13.2592 3.80191 13.18 3.72988L15.8707 0.77012C15.3155 0.265451 14.6179 0 13.8753 0V4ZM10.1253 4H13.8753V0H10.1253V4ZM10.8207 3.72988C10.7414 3.80191 10.6315 3.87605 10.4933 3.92919C10.3554 3.98222 10.2268 4 10.1253 4V0C9.38277 0 8.68513 0.265451 8.12999 0.77012L10.8207 3.72988ZM11.1328 3.13933C11.1211 3.22709 11.0915 3.33762 11.031 3.45396C10.9703 3.57076 10.8941 3.66314 10.8207 3.72988L8.12999 0.77012C7.59078 1.26032 7.26234 1.9022 7.16788 2.61067L11.1328 3.13933ZM10.8339 5.45594L11.1339 3.13094L7.16678 2.61906L6.86678 4.94406L10.8339 5.45594ZM9.25808 7.22756C9.3865 7.15265 9.50699 7.09306 9.61957 7.04615L8.08111 3.35385C7.79368 3.47361 7.51418 3.61402 7.2426 3.77244L9.25808 7.22756ZM8.85168 7.49247C8.97955 7.39947 9.11486 7.3111 9.25808 7.22756L7.2426 3.77244C6.98582 3.92223 6.73779 4.08386 6.49899 4.25753L8.85168 7.49247ZM4.73563 6.82303L6.91063 7.72303L8.44004 4.02697L6.26504 3.12697L4.73563 6.82303ZM5.25712 6.88166C5.19861 6.89579 5.12496 6.90472 5.04209 6.90036C4.95917 6.896 4.88599 6.87931 4.82767 6.85848L6.17301 3.09152C5.57172 2.87677 4.9373 2.84398 4.31856 2.99334L5.25712 6.88166ZM6.03919 6.26943C5.98707 6.37367 5.892 6.51376 5.73476 6.64175C5.57527 6.77156 5.40421 6.84616 5.25712 6.88166L4.31856 2.99334C3.47221 3.19763 2.8269 3.74974 2.46148 4.48057L6.03919 6.26943ZM4.13517 9.59517L5.98517 6.37017L2.51551 4.37983L0.665509 7.60483L4.13517 9.59517ZM4.2365 8.90777C4.25682 9.00936 4.26431 9.14142 4.23794 9.28908C4.21156 9.43682 4.15867 9.5588 4.10365 9.64819L0.697021 7.55181C0.298236 8.19983 0.165318 8.94794 0.314176 9.69223L4.2365 8.90777ZM3.85034 8.3C3.93558 8.36393 4.02675 8.45616 4.10258 8.5775C4.17807 8.69828 4.218 8.81525 4.2365 8.90777L0.314176 9.69223C0.458572 10.4142 0.848166 11.0484 1.45034 11.5L3.85034 8.3ZM5.7355 9.73268L3.8605 8.30768L1.44017 11.4923L3.31517 12.9173L5.7355 9.73268ZM6.50034 11.6625C6.50034 11.6566 6.5008 11.6389 6.50524 11.6078L2.54544 11.0422C2.51654 11.2444 2.50034 11.4517 2.50034 11.6625H6.50034ZM6.50034 12.3375V11.6625H2.50034V12.3375H6.50034ZM6.50524 12.3922C6.5008 12.3611 6.50034 12.3434 6.50034 12.3375H2.50034C2.50034 12.5483 2.51654 12.7556 2.54544 12.9578L6.50524 12.3922ZM3.8605 15.6923L5.7355 14.2673L3.31517 11.0827L1.44017 12.5077L3.8605 15.6923ZM4.2365 15.0922C4.218 15.1847 4.17807 15.3017 4.10258 15.4225C4.02675 15.5438 3.93558 15.6361 3.85034 15.7L1.45034 12.5C0.848166 12.9516 0.458572 13.5858 0.314176 14.3078L4.2365 15.0922ZM4.10365 14.3518C4.15867 14.4412 4.21156 14.5632 4.23794 14.7109C4.26431 14.8586 4.25682 14.9906 4.2365 15.0922L0.314176 14.3078C0.165318 15.0521 0.298235 15.8002 0.697022 16.4482L4.10365 14.3518ZM5.98517 17.6298L4.13517 14.4048L0.665509 16.3952L2.51551 19.6202L5.98517 17.6298ZM5.34979 17.127C5.46543 17.16 5.59211 17.2195 5.71073 17.3112C5.82803 17.4018 5.90616 17.4996 5.95366 17.5768L2.54702 19.6732C2.9283 20.2928 3.51224 20.762 4.25089 20.973L5.34979 17.127ZM4.82766 17.1415C4.89246 17.1184 4.97824 17.0986 5.07895 17.095C5.18008 17.0914 5.27276 17.1049 5.34979 17.127L4.25089 20.973C4.89469 21.157 5.55528 21.1291 6.17301 20.9085L4.82766 17.1415ZM6.91063 16.277L4.73563 17.177L6.26504 20.873L8.44004 19.973L6.91063 16.277ZM9.27773 16.7916C9.13325 16.7037 8.99125 16.609 8.85168 16.5075L6.49899 19.7425C6.72609 19.9076 6.95909 20.063 7.19794 20.2084L9.27773 16.7916ZM9.5683 16.9333C9.45961 16.8915 9.36358 16.8439 9.27773 16.7916L7.19794 20.2084C7.49543 20.3895 7.80773 20.5418 8.13237 20.6667L9.5683 16.9333ZM11.1339 20.8691L10.8339 18.5441L6.86678 19.0559L7.16678 21.3809L11.1339 20.8691ZM10.8207 20.2701C10.8941 20.3369 10.9703 20.4292 11.031 20.546C11.0915 20.6624 11.1211 20.7729 11.1328 20.8607L7.16788 21.3893C7.26234 22.0978 7.59077 22.7397 8.12999 23.2299L10.8207 20.2701ZM10.1253 20C10.2268 20 10.3554 20.0178 10.4933 20.0708C10.6315 20.1239 10.7414 20.1981 10.8207 20.2701L8.12999 23.2299C8.68513 23.7345 9.38277 24 10.1253 24V20Z"
        fill="currentColor"
        mask="url(#gear-outline)"
      ></path>
    </svg>
  );
};

export default ConfigIcon;
