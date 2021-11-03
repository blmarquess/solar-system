import React from "react";
import Stories from "./Stories";
import data from "../data/planets";

export default class StoriBar extends React.Component {
  render() {
    return (
      <div className="flex flex-grow space-x-3 m-1">
        {data.map((item) => <Stories key={item.name} srcImage={item.image} name={item.name} />)}
      </div>
    )
  }
}
