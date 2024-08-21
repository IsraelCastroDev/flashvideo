type Props = {
  classname?: string;
  width?: string;
  height?: string;
};

export function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12h16M4 6h16M4 18h16"
      />
    </svg>
  );
}

export function SearchIcon({ classname }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 50 50"
    >
      <path
        className={classname}
        fill="currentColor"
        d="M35.66 29.539a18.044 18.044 0 0 0 2.632-9.385c0-10.029-8.115-18.15-18.146-18.154C10.124 2.003 2 10.125 2 20.152c0 10.018 8.125 18.139 18.152 18.139c3.44 0 6.645-.972 9.384-2.633L41.879 48L48 41.876zM20.15 31.38c-6.202-.015-11.216-5.027-11.227-11.216A11.245 11.245 0 0 1 20.15 8.935c6.199.016 11.215 5.028 11.228 11.229c-.013 6.182-5.031 11.201-11.228 11.216"
      />
    </svg>
  );
}

export function PlayIcon({ classname }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1200 1200"
    >
      <path
        className={classname}
        fill="currentColor"
        d="M0 145.898v908.203h1200V145.898zm147.144 147.218h905.713v613.77H147.144zm318.237 106.861v408.839L818.848 603.81z"
      />
    </svg>
  );
}

export function ImageIcon({ classname, width, height }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        className={classname}
        fill="currentColor"
        d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13z"
      />
    </svg>
  );
}
