"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

interface Props {
  name: "dark" | "light";
}
const ThemeButton = ({ name }: Props) => {
  const { setTheme } = useTheme();
  const handleChangeTheme = () => {
    setTheme(name);
  };
  return (
    <Button variant={"link"} onClick={handleChangeTheme} asChild>
      <div
        className={`w-72 h-40  rounded-md  border-2 border-primary  shadow-lg ${
          name === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <p
          className={`text-lg font-bold italic  ${
            name === "dark" ? "text-white" : "text-black"
          }`}
        >
          {name}
        </p>
      </div>
    </Button>
  );
};

export default ThemeButton;
