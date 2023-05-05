import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span>
        <p className="font-extrabold mt-10 text-white">
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
