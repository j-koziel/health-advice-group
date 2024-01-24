import { ArrowLeft } from "lucide-react";

export function BackButton({ setPageState, newPageState }) {
  return (
    <button
      onClick={() => {
        setPageState && setPageState(newPageState);
      }}
      className="flex border border-solid border-primary rounded-md p-2 absolute left-0 top-0 mt-3 ml-3 transition-all duration-400 ease-in delay-0 hover:gap-x-3"
    >
      <ArrowLeft /> Go back
    </button>
  );
}
