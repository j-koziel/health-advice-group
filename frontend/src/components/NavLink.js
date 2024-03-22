export function NavLink({ path, className, children }) {
  return (
    <a className={className} href={path}>
      {children}
    </a>
  );
}
