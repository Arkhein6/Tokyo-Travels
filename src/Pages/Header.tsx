import { NavBar, BottomNav } from "../Components";
const Header = () => {
	return (
		<div className="flex justify-center content-center w-screen h-screen bg-gray-500">
			<div className="flex flex-col w-[80%] h-full bg-yellow-200">
				<header>
					<NavBar />
				</header>
				<div className="flex grow bg-green-300 pl-5 items-center">
					<h1 className=" text-white font-bold text-8xl ">VISIT <br></br> TOKYO</h1>
				</div>
				<BottomNav />
				
			</div>
		</div>
	);
};

export default Header;
