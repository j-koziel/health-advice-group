import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

export function Carousel({ items, width }) {
  const listRef = useRef();

  return (
    <div>
      <div className="flex justify-between items-center gap-[10px] pl-0 pr-0">
        <button
          onClick={() => {
            listRef.current.scrollLeft -= 500 + 10;
          }}
        >
          <ChevronLeft />
        </button>
        <div
          ref={listRef}
          className="flex gap-[250px] px-[10px] scroll-smooth overflow-auto snap-x snap-mandatory scrollbar-none transition-all"
          style={{ msOverflowStyle: "none", width }}
        >
          {items.map((item, i) => (
            <div key={i} className="snap-center">
              {item}
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            listRef.current.scrollLeft += 500 + 10;
          }}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
