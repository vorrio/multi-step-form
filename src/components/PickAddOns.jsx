export default function PickAddOns({
  addOns,
  chosenAddOns,
  planLength,
  updateData,
}) {
  return (
    <div className="px-[24px] py-[32px] lg:overflow-y-auto lg:px-0 lg:py-0">
      <h1 className="text-[1.625rem] font-bold text-marine-blue lg:text-[2rem]">
        Pick add-ons
      </h1>
      <p className="mt-[8px] text-[1rem] text-cool-gray lg:mb-[28px]">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="mt-[24px] grid gap-[12px]">
        {addOns.map((addOn, index) => (
          <div
            key={index}
            className="relative flex flex-wrap items-center rounded-[6px] border-[1px] border-cool-gray p-[16px] duration-150 hover:border-purplish-blue [&:has(input:checked)]:border-purplish-blue [&:has(input:checked)]:bg-magnolia"
          >
            <input
              checked={chosenAddOns[index]}
              onChange={(e) => {
                const newChosenAddOns = [...chosenAddOns];
                newChosenAddOns[index] = e.target.checked;
                updateData({ chosenAddOns: newChosenAddOns });
              }}
              name="plan"
              className="peer absolute inset-0 appearance-none"
              type="checkbox"
              id="arcade"
            />
            <span className="inline-block aspect-square w-[20px] shrink-0 rounded-[4px] border-[1px] border-cool-gray bg-center bg-no-repeat duration-200 peer-checked:border-none peer-checked:bg-purplish-blue peer-checked:bg-checkmark"></span>
            <div
              className="ml-[14px] grow-[1] basis-[min-content]"
              htmlFor="arcade"
            >
              <h2 className="font-medium  text-marine-blue">{addOn.name}</h2>
              <p className=" text-[0.8125rem] text-cool-gray">
                {addOn.description}
              </p>
            </div>
            <p className="ml-auto text-[0.875rem] text-purplish-blue">
              {planLength === "Monthly"
                ? "+$" + addOn.extraPrice + "/mo"
                : "+$" + addOn.extraPrice * 10 + "/yr"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
