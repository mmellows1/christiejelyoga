"use client";

import { createContext, useContext } from "react";

export type Config = {
  title: string;
  logo?: { asset: { _ref: string } };
  momoYogaScheduleUrl?: string;
  menu?: Array<{ _id: string; title: string; slug: { current: string } }>;
  ctas?: Array<{ label: string; url?: string }>;
};

const ConfigContext = createContext<Config | null>(null);

export function ConfigProvider({
  value,
  children,
}: {
  value: Config;
  children: React.ReactNode;
}) {
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig must be used within ConfigProvider");
  return context;
}
