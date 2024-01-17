export function DashboardWidget({ children }) {
  return (
    <div className="h-1/2 border-solid border-foreground border-2 rounded-md flex p-4 m-4 shadow-lg ">
      {children}
    </div>
  );
}
