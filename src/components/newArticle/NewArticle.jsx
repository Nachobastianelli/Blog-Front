import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LabelCreator from "../labelCreator/LabelCreator";

const NewArticle = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("#222");
  const [bgPosition, setBgPosition] = useState("center");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const isDragging = useRef(false);

  const backHome = () => {
    navigate("/home");
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const isFormValid = true;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(`url(${reader.result})`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const { clientX, clientY } = e;
      const xOffset =
        ((clientX - e.currentTarget.getBoundingClientRect().left) /
          e.currentTarget.clientWidth) *
        100;
      const yOffset =
        ((clientY - e.currentTarget.getBoundingClientRect().top) /
          e.currentTarget.clientHeight) *
        100;
      setBgPosition(`${xOffset}% ${yOffset}%`);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="bg-fondoLibreta max-h-fit min-h-screen">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div
        className="bg-[#222] min-h-[205px] max-h-[205px] min-w-fulldrop-shadow-2xl m-auto cursor-grab active:cursor-grabbing"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: bgPosition,
          pointerEvents: "all",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="md:flex">
          <div className="w-full p-3">
            <div className="relative border-dotted h-48 rounded-lg flex justify-center items-center">
              <div className="absolute">
                <div className="flex flex-col items-center">
                  <i className="fa fa-folder-open fa-4x text-gray-700"></i>
                  <span className="block text-gray-400 font-normal text-center mx-auto justify-center mr-3">
                    Attach your files here
                  </span>
                </div>
              </div>
              <input
                type="file"
                className="h-[200px] w-[200px] opacity-0 m-auto object-contain border-2 border-dotted border-black"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className="text-5xl absolute top-[175px] ml-[34.7%] hover:scale-105 ease-in-out transition-all duration-200 hover:cursor-pointer group"
        onClick={backHome}
      >
        📝
        <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-black text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Home
        </span>
      </button>
      <div className="sm:max-w-[30%] m-auto mt-10">
        <div>
          <input
            className="text-5xl flex ubuntu-bold-italic text-[#222] bg-transparent border-2 border-black rounded-md w-full"
            maxLength={30}
            placeholder="Ingresa titulo"
          />
        </div>

        <div className="mt-5">
          <LabelCreator />
        </div>

        <textarea
          className="text-2xl flex mt-5 italic bg-transparent w-full max-h-[100px] h-[100px] border-2 border-black rounded-md min-h-[40px]"
          placeholder="Ingresa descripcion"
          maxLength={120}
        />

        <textarea
          className="text-lg mt-8 italic bg-transparent max-h-[500px] w-full h-[500px] border-2 border-black rounded-md min-h-[200px]"
          maxLength={2000}
          placeholder="Ingresa texto"
        />

        <div className="flex justify-end my-4">
          <button
            className="py-2 px-4 bg-indigo-500 text-white font-medium rounded-lg flex justify-center items-center hover:bg-indigo-600 active:translate-y-1 ease-in-out duration-150 transition-all"
            onClick={formSubmit}
          >
            Agregar
          </button>
        </div>

        <div className="h-2"></div>
      </div>
    </div>
  );
};

export default NewArticle;
