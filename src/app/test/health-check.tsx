"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function HealthCheck() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.health.queryOptions());
  return (
    <div>
      <div className="rounded-lg border p-6 text-center">
        <p className="text-muted-foreground text-sm">tRPC status</p>
        <p className="text-2xl font-bold">{data.status}</p>
      </div>
    </div>
  );
}
