import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

export function Carousel({ items, width }) {
  const listRef = useRef();

  return (
    <div>
      <div className="flex justify-between items-center gap-[10px] pl-0 pr-0">
        <button
          onClick={() => {
            listRef.current.scrollLeft -= width + 5;
          }}
        >
          <ChevronLeft />
        </button>
        <div
          ref={listRef}
          className="flex gap-[200px] px-[5px] scroll-smooth overflow-auto snap-x snap-mandatory scrollbar-none transition-all"
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
            listRef.current.scrollLeft += width + 5;
          }}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
