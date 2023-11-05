import React from "react";

function ProjectTag({ tag, onClick, isSelected }) {
  const buttonStyle = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] hover:border-purple-500";
  return (
    <div>
      {" "}
      <button className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={()=>onClick(tag)}>
        {tag}
      </button>
    </div>
  );
}

export default ProjectTag;
