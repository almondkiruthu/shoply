import {
  Activity,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  FileText,
  HelpCircle,
  Layout,
  Loader2,
  LucideIcon,
  LucideProps,
  Menu,
  MoreHorizontal,
  Plus,
  Settings,
  User,
  X,
  XCircle,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  logo: Command,
  close: X,
  closeIcon: XCircle,
  menu: Menu,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  project: FileText,
  billing: CreditCard,
  settings: Settings,
  user: User,
  arrowRight: ArrowRight,
  add: Plus,
  boards: Layout,
  activity: Activity,
  question: HelpCircle,
  check: Check,
  more: MoreHorizontal,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  mainLogo: ({ ...props }: LucideProps) => (
    <svg
      width="112"
      height="40"
      viewBox="0 0 112 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="112" height="40" fill="white" fill-opacity="0.01" />
      <g clip-path="url(#clip0_329_8882)">
        <rect
          width="96"
          height="30"
          transform="translate(0 5)"
          fill="white"
          fill-opacity="0.01"
        />
        <path
          d="M6.86 16.66C6.86 16.66 8.6 16.78 10.76 16.92C11.74 17 12.82 17.08 13.86 17.16C15.26 17.28 16.36 18.46 16.36 19.88V21.02C16.36 23.38 14.44 25.3 12.06 25.3H4.74C2.38 25.3 0.8 23.38 0.8 21.02V19.72H6.58C6.58 19.72 6.5 20.24 7.44 20.24H10.08C10.68 20.24 10.84 19.36 10.28 19.26C10.28 19.26 8.5 19.12 6.38 18.92C5.34 18.82 4.22 18.72 3.22 18.6C1.84 18.44 0.78 17.28 0.8 15.9V14.92C0.78 13.78 1.24 12.68 2.04 11.88C2.86 11.08 3.94 10.62 5.08 10.62H11.36C13.82 10.76 16.36 11.1 16.36 16.2H10.58C10.58 16.2 10.64 15.7 9.7 15.7H7.06C6.46 15.7 6.3 16.56 6.86 16.66ZM27.488 11H32.928V25.02H27.488V20.02H23.408V25.02H17.968V11H23.408V15.44H27.488V11ZM45.85 10.6C48.21 10.6 50.15 12.52 50.15 14.9V21.02C50.15 23.38 48.21 25.32 45.85 25.32H38.85C37.71 25.32 36.61 24.86 35.79 24.06C34.99 23.24 34.53 22.16 34.55 21.02V14.9C34.53 13.76 34.99 12.66 35.79 11.86C36.61 11.06 37.69 10.6 38.85 10.6H45.85ZM44.53 19.46V16.46C44.53 15.68 43.89 15.04 43.11 15.04H41.57C40.79 15.04 40.15 15.68 40.15 16.46V19.46C40.15 20.24 40.79 20.88 41.57 20.88H43.11C43.89 20.88 44.53 20.24 44.53 19.46ZM60.817 11.02C63.557 11.02 66.197 12.1 66.197 14.74C66.197 19.86 59.217 19.46 59.217 19.46H56.717V25H51.757V11.02H60.817ZM60.557 16.74C60.757 16.56 60.817 16.26 60.717 16.02C60.597 15.76 60.357 15.6 60.097 15.6H56.717V16.94H60.097C60.257 16.94 60.437 16.88 60.557 16.74ZM72.4891 19.64H81.9091V25.04H67.0891V11H72.4891V19.64ZM89.5558 11H95.3558L90.3758 19.48V25H84.8758V19.48L79.9158 11H85.6958L87.6358 14.7L89.5558 11Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_329_8882">
          <rect
            width="96"
            height="30"
            fill="white"
            transform="translate(0 5)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  intergrate: ({ ...props }: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="rollingIntegrate-Logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 0H0V40H20V0Z" fill="url(#paint0_linear_2254_330)" />
      <path d="M40 0H20V40H40V0Z" fill="#306870" />
      <path d="M20 10H10V30H20V10Z" fill="#50ADBB" />
      <path d="M30 10H20V30H30V10Z" fill="#306870" />
      <defs>
        <linearGradient
          id="paint0_linear_2254_330"
          x1="10"
          y1="0"
          x2="10"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#183438" />
          <stop offset="1" stopColor="#183438" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  collaborate: ({ ...props }: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="rollimgCollaborate-Logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.66667 13.3333C10.3486 13.3333 13.3333 10.3486 13.3333 6.66667C13.3333 2.98477 10.3486 0 6.66667 0C2.98477 0 0 2.98477 0 6.66667C0 10.3486 2.98477 13.3333 6.66667 13.3333Z"
        fill="#489CA8"
      />
      <path
        opacity="0.6"
        d="M33.3334 13.3333C37.0153 13.3333 40 10.3486 40 6.66667C40 2.98477 37.0153 0 33.3334 0C29.6515 0 26.6667 2.98477 26.6667 6.66667C26.6667 10.3486 29.6515 13.3333 33.3334 13.3333Z"
        fill="#306870"
      />
      <path
        d="M6.66667 40C10.3486 40 13.3333 37.0153 13.3333 33.3334C13.3333 29.6515 10.3486 26.6667 6.66667 26.6667C2.98477 26.6667 0 29.6515 0 33.3334C0 37.0153 2.98477 40 6.66667 40Z"
        fill="#50ADBB"
      />
      <path
        opacity="0.8"
        d="M33.3334 40C37.0153 40 40 37.0153 40 33.3334C40 29.6515 37.0153 26.6667 33.3334 26.6667C29.6515 26.6667 26.6667 29.6515 26.6667 33.3334C26.6667 37.0153 29.6515 40 33.3334 40Z"
        fill="#489CA8"
      />
    </svg>
  ),
  succeed: ({ ...props }: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="rollimgCollaborate-Logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
        fill="url(#paint0_linear_2254_348)"
      />
      <path
        d="M30 40V20C30 14.4772 25.5228 10 20 10C14.4772 10 10 14.4772 10 20V40H30Z"
        fill="url(#paint1_linear_2254_348)"
      />
      <path
        d="M19.9999 30C25.5228 30 29.9999 25.5228 29.9999 20C29.9999 14.4772 25.5228 10 19.9999 10C14.4771 10 9.99994 14.4772 9.99994 20C9.99994 25.5228 14.4771 30 19.9999 30Z"
        fill="#3E8C97"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2254_348"
          x1="20"
          y1="0"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#46E8FF" stopOpacity="0.71" />
          <stop offset="1" stopColor="#489CA8" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2254_348"
          x1="20"
          y1="10"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#167785" />
          <stop offset="1" stopColor="#167785" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
};
