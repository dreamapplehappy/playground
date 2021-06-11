import React from "react";
import ttStyles from "./TextTransform.module.scss";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "16px",
  },
  paperWithPadding: {
    padding: "16px",
    marginTop: "16px",
  },
}));

const paragraphText =
  "The text-transform CSS property specifies how to capitalize an\n" +
  "          element's text. It can be used to make text appear in all-uppercase or\n" +
  "          all-lowercase, or with each word capitalized. It also can help improve\n" +
  "          legibility for ruby.";

const items = [
  {
    paragraph: `${ttStyles.paragraph} ${ttStyles["tt-none"]}`,
    paragraphText,
    textTransform: "none",
  },
  {
    paragraph: `${ttStyles.paragraph} ${ttStyles["tt-capitalize"]}`,
    paragraphText,
    chipColor: "primary",
    textTransform: "capitalize",
  },
  {
    paragraph: `${ttStyles.paragraph} ${ttStyles["tt-lowercase"]}`,
    paragraphText,
    chipColor: "primary",
    textTransform: "lowercase",
  },
  {
    paragraph: `${ttStyles.paragraph} ${ttStyles["tt-uppercase"]}`,
    paragraphText,
    chipColor: "primary",
    textTransform: "uppercase",
  },
  {
    paragraph: `${ttStyles.paragraph} ${ttStyles["tt-none"]}`,
    paragraphText,
    textTransform: "none",
  },
  {
    paragraph: `${ttStyles.paragraph} ${ttStyles["tt-full-width"]}`,
    paragraphText,
    chipColor: "secondary",
    textTransform: "full-width",
  },
  {
    paragraph: `${ttStyles.paragraph} ${ttStyles["tt-none"]}`,
    paragraphText,
    textTransform: "none",
  },
  {
    paragraph: `${ttStyles.paragraph} ${ttStyles["tt-full-size-kana"]}`,
    paragraphText,
    chipColor: "secondary",
    textTransform: "full-size-kana",
  },
];

function TextTransform() {
  const classes = useStyles();
  return (
    <div className="">
      <Paper className={classes.paper}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className={ttStyles.section}>
              <div className={ttStyles["chip-wrapper"]}>
                <Chip
                  label={`text-transform: ${item.textTransform}`}
                  color={item.chipColor}
                />
              </div>
              <p className={item.paragraph}>{item.paragraphText}</p>
            </div>
            {index !== items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Paper>
      <Paper className={classes.paperWithPadding}>00</Paper>
    </div>
  );
}

export default TextTransform;
