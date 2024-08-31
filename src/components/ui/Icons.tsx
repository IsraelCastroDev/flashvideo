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

export function GreaterThenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.75em"
      height="1em"
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256L17.7 387.4c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3"
      />
    </svg>
  );
}
