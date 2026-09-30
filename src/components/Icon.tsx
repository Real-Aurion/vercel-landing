import {
  AcademicCapIcon, AdjustmentsHorizontalIcon, BeakerIcon, BoltIcon, BookOpenIcon, BriefcaseIcon,
  BuildingOffice2Icon, CalendarDaysIcon, ChartBarIcon, ChatBubbleLeftRightIcon, CircleStackIcon,
  CpuChipIcon, CubeIcon, DocumentTextIcon, EnvelopeIcon, EyeSlashIcon, HeartIcon, InformationCircleIcon,
  LinkIcon, LockClosedIcon, MagnifyingGlassIcon, NewspaperIcon, PencilSquareIcon, QuestionMarkCircleIcon,
  ShieldCheckIcon, SparklesIcon, UserGroupIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";
import type { IconName } from "@/content/menu";


const icons: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  sparkles: SparklesIcon, link: LinkIcon, circleStack: CircleStackIcon, eyeSlash: EyeSlashIcon,
  shield: ShieldCheckIcon, cpu: CpuChipIcon, cube: CubeIcon, document: DocumentTextIcon,
  adjustments: AdjustmentsHorizontalIcon, chat: ChatBubbleLeftRightIcon, search: MagnifyingGlassIcon,
  bookOpen: BookOpenIcon, pencil: PencilSquareIcon, beaker: BeakerIcon, bolt: BoltIcon,
  calendar: CalendarDaysIcon, users: UserGroupIcon, chart: ChartBarIcon, building: BuildingOffice2Icon,
  academic: AcademicCapIcon, newspaper: NewspaperIcon, question: QuestionMarkCircleIcon,
  lock: LockClosedIcon, info: InformationCircleIcon, heart: HeartIcon, briefcase: BriefcaseIcon,
  envelope: EnvelopeIcon,
};


export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Svg = icons[name];
  return <Svg className={className} strokeWidth={1.5} aria-hidden="true" />;
}
