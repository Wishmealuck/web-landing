interface GradientTextProps {
  text: string;
  size?: string; // Tailwind text size classes like 'text-sm', 'text-lg'
  weight?: string; // Tailwind font weight classes like 'font-bold', 'font-medium'
  textAlign?: string; // Tailwind text alignment classes like 'text-left', 'text-center'
  className?: string;
}

export const GradientText = ({
  text,
  size = "text-xs",
  weight = "font-normal",
  textAlign = "text-left",
  className = "",
}: GradientTextProps) => {
  return (
    <p
      className={`bg-gradient-to-r from-[#FF5655] to-[#D361FF] bg-clip-text text-transparent ${className} ${size} ${weight} ${textAlign}`}
    >
      {text}
    </p>
  );
};
