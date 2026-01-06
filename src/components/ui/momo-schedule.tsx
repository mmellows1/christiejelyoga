"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface MomoScheduleProps {
  scheduleUrl: string;
}

const MomoSchedule = ({ scheduleUrl }: MomoScheduleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Add jQuery
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.3.1.min.js";
    jqueryScript.crossOrigin = "anonymous";
    document.body.appendChild(jqueryScript);

    // 2. Add Momoyoga schedule script after jQuery
    const scheduleScript = document.createElement("script");
    scheduleScript.src =
      "https://www.momoyoga.com/schedule-plugin/v2/js/schedule.js";
    scheduleScript.crossOrigin = "anonymous";
    document.body.appendChild(scheduleScript);

    return () => {
      // Clean up scripts when component unmounts
      document.body.removeChild(jqueryScript);
      document.body.removeChild(scheduleScript);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="momoyoga-schedule"
      data-momo-schedule={scheduleUrl}
    />
  );
};

export { MomoSchedule };
