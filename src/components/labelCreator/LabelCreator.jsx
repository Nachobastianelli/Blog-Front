import React, { useState } from "react";
import EmojiPickerr from "../emojiPicker/EmojiPickerr";
import ColorPicker from "../colorPicker/ColorPicker";

const LabelCreator = () => {
  const [color, setColor] = useState("#B187E0");
  const [title, setTitle] = useState("");
  const [labels, setLabels] = useState({});
  const [emoji, setEmoji] = useState("");

  const handleEmojiChange = (emoji) => {
    setEmoji(emoji);
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createLabel();
    }
  };

  const createLabel = () => {
    if (title.trim()) {
      setLabels({
        color: color,
        emoji: emoji,
        title,
      });
      const newEtiqueta = {
        //Fetch post a esto, con el id de la ruta que entra al articulo.
        color: color,
        emoji: emoji,
        title,
      };
      setTitle("");
    } else {
      alert("Debe ingresar un titulo a la etiqueta");
      return;
    }
  };

  return (
    <div className="py-4">
      <div className="mb-4">
        <label className="block text-lg ">Agrega una etiqueta:</label>
      </div>

      <div className="flex space-x-1">
        <EmojiPickerr value={emoji} onChange={handleEmojiChange} />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyPress}
          className=" p-1 border border-gray-300 rounded"
          placeholder="Titulo - Enter to send"
          maxLength={23}
        />
        <ColorPicker value={color} onChange={handleColorChange} />
      </div>

      <div className="mt-4">
        <label className="block text-lg font-bold">Etiquetas creadas:</label>
        <div className="mt-2">
          <span
            key={labels.id}
            className="inline-block text-white px-2 py-1 rounded mr-2"
            style={{ backgroundColor: `${labels.color}9A` }}
          >
            {labels.emoji} {labels.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LabelCreator;
