import { useEffect } from "react";

export default function FunctionDisplay() {

  useEffect(() => {
    console.log("Display se montó al DOM")
  }, []);

  useEffect(() => () => {
    console.log("Display se desmontará del DOM")
  }, []);

  return (
    <div style={{ backgroundColor: "darkslategrey"}}>
      <h2>Display</h2>
    </div>
  );
}