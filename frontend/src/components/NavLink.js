export function NavLink({ path, label, className }) {
  return (
    <a className={className} href={path} aria-label={label}>
      {label}
    </a>
  );
}
