import arrowright from "../assets/arrow-right-svgrepo-com.svg";
import Place from "../assets/pexels-dlkr-9994326.jpg";
type videosProps = {
	image: string;
};
const videos: videosProps[] = [
	{
		image: Place,
	},
	{
		image: Place,
	},
];
const Footer = () => {
	return (
		<div className="FOOTER h-screen w-screen flex justify-center items-center">
			<div className="w-[80%] flex flex-col gap-10">
				<div className="flex flex-col gap-5">
					<h1 className=" uppercase text-6xl text-white font-bold">
						Travel And <br></br> Inspire Your <br></br> Life
					</h1>
					<div className="border-2 rounded-[50%] w-fit">
						<img className="relative w-8 h-8 cursor-pointer" src={arrowright} />
					</div>
				</div>
				<div className="flex gap-5">
					<div className="pt-5 ">
						<p className="text-white"> 
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Maiores minima velit blanditiis nemo quisquam
							iusto quas quidem harum, commodi aliquid, delectus
							molestias.
						</p>
					</div>
					<div className="flex gap-5">
						{videos.map((curr, idx) => (
							<div
								className="relative w-[300px] aspect-video"
								key={idx}
							>
								<img
									className="w-full h-full object-cover"
									src={curr.image}
								/>
								<div className="w-full h-full absolute top-0 flex items-center justify-center">
									<div className="border-2 rounded-[50%]">
										<img
											className="relative w-8 h-8 cursor-pointer "
											src={arrowright}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
