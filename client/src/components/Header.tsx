import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export function Header() {
  const router = useRouter();

  const setHeaderLinkClassName = (route: string): string =>
    router.pathname === route ? "header-link active" : "header-link";

  return (
    <>
      <div className="header">
        <div className="heading-container">
          <h1 className="heading">
            SHL&nbsp;.&nbsp;ZETTERSTROM&nbsp;.&nbsp;DEV
          </h1>
          <p className="usp-text">
            Swedish&nbsp;Hockey&nbsp;League&nbsp;Statistics
          </p>
        </div>
        <div className="header-links">
          <Link href="/standings">
            <a className={setHeaderLinkClassName("/standings")}>Standings</a>
          </Link>
          <Link href="/games">
            <a className={setHeaderLinkClassName("/games")}>Games</a>
          </Link>
          <Link href="/goalies">
            <a className={setHeaderLinkClassName("/goalies")}>Goalies</a>
          </Link>
          <Link href="/skaters">
            <a className={setHeaderLinkClassName("/skaters")}>Skaters</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .header {
          padding-bottom: 20px;
          border-bottom: 1px solid black;
        }
        .heading-container {
          text-align: center;
        }
        .heading {
          margin: 0;
          padding: 0;
        }
        .header-link + .header-link {
          margin-left: 5px;
        }
        .header-links {
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          padding-top: 20px;
          max-width: 600px;
        }
        .header-link {
          margin-bottom: 5px;
          text-decoration: none;
        }
        .header-link.active,
        .header-link:hover {
          text-decoration: underline;
        }
        .usp-text {
          padding: 0;
          margin: 0;
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
