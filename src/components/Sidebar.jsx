export default function Sidebar({ currentStep, setCurrentStep, steps }) {
  return (
    <>
      <nav className="flex h-[173px] w-full flex-row items-start justify-center gap-[16px] bg-sidebar-mobile bg-cover bg-center pt-[32px] lg:h-full lg:w-[274px] lg:shrink-0 lg:flex-col lg:justify-start lg:gap-[32px] lg:rounded-[12px] lg:bg-sidebar-desktop lg:pt-[40px]">
        {steps.map((step, index) => {
          if (index !== steps.length - 1) {
            return (
              <div
                key={index}
                className="flex items-center gap-[14px] lg:ml-[32px]"
              >
                <button
                  className={`aspect-square w-[2.125rem] shrink-0 rounded-full border-[1px] border-white font-medium duration-300  ${
                    index === currentStep
                      ? "text-black bg-light-blue"
                      : "text-white"
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  {index + 1}
                </button>
                <div className="hidden lg:block">
                  <p className="text-[0.75rem] uppercase leading-[1.2] text-light-gray">
                    step {index + 1}
                  </p>
                  <p className="text-[.875rem] font-medium uppercase leading-[1.2] text-white">
                    {steps[index]}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </nav>
    </>
  );
}

// <!-- Sidebar start -->

//   Step 1
//   Your info

//   Step 2
//   Select plan

//   Step 3
//   Add-ons

//   Step 4
//   Summary

//   <!-- Sidebar end -->
