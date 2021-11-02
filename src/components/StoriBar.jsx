import React from "react";
import Stories from "./Stories";
import data from "../data/planets";

export default () => (
  <div className="flex flex-grow px-4 py-2 m-l-t-2 space-x-6 overflow-x-auto">
      { data.map((item) => <Stories srcImage={item.image} name={item.name} />) }
  </div>
)
