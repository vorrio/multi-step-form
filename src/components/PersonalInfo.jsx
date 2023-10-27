import FormInput from "./FormInput";

export default function PersonalInfo({ name, email, phone, updateData }) {
  return (
    <div className="px-[24px] py-[32px] lg:overflow-y-auto lg:px-0 lg:py-0">
      <h1 className="text-[1.625rem] font-bold text-marine-blue lg:text-[2rem]">
        Personal info
      </h1>
      <p className="mt-[8px] text-[1rem] text-cool-gray lg:mb-[28px]">
        Please provide your name, email address, and phone number.
      </p>
      <FormInput
        label="Name"
        id="input-name"
        type="text"
        value={name}
        pattern="[_a-zA-z\s]{3,32}"
        onChange={(e) => updateData({ name: e.target.value })}
        placeholder="e.g. Stephen King"
        required={true}
        autoComplete="name"
        errorMessage="Invalid Name"
      />
      <FormInput
        label="Email Address"
        id="input-email"
        type="email"
        value={email}
        onChange={(e) => updateData({ email: e.target.value })}
        placeholder="e.g. stephenking@lorem.com"
        required={true}
        autoComplete="email"
        errorMessage="Invalid Email"
      />
      <FormInput
        label="Phone Number"
        id="input-phone"
        type="tel"
        pattern="\+?[\s]?[\(]?[\d]{1,4}[\)]?[\-\s]?[\d]{0,4}[\-\s]?[\d]{0,4}[\-\s]?[\d]{0,4}[\s]*"
        value={phone}
        onChange={(e) => updateData({ phone: e.target.value })}
        placeholder="e.g. +1 234 567 890"
        required={true}
        autoComplete="tel"
        errorMessage="Invalid Phone Number"
      />
    </div>
  );
}
