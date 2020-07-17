import Link from "next/link";

export function Header() {
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
            <a className="header-link">Standings</a>
          </Link>
          <Link href="/games">
            <a className="header-link">Games</a>
          </Link>
          <Link href="/goalies">
            <a className="header-link">Goalies</a>
          </Link>
          <Link href="/skaters">
            <a className="header-link">Skaters</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          padding-bottom: 20px;
        }
        .header-link + .header-link {
          margin-left: 20px;
        }
        .header-links {
          padding-top: 20px;
        }
        .header-link {
          margin-bottom: 5px;
          text-decoration: none;
        }
        .header-link:hover {
          text-decoration: underline;
        }
        .heading-container {
          margin-right: 10px;
        }
        .heading {
          font-size: 24px;
          margin: 0;
          padding: 0;
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
