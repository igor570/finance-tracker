import {
  Header,
  Trend,
  TransactionItem,
  TransactionSummary,
  Button,
  Label,
  Input,
  Select,
  Seperator,
  Skeleton,
} from "../components";

const Page = () => {
  return (
    <main className={"space-y-8 "}>
      <h1 className={"text-4xl mt-8"}>Component playground</h1>

      <div>
        <h2 className={"mb-4 text-lg font-mono"}>Header.tsx</h2>
        <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
        <div>
          <Header />
        </div>
      </div>

      <div>
        <h2 className={"mb-4 text-lg font-mono"}>Trend.tsx</h2>
        <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
        <div className={"flex space-x-4"}>
          <Trend type={"Income"} amount={1000} prevAmount={2000} />
        </div>
      </div>

      <div>
        <h2 className={"mb-4 text-lg font-mono"}>TransactionItem.tsx</h2>
        <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
        <div className="space-y-4">
          <TransactionItem type="Income" description="Salary" amount={1000} />
          <TransactionItem
            type="Expense"
            description="Food"
            category="Food"
            amount={50}
          />
        </div>
      </div>

      <div>
        <div>
          <h2 className={"mb-4 text-lg font-mono"}>TransactionSummary.tsx</h2>
          <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
          <div className={"flex flex-col space-y-4"}>
            <TransactionSummary date={Date.now()} amount={1050} />
            <TransactionItem type="Income" description="Salary" amount={1000} />
            <TransactionItem
              type="Expense"
              description="Food"
              category="Food"
              amount={50}
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className={"mb-4 text-lg font-mono"}>Button.tsx</h2>
          <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
          <div className={"space-x-4"}>
            <Button variant="default" size="lg">
              Large Default
            </Button>
            <Button variant="outline" size="xs">
              smol
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className={"mb-4 text-lg font-mono"}>Forms</h2>
          <hr className={"mb-4 border-gray-200 dark:border-gray-800"} />
          <div className={"grid grid-cols-2 gap-4"}>
            <div>
              <Label className=" block mb-1">Your name: </Label>
              <Input type="text" className="default"></Input>
            </div>
            <div>
              <Label className=" block mb-1">City:</Label>
              <Select>
                <option>Paris</option>
                <option>London</option>
                <option>Belgrade</option>
              </Select>
            </div>
            <div className="flex items-center">
              <Input type="checkbox" className="checkbox" />
              <Label className="ml-2" id="terms">
                Accept Terms
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className={"mb-4 text-lg font-mono"}>Loading Skeleton</h2>
          <Seperator />
          <div className={"space-y-8"}>
            <div className={"flex space-x-4"}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
            <div className={"space-y-4"}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
