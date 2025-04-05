import React, { useState, useContext } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <>
      <label className="relative inline-block w-16 h-9">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            styleContext.changeTheme();
            setChecked(!isChecked);
          }}
          className="sr-only" // hides checkbox visually but remains accessible
        />
        <span
          className={`absolute inset-0 rounded-full transition bg-gray-300 ${
            isChecked ? "bg-blue-600" : "bg-yellow-400"
          }`}
        ></span>
        <span
          className={`absolute left-1 top-1 h-7 w-7 rounded-full flex items-center justify-center text-xl transition-transform ${
            isChecked ? "translate-x-7" : "translate-x-0"
          }`}
        >
          {isChecked ? emoji("🌜") : emoji("☀️")}
        </span>
      </label>

      {/* <label // border-4 border-yellow-400
      className="switch "
    >
      <input
        type="checkbox"
        apperance="none"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label> */}
    </>
  );
};
export default ToggleSwitch;
