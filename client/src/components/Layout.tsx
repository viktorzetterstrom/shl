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
          padding-top: 10px;
          background-color: #cecece;
        }
        @media (min-width: 900px) {
          .app-container {
            padding-top: 20px;
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
            font-size: 24px;
            font-family: Raleway;
            color: #151515;
            font-weight: 400;
          }

          p,
          a,
          button,
          input {
            font-size: 16px;
            font-family: "Source Code Pro";
            color: #151515;
          }
        `}
      </style>
    </>
  );
}
