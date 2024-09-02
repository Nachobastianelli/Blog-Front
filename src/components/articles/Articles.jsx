import React from "react";
import mockArticle from "../../mocks/mockArticle";
import { useState } from "react";
import ArticlesItem from "../articlesItem/ArticlesItem";
import AddButton from "../addButton/AddButton";

const Articles = () => {
  const [articles, setArticles] = useState(mockArticle);

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2  gap-4 p-4">
      {articles.map((item) => (
        <ArticlesItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.imagePath}
          description={item.description}
          text={item.text}
          createdDate={item.createdTime}
          etiquetas={item.etiquetas}
          comentarios={item.comentarios}
        />
      ))}

      <AddButton />
    </div>
  );
};

export default Articles;
