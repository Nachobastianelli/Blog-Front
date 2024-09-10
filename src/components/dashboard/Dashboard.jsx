import React from "react";
import Articles from "../articles/Articles";
import ProfileCard from "../profileCard/ProfileCard";
import FiltredButtons from "../filtredButtons/FiltredButtons";
import { IconNews } from "@tabler/icons-react";
import { IconTag } from "@tabler/icons-react";
import NewComentario from "../newComentario/NewComentario";
import { useNavigate } from "react-router-dom";
import LabelCreator from "../labelCreator/LabelCreator";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-fondoLibreta min-h-fit">
      <div className=" bg-[#222] min-h-[200px] max-h-[200px] drop-shadow-2xl">
        <p className="text-5xl absolute top-[175px] ml-[35%] ">🤗</p>
      </div>

      <div className="max-w-[80%] m-auto mt-10">
        <h1 className="text-5xl flex justify-center ubuntu-bold-italic ">
          Bienvenidos a mi blog!
        </h1>
        <div className="bg-red-400 bg-opacity-30 w-fit max-w-[820px] mx-auto flex py-4 my-5 rounded-lg border border-gray-400">
          <div className="mx-4 mt-5 md:mt-3 text-lg sm:text-2xl ">
            <p>🍄</p>
          </div>

          <div className="text-lg sm:text-2xl line-clamp-4 hover:line-clamp-none hover:transition-all hover:ease-in-out hover:duration-500">
            <p className="ubuntu-thin">
              <span className="font-semibold ubuntu-regular">
                En este espacio comparto mis pensamientos, vivencias y puntos de
                vista sobre diversos temas.
              </span>{" "}
              Espero que el contenido te resulte interesante e ilustrativo. ¡Que
              disfrutes la lectura!
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <FiltredButtons
            logo={<IconNews stroke={2} />}
            name={"Todos los artculos"}
          />
          <FiltredButtons
            logo={<IconTag stroke={2} />}
            name={"Por etiquetas"}
          />
        </div>

        <hr />
        <section className="mx-auto flex justify-center ">
          <Articles />
        </section>
        <div className="flex justify-center">
          <h1 className="text-center italic text-2xl mt-10 bg-indigo-400 rounded-sm  bg-opacity-30  w-[80px]">
            Autor:
          </h1>
        </div>

        <ProfileCard />

        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Dashboard;
