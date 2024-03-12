export default function Navbar() {
  return (
    <nav className="my-3 max-w-3xl mx-auto p-4 px-10 rounded-full bg-slate-900 shadow-md border border-blue-800">
      <ul className="flex flex-row justify-center gap-5">
        <li className="text-decoration-none ">Home</li>
        <li className="text-decoration-none ">Our Courses</li>
        <li className="text-decoration-none ">Contact Us</li>
      </ul>
    </nav>
  );
}
