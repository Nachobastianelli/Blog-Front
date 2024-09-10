import React, { useState } from "react";

const EmojiPicker = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const emojis = [
    "🔥",
    "⚡️",
    "✨",
    "❤️",
    "🏆",
    "🎉",
    "💰",
    "💵",
    "💸",
    "⏱",
    "⏰",
    "🚚",
    "💪",
    "🔑",
    "🗝",
    "🥇",
    "👀",
    "🎯",
    "💣",
    "🎁",
    "🎈",
    "⏳",
    "👏",
    "📣",
    "⭐️",
    "💡",
    "🔦",
    "🛒",
    "🛍",
    "🎟",
    "🥳",
    "😍",
    "🥰",
    "😎",
    "😂",
    "🤗",
  ];

  const displayValue = (v) => {
    if (v) {
      return <span className="inline-block w-5 h-5">{v}</span>;
    } else {
      return <span className="w-full text-center m-auto">😀</span>;
    }
  };

  const setValue = (e) => {
    onChange(e);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="p-2 w-10 text-center my-auto mx-auto h-10 flex items-center justify-center bg-white border border-gray-300 rounded-md"
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center justify-center">
              {displayValue(value)}
            </div>
          </button>
        </span>
      </div>

      {open && (
        <div className="origin-top-right absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div className="px-2 py-3 grid grid-cols-12 gap-2">
              {emojis.map((e, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setValue(e);
                  }}
                  title={`Select ${e}`}
                  className="col-span-2 block m-auto text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                >
                  <div>{displayValue(e)}</div>
                </a>
              ))}
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setValue("");
                }}
                className="col-span-12 text-xs text-center text-blue-500 hover:underline"
              >
                Clear
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
