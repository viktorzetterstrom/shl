import Link from "next/link";
import { styles } from "../styles";

export function Header() {
  return (
    <>
      <div className="header">
        <div>
          <h1 className="header-heading">
            SHL&nbsp;.&nbsp;ZETTERSTROM&nbsp;.&nbsp;DEV
          </h1>
          <p className="usp-text">
            Swedish&nbsp;Hockey&nbsp;League&nbsp;Statistics
          </p>
        </div>
        <div>
          <Link href="/">
            <a className="header-link">Standings</a>
          </Link>
          <Link href="/about">
            <a className="header-link">Games</a>
          </Link>
          <Link href="/about">
            <a className="header-link">Goalies</a>
          </Link>
          <Link href="/about">
            <a className="header-link">Skaters</a>
          </Link>
          <Link href="/about">
            <a className="header-link">Winstreaks</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: ${styles.attributes.spacing()};
        }
        .header-link + .header-link {
          margin-left: ${styles.attributes.spacing(2)};
        }
        .header-link {
          text-decoration: none;
          color: ${styles.colors.text};
        }
        .header-link:hover {
          text-decoration: underline;
        }
        .header-heading {
          margin: 0;
          padding: 0;
        }
        .usp-text {
          font-size: ${styles.attributes.fontSizeSmall};
          padding: 0;
          margin: 0;
          margin-top: 0;
          padding-bottom: ${styles.attributes.spacing()};
        }
      `}</style>
    </>
  );
}
