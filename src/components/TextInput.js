import React, { useContext } from "react";
import { BackgroundContext } from "./MainGenerator";

const TextInput = () => {
  const { setText } = useContext(BackgroundContext);

  return (
    <div className="w-full h-fit mb-3 pb-4 border-gray-500 border-b-4">
      <div className="text-xl font-bold mb-2">
        <p>Banner Text</p>
      </div>
      <div>
        <input
          type="text"
          className="w-full bg-gray-300 rounded-sm text-lg p-2"
          placeholder="How to..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextInput;
