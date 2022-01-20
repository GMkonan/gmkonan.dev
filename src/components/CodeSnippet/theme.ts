import { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
    plain: {
      color: "#000",
      backgroundColor: "var(--off-white)",
      fontFamily: "Ubuntu Mono",
      //fontSize: "18px", //this will be controlled inside "pre" for easier query (responsivness) control
    },
    styles: [
      {
        types: ["changed"],
        style: {
          color: "rgb(162, 191, 252)",
          fontStyle: "italic",
        },
      },
      {
        types: ["deleted"],
        style: {
          color: "rgba(239, 83, 80, 0.56)",
          fontStyle: "italic",
        },
      },
      {
        //example: attributes, like "className"
        types: ["inserted", "attr-name"],
        style: {
          color: "var(--blue400)",
        },
      },
      {
        types: ["inserted", "attr-value"],
        style: {
          color: "var(--primary-50)",
        },
      },
      {
        types: ["comment"],
        style: {
          color: "var(--gray)",
          fontStyle: "italic",
        },
      },
      {
        types: ["string", "url"],
        style: {
          color: "var(--gray)",
        },
      },
      {
        types: ["variable"],
        style: {
          color: "rgb(214, 222, 235)",
        },
      },
      {
        types: ["number"],
        style: {
          color: "rgb(247, 140, 108)",
        },
      },
      {
        types: ["builtin", "char", "constant", "function"],
        style: {
          color: "rgb(130, 170, 255)",
        },
      },
      {
        // This was manually added after the auto-generation
        // so that punctuations are not italicised
        types: ["punctuation"],
        style: {
          color: "var(--red-500)",
        },
      },
      {
        types: ["selector", "doctype"],
        style: {
          color: "rgb(199, 146, 234)",
          fontStyle: "italic",
        },
      },
    //   {
    //     types: ["class-name"],
    //     style: {
    //       color: "var(--primary)",
    //     },
    //   },
      {
        types: ["tag", "operator", "keyword"],
        style: {
          color: "var(--primary)",
        },
      },
      {
        types: ["boolean"],
        style: {
          color: "rgb(255, 88, 116)",
        },
      },
      {
        types: ["property"],
        style: {
          color: "var(--blue400)",
        },
      },
    //   {
    //     types: ["namespace"],
    //     style: {
    //       color: "var(--red)",
    //     },
    //   },
    ],
  };
  
  export default theme;