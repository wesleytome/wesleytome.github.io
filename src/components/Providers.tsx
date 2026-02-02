"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeWrapper from "@/components/ThemeWrapper";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeProvider>
  );
};
