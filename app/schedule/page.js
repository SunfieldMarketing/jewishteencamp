import ScheduleClient from './ScheduleClient';
import fs from "fs/promises";
import path from "path";

export default async function SchedulePage() {
  const filePath = path.join(process.cwd(), "content/pages/schedule.json");
  const content = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(content);

  return <ScheduleClient data={data} />;
}
