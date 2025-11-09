import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiMethodNames, endpoint_colors, EndpointMethod } from "@/constants";
import AppInput from "../AppInput";
import { Expand, Search } from "lucide-react";
import Endpoint from "../Endpoint";

interface Props {
  endpoints: {
    method: keyof typeof EndpointMethod;
    url: string;
  }[];
}
const EndpointsCard = ({ endpoints }: Props) => {
  return (
    <Card className=" md:min-h-[70vh] md:max-h-[70vh]  flex-1 md:min-w-md">
      <CardHeader>
        <CardTitle className="flex flex-col gap-5">
          <section className="flex items-center justify-between">
            <h2 className="text-2xl ">Endpoints</h2>
            <Expand />
          </section>
          <div className="flex justify-evenly items-center">
            {apiMethodNames.map((endpoint, _) => (
              <p
                key={endpoint}
                className="p-2 px-4 text-sm rounded-lg "
                style={{
                  background:
                    endpoint_colors[endpoint as keyof typeof EndpointMethod],
                }}
              >
                {endpoint}
              </p>
            ))}
          </div>
        </CardTitle>
        <AppInput
          className={"bg-muted-foreground/20 h-14 my-3"}
          inputProps={{ placeholder: "search" }}
          Icon={<Search />}
        ></AppInput>
      </CardHeader>
      <CardContent className="scrollbar overflow-y-scroll overflow-x-hidden">
        {endpoints.map((endpoint, index) => (
          <Endpoint
            key={index}
            endpoint={{ url: endpoint.url, method: endpoint.method }}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default EndpointsCard;
