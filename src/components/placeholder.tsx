import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

interface PlaceholderProps {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactNode;
}

export default function Placeholder({
  label,
  icon = <LucideMessageSquareWarning />,
  button,
}: PlaceholderProps) {
  return (
    <div className="flex-1 flex flex-col gap-y-4 items-center justify-center">
      {cloneElement(icon, { className: "w-12 h-12" } as HTMLElement)}
      <h2 className="text-lg">{label}</h2>
      {button}
    </div>
  );
}
