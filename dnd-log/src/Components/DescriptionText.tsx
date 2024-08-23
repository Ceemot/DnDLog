import * as React from "react";
import * as data from "../Content/Descriptions.json";

export default function DescriptionText(props) {
  var text = props.description;

  const descriptionRecords = JSON.parse(JSON.stringify(data));
  descriptionRecords.descriptions.forEach((element) => {
    text = text.replace(element.name, `<b>${element.name}</b>`);
  });
  console.log(descriptionRecords);

  return <span>{text}</span>;
}
