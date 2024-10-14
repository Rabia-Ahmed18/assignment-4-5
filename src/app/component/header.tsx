import Link from "next/link";
export default function Header() {
  return (
    <div className="header">
      <ul className="header-btn">
      <h3 className="logo">Ready Set Travel</h3>

        <Link href={"/"}>
          <button className="btn">
        
            <li>Home</li>
          </button>
        </Link>
        <Link href={"/"}>
          <button className="btn">
            <li>About</li>
          </button>
        </Link>
        <Link href={"/"}>
          <button className="btn">
            
            <li>Eat</li>
          </button>
        </Link>
        <Link href={"/"}>
          <button className="btn">
            
            <li>Relax</li>
          </button>
        </Link>
        <Link href={"/"}>
          <button className="btn">
            <li>Travel</li>
          </button>
        </Link>
      </ul>
    </div>
  );
}
