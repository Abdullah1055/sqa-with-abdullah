import { UserCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export function UserNav() {
  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2"
    >
      <UserCircle className="h-5 w-5" />

      <div className="hidden text-left md:block">
        <p className="text-sm font-medium">
          Abdullah
        </p>

        <p className="text-xs text-muted-foreground">
          Student
        </p>
      </div>
    </Button>
  );
}