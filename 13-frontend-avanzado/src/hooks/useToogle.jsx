import { useState } from "react";

export default function useToogle(initialState = false) {
  const [value, setValue] = useState(initialState);
  const toogle = () => setValue(!value);

  return [value, toogle];
}
