import { ReactNode } from "react";
import { Header } from "./Header";
import { Head } from "./Head";
import { styles } from "../styles";

type Props = { children: ReactNode };
export function Layout(props: Props) {
  return (
    <>
      <div className="app-container">
        <Head />
        <Header />
        <div>{props.children}</div>
      </div>
      <style jsx>{`
        .app-container {
          margin: 0 auto;
          max-width: 900px;
          width: 100%;
          padding: 20px;
          background-color: grey;
        }
        @media (min-width: 900px) {
          .app-container {
            margin-top: 20px;
          }
        }
      `}</style>

      <style jsx global>
        {`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            color: ${styles.colors.text};
            background-color: ${styles.colors.background};
            font-family: "Source Code Pro", monospace;
            font-size: ${styles.attributes.fontSize};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1 {
            font-size: ${styles.attributes.fontSizeBig};
            font-family: Raleway;
            font-weight: 400;
          }

          p,
          a,
          button,
          input {
            font-family: "Source Code Pro";
          }
        `}
      </style>
    </>
  );
}
