export default function Navbar(){
    return(
        <nav className="my-3 max-w-5xl rounded-lg bg-slate-900 shadow-md border border-blue-800 text-center">
            <ul className="flex flex-row text-center">
                <li className="text-decoration-none">Home</li>
                <li className="text-decoration-none">Our Courses</li>
                <li className="text-decoration-none">Contact Us</li>
            </ul>
        </nav>
    );
}