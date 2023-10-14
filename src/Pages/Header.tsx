import { NavBar, BottomNav } from "../Components";

const Header = () => {
	return (
		<div className="flex justify-center content-center w-screen h-screen HEADER">
			<div className="flex flex-col w-[80%] h-full">
				<header>
					<NavBar />
				</header>
				<div className="flex grow pl-5 items-center">
					<h1 className=" text-white font-bold text-8xl ">VISIT <br></br> TOKYO</h1>
				</div>
				<BottomNav />
			</div>
		</div>
	);
};

export default Header;
