import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Border from "../border/Border";
import NewComentario from "../newComentario/NewComentario";
import { IconCirclePlus } from "@tabler/icons-react";
import { IconPencil } from "@tabler/icons-react";
import { IconTrashX } from "@tabler/icons-react";

const OnArticle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    id,
    title,
    description,
    text,
    image,
    createdDate,
    etiquetas,
    comentarios,
  } = location.state || {};

  const backHome = () => {
    navigate("/home");
  };

  return (
    <div className="bg-fondoLibreta max-h-fit min-h-screen">
      <img
        src={image}
        className=" bg-[#222] min-h-[205px] max-h-[205px] min-w-full drop-shadow-2xl object-cover"
      />
      <div className="absolute top-[160px] w-0 left-0 ml-auto sm:ml-[15%] lg:ml-[26.7%]">
        <iframe
          src="https://giphy.com/embed/xW0rNqzge2hhFnOU12"
          width="250px"
          height="200px"
          className=" absolute pointer-events-none"
        ></iframe>
      </div>
      <button
        className="text-5xl absolute top-[175px] ml-[34.7%] hover:scale-105 ease-in-out transition-all duration-200 hover:cursor-pointer group"
        onClick={backHome}
      >
        📜
        <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-black text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Home
        </span>
      </button>

      <div className="max-w-[30%] m-auto mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl flex  ubuntu-bold-italic text-[#222] ">
              {title}
            </h1>
          </div>
          <div className="flex justify-end items-center gap-1">
            <button className="flex justify-center items-center bg-[#222] bg-opacity-50 rounded-sm border-black border py-1 w-[100px]">
              <div>
                <IconPencil stroke={1} />
              </div>
              <div>Editar</div>
            </button>
            <button className="flex justify-center items-center bg-[#222] bg-opacity-50 rounded-sm border-black border py-1 w-[100px]">
              <div>
                <IconTrashX stroke={1} />
              </div>
              <div>Eliminar</div>
            </button>
          </div>
        </div>

        <div className="mt-5">
          {etiquetas.map((etiqueta) => (
            <span
              key={etiqueta.id}
              className="inline-block bg-opacity-25 text-white px-2 py-1 rounded mr-2 "
              style={{ backgroundColor: `${etiqueta.color}9A` }}
            >
              {etiqueta.emoji} {etiqueta.title}
            </span>
          ))}
        </div>

        <h2 className="text-2xl flex mt-5 italic">{description}</h2>

        <p className=" text-lg mt-8 italic">{text}</p>

        <p className="font-normal text-xl mt-8 italic">
          Fecha de publicación:{"  "}
          <span className="font-semibold not-italic text-gray-700">
            {createdDate}
          </span>
        </p>

        <p className="text-xl mt-8">Comentarios:</p>
        <Border />
        <div className="mx-auto mt-3">
          <button
            className="flex gap-2 justify-center items-center ml-5 py-2 px-3 bg-[#222] border-2 border-black bg-opacity-60 rounded-md w-fit hover:bg-opacity-70"
            onClick={() => setIsVisible(true)}
          >
            <div>
              <IconCirclePlus stroke={2} />
            </div>
            <div className="font-semibold">Comentar</div>
          </button>
        </div>

        {isVisible ? (
          <NewComentario isVisible={isVisible} setIsVisible={setIsVisible} />
        ) : (
          ""
        )}
        {comentarios.length > 0 ? (
          comentarios.map((comentario) => (
            <div key={comentario.id} className="p-2  flex flex-col ml-3 my-2 ">
              <p className="text-sm text-gray-700">{comentario.name}</p>
              <p className="text-xs text-gray-500 ml-2">
                {comentario.description}
              </p>
              <p className="text-sm text-gray-700 ml-2">{comentario.date}</p>
            </div>
          ))
        ) : (
          <p className="flex justify-center mt-10">
            ¡Sé el primero en comentar!
          </p>
        )}
        <div className="h-2"></div>
      </div>
    </div>
  );
};

export default OnArticle;
