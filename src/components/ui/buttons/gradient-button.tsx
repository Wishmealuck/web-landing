import clsx from "clsx";

interface Props {
  text: string;
  onClick?: () => void;
  rounded?: boolean;
}

export const GradientFillButton = (props: Props) => {
  const { text, onClick, rounded = false } = props;
  return (
    <button
      type="submit"
      onClick={onClick}
      className={clsx(
        "flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-red-purple px-4 py-2 text-white",
        rounded ? "rounded-3xl" : ""
      )}
    >
      <p className="text-xs font-medium leading-6">{text}</p>
    </button>
  );
};
