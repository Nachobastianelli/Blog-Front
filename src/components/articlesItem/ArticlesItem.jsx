import React from "react";
import { useNavigate } from "react-router-dom";

const ArticlesItem = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/home/${props.id}`, {
      state: {
        ...props,
      },
    });
  };

  const {
    id,
    title,
    description,
    text,
    image,
    createdDate,
    etiquetas,
    comentarios,
  } = props;

  return (
    <div
      className="w-fit   max-h-[450px] flex flex-col max-w-[400px] border-2 border-gray-700 hover:bg-opacity-15 bg-[#222] bg-opacity-5 cursor-pointer rounded-md"
      onClick={clickHandler}
    >
      <div className="relative max-h-[200px] overflow-hidden">
        <img
          src={image}
          alt="Foto"
          className="w-full h-full object-none object-center rounded-t-[0.270rem] border-b-2 border-gray-700  "
        />
      </div>
      <div className="">
        <div className="m-4 flex flex-col h-[200px] ">
          <div className="text-lg ">
            <h3 className="font-medium">{title}</h3>
            <p className="text-base my-6 line-clamp-2">{description}</p>
          </div>
          <div>
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
          <div className=" flex items-end h-52">
            <p className="text-gray-600 font-bold text-lg  ">{createdDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesItem;
