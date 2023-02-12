import Link from 'next/link'

export default function Button() {
  return (
    <div className="btnBuy">
      <Link href='../services' >
        <button className="btnService">
          Prices
        </button>
      </Link>
    </div>
  );
}
