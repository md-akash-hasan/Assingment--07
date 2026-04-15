import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { UseContext } from "../Element/UseContext";

export default function Stats() {
  let { BtnCliData, setBtnCliData } = useContext(UseContext);
  let show = BtnCliData.length <= 0;
  let call = BtnCliData.filter((btn) => btn.value === "calls");
  let text = BtnCliData.filter((btn) => btn.value === "text");
  let video = BtnCliData.filter((btn) => btn.value === "video");

  const data = [
    { name: "Call", value: call.length, fill: "#0088FE" },
    { name: "Text", value: text.length, fill: "#00C49F" },
    { name: "Video", value: video.length, fill: "#FFBB28" },
  ];
  return (
    <div>
      {show ? (
        <h1 className="flex justify-center my-22 text-3xl text-center font-bold">
          No call text or video history is available
        </h1>
      ) : (
        <div className="flex justify-center h-90 my-10">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              // isAnimationActive={isAnimationActive}
            />
            <Legend />
            <Tooltip />
            {/* <RechartsDevtools /> */}
          </PieChart>
        </div>
      )}
    </div>
  );
}
