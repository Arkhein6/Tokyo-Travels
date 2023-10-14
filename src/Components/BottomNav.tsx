import { Link } from "@nextui-org/react";
import { useState, useEffect } from "react";
type bottomNavItemsProps = {
	description: string;
	link: string;
};
import arrowright from "../assets/arrow-right-svgrepo-com.svg";

const bottomNavItems: bottomNavItemsProps[] = [
	{
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut itaque dolore cumque quasi beatea",
		link: "Show More",
	},
	{
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut itaque dolore cumque quasi beatea",
		link: "Show More",
	},
	{
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut itaque dolore cumque quasi beatea",
		link: "Show More",
	},
];

const BottomNav = () => {
	const [activeBottomItem, setActiveButtonItem] = useState<number>(0);

	useEffect(() => {
		const Timeout = setTimeout(() => {
			setActiveButtonItem((curr) => (curr === 2 ? 0 : curr + 1));
		}, 3000);
		return () => {
			clearTimeout(Timeout);
		};
	}, [activeBottomItem]);
	console.log(activeBottomItem);
	return (
		<div className=" flex flex-row justify-between pb-5">
			{bottomNavItems.map((current, index) => {
				const bottomStyle: string =
					activeBottomItem === index
						? "border-b-red-500"
						: "border-b-gray-500";
				return (
					<div
						key={index}
						className={`border-b-2 ${bottomStyle} pb-5 flex flex-col gap-1`}
					>
						<p className="text-white ">{current.description}</p>
						<Link className="flex gap-5 text-white font-extrabold">
							{current.link}
							<img className=" w-6 h-6 " src={arrowright} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default BottomNav;
