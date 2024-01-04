import Logo from "../assets/Practice.svg";
import Lock from "../assets/Lock.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { Link } from "react-scroll";
import { useState } from "react";
import { items } from "../data/items";
export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="h-[75px] border-b-2  border-b-[#E7E9EB]">
			<div className="md:max-w-[1480px] max-w-[600px] m-auto w-full mb-1 h-full flex justify-between items-center">
				<img className="h-[25px]" src={Logo} alt="logo" />
				<div className="hidden md:flex items-center font-semibold">
					<ul className="flex">
						{items.map((item) => (
							<Link
								to={item.name}
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
								className="text-secondaryText hover:text-primary ml-5 p-2  ease-in transition-colors "
								activeClass="text-primary"
							>
								{item.name}
							</Link>
						))}
					</ul>
				</div>
				<div className="hidden md:flex gap-2">
					<button className="flex text-secondaryText font-semibold shadow-md px-10 py-3">
						<img src={Lock} /> Login
					</button>
					<button className="bg-primary overflow-hidden whitespace-nowrap text-ellipsis px-10 py-3  text-white font-semibold rounded-md">
						Sign up for Free
					</button>
				</div>
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen((o) => !o)}
						className="flex items-center justify-center bg-gray-100 p-1 hover:shadow-sm rounded-md"
					>
						<img className="w-10" src={`${isOpen ? Close : Menu}`} alt="menu" />
					</button>
				</div>
			</div>
			<div
				className={
					isOpen ? "absolute w-full md:hidden z-10 bg-white py-8" : "hidden"
				}
			>
				<ul className="text-center">
					{items.map(({ id, name }) => (
						<li
							className="text-lg font-semibold mt-2 py-3  hover:bg-gray-100 hover:text-secondaryText"
							key={id}
						>
							{name}
						</li>
					))}
				</ul>
				<div className="flex flex-col gap-y-4 mt-2">
					<button className="flex justify-center text-xl hover:text-secondaryText font-semibold shadow-md px-10 py-3 border border-gray-300">
						<img src={Lock} /> Login
					</button>
					<button className="bg-primary overflow-hidden whitespace-nowrap text-ellipsis px-10 py-3  text-white font-semibold">
						Sign up for Free
					</button>
				</div>
			</div>
		</div>
	);
}
