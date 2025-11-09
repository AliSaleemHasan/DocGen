import React from "react";

interface Props {
  title?: string;
}
const MainHeader = (props: Props) => {
  return (
    <section className="w-full h-20 md:h-32 flex items-center box-border">
      {props.title && (
        <h1 className="pt-10 text-2xl font-semibold tracking-wide">
          {props.title}
        </h1>
      )}
    </section>
  );
};

export default MainHeader;
