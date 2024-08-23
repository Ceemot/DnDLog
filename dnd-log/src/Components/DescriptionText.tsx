import * as React from "react";
import * as data from "../Content/Descriptions.json";

export default function DescriptionText(props) {
  var text = props.description;

  const descriptionRecords = JSON.parse(JSON.stringify(data));
  descriptionRecords.descriptions.forEach((element) => {
    text = text.replace(element.name, `<Tooltip title="${element.fullText}"><span style="color:orange;">${element.name}</span></Tooltip>`);
  });
  console.log(descriptionRecords);

  return <div dangerouslySetInnerHTML={{__html:text}}/>
}
