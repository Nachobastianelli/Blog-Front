import React from "react";

const NewComentario = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      ></div>

      <div className="relative min-w-[400px] max-w-[400px] min-h-[500px] max-h-[500px] border-2 border-black bg-gray-100 drop-shadow-2xl z-10">
        <div className="absolute flex flex-col w-full space-y-5 py-8">
          {Array(23)
            .fill(null)
            .map((_, index) => (
              <hr key={index} className="border-zinc-400 mx-2" />
            ))}
        </div>
        <input
          type="text"
          className="absolute top-2 text-[18px] font-bold tracking-wider inset-x-0 start-3 bg-transparent w-[375px]"
          placeholder="Titulo..."
        ></input>
        <textarea
          name=""
          id=""
          maxLength={1000}
          className="absolute top-[48px] left-2 w-[380px] h-[400px] leading-[20.8px] bg-transparent resize-none p-2"
          placeholder="Deja tu comentario aquí ;)"
        ></textarea>
        <button className="absolute bottom-0 right-2 p-1 font-mono text-xs font-bold">
          Enviar
        </button>
        <button
          className="absolute bottom-0 left-2 p-1 font-mono text-xs font-bold"
          onClick={() => setIsVisible(false)}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default NewComentario;
