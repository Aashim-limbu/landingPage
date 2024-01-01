import One from "../assets/Frame1.png";
import Two from "../assets/Frame2.png";
import Three from "../assets/Frame3.png";
import Four from "../assets/Frame4.png";

function Companies() {
	return (
		<div className="bg-white w-full py-8 md:py-[50px] my-5">
			<div className="md:max-w-[1480px] m-auto max-w-[600px] flex flex-col gap-5 items-center ">
				<p className="text-secondaryText font-semibold text-xl md:text-[36px]">Trusted by over 25,000 teams around the world.</p>
				<p className="text-secondaryText text-md md:text-2xl">
					Leading companies use the same courses to help employees keep their
					skills fresh.
				</p>
				<div className="md:flex-row gap-y-6 flex flex-col md:gap-x-14">
					<img src={One} alt="company 1" />
					<img src={Two} alt="company 2" />
					<img src={Three} alt="company 3" />
					<img src={Four} alt="company 4" />
				</div>
			</div>
		</div>
	);
}

export default Companies;
