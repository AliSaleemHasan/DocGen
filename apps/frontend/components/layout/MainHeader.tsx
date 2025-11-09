import React from "react";

interface Props {
  title?: string;
}
const MainHeader = (props: Props) => {
  return (
    <section className="w-full h-fit min-h-32 my-3 flex items-center box-border">
      {props.title && (
        <h1 className="pt-10 text-lg md:text-2xl text-center md:text-left font-semibold tracking-wide">
          {props.title}
        </h1>
      )}
    </section>
  );
};

export default MainHeader;
