import { AccordionItem } from "./AccordionItem";

export function Accordion({ accordionData }) {
  return (
    <div className="w-full">
      {accordionData.map((accordionItem, i) => (
        <AccordionItem accordionItem={accordionItem} key={i} />
      ))}
    </div>
  );
}
