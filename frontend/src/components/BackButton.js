import { ArrowLeft } from "lucide-react";

export function BackButton({ setPageState, newPageState }) {
  return (
    <button
      onClick={() => {
        setPageState && setPageState(newPageState);
      }}
      className="flex border border-solid border-primary rounded-md p-2 absolute top-0 left-0 mt-3 ml-3 transition-all hover:gap-x-3"
    >
      <ArrowLeft /> Go back
    </button>
  );
}
