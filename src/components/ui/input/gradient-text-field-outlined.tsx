import { GradientFillButton } from "../buttons/gradient-button";

export const GradientTextField = () => {
  return (
    <div className="bg-custom-gradient flex p-[1px] rounded-full">
      <div className="flex gap-2 p-2 bg-white rounded-full">
        <input
          type="text"
          placeholder="Enter your instagram url"
          className="bg-white rounded-l-full flex placeholder:text-placeholderGray placeholder:font-medium placeholder:leading-6 p-2 focus:outline-none"
        />
        <GradientFillButton rounded text="Find winner" />
      </div>
    </div>
  );
};
