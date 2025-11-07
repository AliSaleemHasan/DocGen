import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeButton from "../ThemeButton";

const ThemeCard = () => {
  return (
    <Card className="  flex-1  ">
      <CardContent className="flex  gap-4 justify-between flex-wrap">
        <section className="flex items-center justify-center max-w-sm text-clip  ">
          <h2 className="max-w-32 text-clip leading-none font-semibold">
            DocGen Theme
          </h2>

          <h4 className="text-sm">
            Change Themes from Dark to Light and Vise Versa in one Click
          </h4>
        </section>

        <section className="flex items-center gap-10 flex-wrap">
          <ThemeButton name="light" />
          <ThemeButton name="dark" />
        </section>
      </CardContent>
    </Card>
  );
};

export default ThemeCard;
