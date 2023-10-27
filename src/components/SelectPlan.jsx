export default function SelectPlan({
  chosenPlanIndex,
  planOptions,
  planLength,
  updateData,
}) {
  return (
    <div className="px-[24px] py-[32px] lg:overflow-y-auto lg:px-0 lg:py-0">
      <h1 className="text-[1.625rem] font-bold text-marine-blue lg:text-[2rem]">
        Select your plan
      </h1>
      <p className="mt-[8px] text-[1rem] text-cool-gray lg:mb-[28px]">
        You have the option of monthly or yearly billing.
      </p>
      <div className="mt-[24px] grid gap-[12px] lg:flex lg:flex-wrap">
        {planOptions.map((plan, index) => (
          <div
            key={index}
            className="relative flex items-center gap-[14px] rounded-[6px] border-[1px] border-cool-gray p-[16px] duration-150 hover:border-purplish-blue lg:grow-[1] lg:basis-[100px] lg:flex-col lg:items-start lg:gap-[32px] [&:has(input:checked)]:border-purplish-blue [&:has(input:checked)]:bg-magnolia"
          >
            <img src={plan.img} alt={plan.name + " plan image"} />
            <label htmlFor="arcade">
              <h2 className="text-[1.125rem] font-medium leading-[1.1] text-marine-blue">
                {plan.name}
              </h2>
              <p className="leading-[1.4] text-cool-gray">
                {planLength === "Monthly"
                  ? "$" + plan.price + "/mo"
                  : "$" + plan.price * 10 + "/yr"}
              </p>
              {planLength === "Yearly" && (
                <p className="text-[0.875rem] font-medium text-marine-blue">
                  2 months free
                </p>
              )}
            </label>
            <input
              checked={index === chosenPlanIndex}
              onChange={(e) => updateData({ chosenPlanIndex: index })}
              name="plan"
              className="absolute inset-0 appearance-none"
              type="radio"
              id="arcade"
            />
          </div>
        ))}
      </div>

      <div className="relative mt-[24px] flex flex-wrap items-center justify-center gap-[24px] rounded-[6px] bg-magnolia p-[14px]">
        <input
          checked={planLength === "Yearly"}
          onChange={(e) =>
            updateData(
              e.target.checked
                ? { planLength: "Yearly" }
                : { planLength: "Monthly" },
            )
          }
          className="peer absolute inset-0 z-[2] appearance-none"
          type="checkbox"
          id="planLength"
        />
        <span className="font-medium text-marine-blue duration-300  peer-checked:text-cool-gray">
          Monthly
        </span>
        <span className="inline-block h-[1.25rem] w-[2.375rem] shrink-0 rounded-full bg-marine-blue p-[.25rem] after:absolute after:z-[1] after:aspect-square after:h-[.75rem] after:rounded-full after:bg-white after:duration-300 peer-checked:after:translate-x-[1.125rem]"></span>
        <span className="font-medium text-cool-gray duration-300 peer-checked:text-marine-blue">
          Yearly
        </span>
      </div>
    </div>
  );
}
