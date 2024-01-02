import { LineWave } from "react-loader-spinner";
import { Html } from "@react-three/drei";

export function Spinner() {
  return (
    <Html prepend center>
      <LineWave
        visible={true}
        height="100"
        width="100"
        firstLineColor="#ad7753"
        middleLineColor="#ffd700"
        lastLineColor="#ff6b6b"
        ariaLabel="line-wave-loading"
        wrapperStyle={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
        wrapperClass=""
      />
    </Html>
  );
}
