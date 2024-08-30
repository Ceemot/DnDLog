import * as React from "react";
import * as data from "../Content/Descriptions.json";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import Typography from "@mui/material/Typography/Typography";

type Descriptions = Record<string, string>;

export default function DescriptionText(props) {
  var text = props.description.split(" ");
  let listOfWords: (string | React.ReactNode)[] = [];

  const descriptionRecords: Descriptions = JSON.parse(JSON.stringify(data));
  for (let word of text) {
    if (word in data) {
      listOfWords.push(
        <Tooltip title={data[word]}>
          <Typography display="inline" sx={{ textDecoration: "underline" }}>
            {word}
          </Typography>
        </Tooltip>
      );
    } else {
      listOfWords.push(" " + word + " ");
    }
  }

  return <Typography align="center">{listOfWords}</Typography>;
}
