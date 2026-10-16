import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between mb-5">
      <div className="flex gap-5">
        {/* <img src="#" alt="Logo Image Preview" /> */}
        <h1>Filipino Dishes</h1>
      </div>

      <div className="flex gap-5 ml-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dishes">Dish Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
