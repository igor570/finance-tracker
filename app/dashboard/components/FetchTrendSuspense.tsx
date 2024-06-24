import { Skeleton } from "@/app/components";

export const FetchTrendSuspense = () => {
  return (
    <div className={"space-y-5 w-3/5 lg:w-5/6"}>
      <div>
        <Skeleton />
      </div>
      <div className={"mb-2"}>
        <Skeleton />
      </div>
      <div className="flex space-x-1">
        <Skeleton />
      </div>
    </div>
  );
};
