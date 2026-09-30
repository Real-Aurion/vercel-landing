import type { ComponentType } from "react";
import type { VisualName } from "@/content/pages/types";
import type { Locale } from "@/dictionaries";
import { ChatVisual, DocumentationVisual, OcrVisual } from "./AssistantVisuals";
import { Stage } from "./Frame";
import { CalendarVisual, InsightsVisual, PatientFlowVisual, QrCheckInVisual } from "./OperationsVisuals";
import { CdrVisual, ConnectorsVisual, DatasetVisual, OnPremVisual } from "./PlatformVisuals";


// These are coded stand-ins for real product screenshots. Swap one for an <Image> once Lam sends the real UI.
const visuals: Record<VisualName, ComponentType<{ lang: Locale }>> = {
  chat: ChatVisual,
  documentation: DocumentationVisual,
  ocr: OcrVisual,
  calendar: CalendarVisual,
  patientFlow: PatientFlowVisual,
  qrCheckIn: QrCheckInVisual,
  insights: InsightsVisual,
  cdr: CdrVisual,
  connectors: ConnectorsVisual,
  onPrem: OnPremVisual,
  dataset: DatasetVisual,
};


export function Visual({ name, lang }: { name: VisualName; lang: Locale }) {
  const Component = visuals[name];
  return (
    <Stage>
      <Component lang={lang} />
    </Stage>
  );
}
