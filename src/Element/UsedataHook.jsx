import React, { useEffect, useState } from "react";

export default function UsedataHook() {
  let [loader, setloader] = useState(true);
  let [OutData, setOutData] = useState([]);
  useEffect(() => {
    let Promice = async () => {
      let res = await fetch("/Data.json");
      let datares = await res.json();
      setTimeout(() => {
        setOutData(datares);
        setloader(false);
      }, 1500);
    };
    Promice();
  }, []);
  return { loader, OutData };
}
