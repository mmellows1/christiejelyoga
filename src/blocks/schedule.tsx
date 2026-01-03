import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { MomoSchedule } from "@/components/ui/momo-schedule";

interface ScheduleProps {}

const Schedule = ({}: ScheduleProps) => {
  return <MomoSchedule scheduleUrl="momoyoga.com/christiejelyoga" />;
};

export { Schedule };
