import Link from "next/link";
import Clock from "./Clock";

function Page({ linkTo, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Clock />
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
}

export default Page;
