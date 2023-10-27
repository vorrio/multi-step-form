import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";
import Confirmation from "./components/Confirmation";
import { useState } from "react";
import arcadePlanImg from "./assets/images/icon-arcade.svg";
import advancedPlanImg from "./assets/images/icon-advanced.svg";
import proPlanImg from "./assets/images/icon-pro.svg";

const steps = [
  "your info",
  "select plan",
  "add-ons",
  "summary",
  "confirmation",
];

const planOptions = [
  {
    name: "Arcade",
    price: 9,
    img: arcadePlanImg,
  },
  {
    name: "Advanced",
    price: 12,
    img: advancedPlanImg,
  },
  {
    name: "Pro",
    price: 15,
    img: proPlanImg,
  },
];

const addOns = [
  {
    name: "Online Service",
    description: "Access to multiplayer games",
    enabled: false,
    extraPrice: 1,
  },
  {
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    enabled: false,
    extraPrice: 2,
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    enabled: false,
    extraPrice: 2,
  },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    chosenPlanIndex: null,
    planLength: "Monthly",
    chosenAddOns: addOns.map((addOn) => false),
  });

  function updateData(newData) {
    setData({ ...data, ...newData });
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (steps[currentStep + 1] === "summary") {
      if (
        data.name === "" ||
        data.email === "" ||
        data.phone === "" ||
        data.chosenPlanIndex === null
      ) {
        alert("Please fill out all fields before finishing");
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  }
  function jumpToStep(step) {
    if (steps[step] === "summary") {
      if (
        data.name === "" ||
        data.email === "" ||
        data.phone === "" ||
        data.chosenPlanIndex === null
      ) {
        alert("Please fill out all fields before finishing");
        return;
      }
    }
    setCurrentStep(step);
  }

  return (
    <>
      <main className="w-[100vw] pb-[5rem] lg:flex lg:h-[600px] lg:w-[940px] lg:rounded-[16px] lg:bg-white lg:p-[16px] lg:pr-0">
        <Sidebar
          currentStep={currentStep}
          setCurrentStep={jumpToStep}
          steps={steps}
        />
        <form
          onSubmit={handleFormSubmit}
          className="shodow mx-[16px] -mt-[72px] rounded-[8px] bg-white lg:mx-[100px] lg:mt-0 lg:flex lg:grow-[1] lg:flex-col lg:justify-between lg:pt-[36px]"
        >
          {steps[currentStep] === "your info" && (
            <PersonalInfo
              name={data.name}
              email={data.email}
              phone={data.phone}
              updateData={updateData}
            />
          )}
          {steps[currentStep] === "select plan" && (
            <SelectPlan
              chosenPlanIndex={data.chosenPlanIndex}
              planOptions={planOptions}
              planLength={data.planLength}
              updateData={updateData}
            />
          )}
          {steps[currentStep] === "add-ons" && (
            <PickAddOns
              addOns={addOns}
              chosenAddOns={data.chosenAddOns}
              planLength={data.planLength}
              updateData={updateData}
            />
          )}
          {steps[currentStep] === "summary" && (
            <FinishingUp
              planOptions={planOptions}
              chosenPlanIndex={data.chosenPlanIndex}
              planLength={data.planLength}
              chosenAddOns={data.chosenAddOns}
              addOns={addOns}
              goToSelectPlan={() =>
                setCurrentStep(steps.indexOf("select plan"))
              }
            />
          )}
          {steps[currentStep] === "confirmation" && <Confirmation />}

          {steps[currentStep] !== "confirmation" && (
            <div className="fixed bottom-0 left-0 right-0 flex h-[4.5rem] shrink-0 items-center bg-white px-[16px] lg:static lg:px-0 z-20">
              {currentStep !== 0 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="font-medium text-cool-gray duration-200 hover:text-marine-blue"
                >
                  Go Back
                </button>
              )}
              {steps[currentStep] !== "summary" ? (
                <button
                  type="submit"
                  // onClick={() => setCurrentStep(currentStep + 1)}
                  className="float-right ml-auto w-[6rem] rounded-[4px] bg-marine-blue py-[10px] text-white hover:opacity-90 active:translate-y-[1px] lg:w-[7.75rem] lg:rounded-[8px] lg:py-[12px]"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  // onClick={() => setCurrentStep(currentStep + 1)}
                  className="ml-auto w-[6rem] rounded-[4px] bg-purplish-blue  py-[10px] text-white hover:opacity-90 active:translate-y-[1px] lg:w-[7.75rem] lg:rounded-[8px] lg:py-[12px]"
                >
                  Confirm
                </button>
              )}
            </div>
          )}
        </form>
      </main>
    </>
  );
}

export default App;
