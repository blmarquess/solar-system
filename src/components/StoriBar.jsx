import React from "react";
import Stories from "./Stories";
import data from "../data/planets";

export default class StoriBar extends React.Component {
  render() {
    return (
      <div className="flex flex-grow space-x-3 px-3">
        {data.map((item) => <Stories srcImage={item.image} name={item.name} />)}
      </div>
    )
  }
}
