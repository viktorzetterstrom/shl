import { ReactNode } from "react";
import { Header } from "./header";
import { Head } from "./head";

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
          padding: 20px 5px 5px;
          background-color: #cecece;
        }
        @media (min-width: 500px) {
          .app-container {
            padding: 20px;
          }
        }
        @media (min-width: 900px) {
          .app-container {
            border-radius: 5px;
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
            font-family: "Source Code Pro", monospace;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1 {
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
