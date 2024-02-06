import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

export function Carousel(items) {
  const listRef = useRef();

  return (
    <div>
      <div className="flex justify-between items-center gap-[10px] pt-[44px] pb-[44px] pl-0 pr-0">
        <button>
          <ChevronLeft />
        </button>
        <div
          ref={listRef}
          className="flex gap-[48px] scroll-smooth overflow-auto snap-x snap-mandatory scrollbar-none"
          style={{ msOverflowStyle: "none" }}
        >
          {items &&
            items.map((item, i) => (
              <div key={i} className="snap-center">
                {item}
              </div>
            ))}
        </div>
        <button>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
