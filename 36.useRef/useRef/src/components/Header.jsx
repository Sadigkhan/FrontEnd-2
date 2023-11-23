import React, { useRef } from "react";

export default function Header({setQuery}) {
  const input = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(input.current.value);
  };
  return (
    <div className="w-full bg-[#929292] flex justify-between h-20 items-center px-4">
      <div className="text-[40px] font-bold">Logo</div>
      <div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input ref={input} type="text" className="h-10 outline-none p-4" />
          <button type="submit" className="bg-green-300 p-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
