import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface AuthCardProps {
  children: ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <Card className="w-full border-border/50 shadow-2xl">
      <CardContent className="p-8 md:p-10">
        {children}
      </CardContent>
    </Card>
  );
}