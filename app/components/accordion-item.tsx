import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { useState } from "react";

interface AccordionItemComponentProps {
  title: string;
  description: string;
}
const AccordionItemComponent = ({
  title,
  description,
}: AccordionItemComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion
      type="single"
      collapsible
      className="mt-4 w-full max-w-md gap-4 rounded-lg border border-none border-gray-300 bg-white shadow-lg"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center rounded-t-lg bg-gradient-to-r from-[#6A11CB] to-[#2575FC] px-4 py-3 text-left text-lg font-bold text-white"
        >
          <span className="flex-1">{title}</span>
          {isOpen ? (
            <Minus className="h-5 w-5 text-white transition-transform duration-300" />
          ) : (
            <Plus className="h-5 w-5 text-white transition-transform duration-300" />
          )}
        </AccordionTrigger>
        <AccordionContent className="rounded-b-lg bg-white p-4 text-gray-700">
          <p className=""> {description}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionItemComponent;
