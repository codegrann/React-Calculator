import React from "react";

function Button({ label }) {
  return (
    <button className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      {label}
    </button>
  );
}

export default Button;
