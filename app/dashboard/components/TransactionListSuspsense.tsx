import { Skeleton } from "@/app/components";

export const TransactionListSuspsense = () => {
  return (
    <div className={"space-y-8"}>
      <div className={"space-y-4"}>
        <TransactionSummarySkeletion />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>
      <div className={"space-y-4"}>
        <TransactionSummarySkeletion />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>
    </div>
  );
};

const TransactionItemSkeleton = () => {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="flex items-center grow ">
        <Skeleton />
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        <Skeleton />
      </div>
      <div className="min-w-[150px] text-right">
        <Skeleton />
      </div>
      <div className="min-w-[50px] flex ">
        <Skeleton />
      </div>
    </div>
  );
};

const TransactionSummarySkeletion = () => {
  return (
    <div className="flex space-x-4">
      <div className="grow">
        <Skeleton />
      </div>

      <div className="min-w-[70px]">
        <Skeleton />
      </div>
      <div className="min-w-[50px]">
        <Skeleton />
      </div>
    </div>
  );
};
