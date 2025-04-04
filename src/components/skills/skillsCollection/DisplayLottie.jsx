
import Lottie from "react-lottie";

const GreetingLottie = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData, // Use the JSON data passed as a prop
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="cursor-pointer" onClick={() => {}}>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default GreetingLottie;
