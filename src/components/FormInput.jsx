import { useState } from "react";

export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;
  return (
    <>
      <div className="mt-[16px] flex flex-wrap justify-between items-end">
        <label
          className=" order-1 text-[0.875rem] font-medium text-marine-blue lg:my-[6px]"
          htmlFor="input-phone"
        >
          {label}
        </label>	
        <input
          className="peer order-3 w-full rounded-[4px] border-[1px] border-light-gray px-[16px] py-[8px] placeholder-cool-gray outline-none placeholder:font-medium focus:border-purplish-blue invalid:data-[focused='true']:border-strawberry-red text-marine-blue font-medium lg:py-[10px]"
          {...inputProps}
          onChange={onChange}
          onBlur={() => setFocused(true)}
          data-focused={focused.toString()}
        />
        <span className="order-2 hidden text-[0.875rem] text-strawberry-red peer-invalid:peer-data-[focused='true']:block font-medium lg:text-[1rem]">
          {errorMessage}
        </span>
      </div>
    </>
  );
}
