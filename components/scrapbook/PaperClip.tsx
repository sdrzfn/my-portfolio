export default function PaperClip({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="92"
      height="130"
      viewBox="0 0 92 130"
      fill="none"
      aria-hidden="true"
    >
      <path d="M57 15c-4-12-22-12-26 0l-12 65c-2 14 19 21 25 7l10-51" stroke="#4b3b1c" strokeWidth="3"/>
      {/* <path d="M58 18c11-8 25 2 21 14l-14 65c-3 13-22 9-19-4l11-54" stroke="#8f773e" strokeWidth="3"/> */}
      {/* <path d="M24 81c-3 14 17 25 27 14" stroke="#4b3b1c" strokeWidth="3"/> */}
    </svg>
  );
}
