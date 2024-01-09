export function DashboardWidget({ children }) {
  return (
    <div className="w-1/2 h-1/2 border-solid border-foreground border-2 rounded-md m-4 flex items-center justify-center">
      {children}
    </div>
  );
}
