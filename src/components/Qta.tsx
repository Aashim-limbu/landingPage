import QTA from "../assets/QTA.png";
function Qta() {
	return (
		<div className="bg-[#e9f8f3] md:py-[223px] bg-opacity-[0.7] py-10 w-full">
			<div className="md:max-w-[1480px] max-w-[600px] m-auto grid lg:grid-cols-2 md:grid-cols-1 gap-x-4 items-center">
				<img className="max-w-[550px] m-auto" src={QTA} alt="qta" />
				<div className="my-5 flex flex-col gap-y-6">
					<p className="md:text-[40px] text-2xl font-semibold">
						Join <span className="text-primary">World's largest</span> learning
						platform today
					</p>
					<p className="text-secondaryText">
						Start learning by registering for free
					</p>
					<div>
						<button className="bg-primary overflow-hidden rounded-md whitespace-nowrap text-ellipsis px-5 py-2  text-white font-semibold">
							Sign up for Free
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Qta;
