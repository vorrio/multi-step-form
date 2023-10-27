export default function FinishingUp({
  planOptions,
  chosenPlanIndex,
  planLength,
  chosenAddOns,
  addOns,
  goToSelectPlan,
}) {
  const total =
    planOptions[chosenPlanIndex].price +
    chosenAddOns.reduce(
      (totalFromAddOns, isEnabled, index) =>
        isEnabled
          ? totalFromAddOns + addOns[index].extraPrice
          : totalFromAddOns,
      0,
    );
  return (
    <div className="px-[24px] py-[32px] lg:overflow-y-auto lg:px-0 lg:py-0">
      <h1 className="text-[1.625rem] font-bold text-marine-blue lg:text-[2rem]">
        Finishing up
      </h1>
      <p className="mt-[8px] text-[1rem] text-cool-gray lg:mb-[28px]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="mt-[24px] grid gap-[8px] rounded-[6px] bg-magnolia p-[16px]">
        <div className="flex flex-wrap items-center justify-between">
          <div className=" grow basis-0">
            <p className="font-medium text-marine-blue">
              {planOptions[chosenPlanIndex].name} ({planLength})
            </p>
            <button
              type="button"
              onClick={goToSelectPlan}
              className="text-cool-gray underline duration-150 hover:text-purplish-blue"
            >
              Change
            </button>
          </div>
          <p className=" font-bold text-marine-blue">
            {planLength === "Monthly"
              ? "$" + planOptions[chosenPlanIndex].price + "/mo"
              : "$" + planOptions[chosenPlanIndex].price * 10 + "/yr"}
          </p>
        </div>
        <hr className="border-light-gray" />
        {addOns.map(
          (addOn, index) =>
            chosenAddOns[index] && (
              <div
                key={index}
                className="flex flex-wrap items-center justify-between"
              >
                <p className="grow basis-0 text-cool-gray">{addOn.name}</p>
                <p className="text-marine-blue">
                  {planLength === "Monthly"
                    ? "+$" + addOn.extraPrice + "/mo"
                    : "+$" + addOn.extraPrice * 10 + "/yr"}
                </p>
              </div>
            ),
        )}
      </div>
      <div className="mt-[24px] flex items-center justify-between px-[16px]">
        <p className="text-cool-gray">
          Total (per {planLength === "Monthly" ? "month" : "year"})
        </p>
        <p className="font-bold text-purplish-blue">
          +${planLength === "Monthly" ? total + "/mo" : total * 10 + "/yr"}
        </p>
      </div>
    </div>
  );
}
