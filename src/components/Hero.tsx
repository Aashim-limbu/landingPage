import HeroImg from "../assets/Hero.png";
import Search from "../assets/MagnifyingGlass.svg";
function Hero() {
	return (
		<div className="w-full bg-white">
			<div className="max-w-[1480px] m-auto grid md:grid-cols-2 py-20">
				<section className="max-w-[700px] flex flex-col gap-2 justify-start py-2">
					<p className="text-2xl font-semibold text-[#20B486]">
						START TO SUCCESS
					</p>
					<p className="md:text-6xl text-4xl my-2 font-semibold">
						Access To <span>5000+</span> Courses from <span>300</span>{" "}
						Instructors & Institutions
					</p>
					<p className="text-secondaryText my-5 text-lg">
						Various versions have evolved over the years, sometimes by accident,
					</p>
					<form className="shadow-lg flex justify-between rounded-md p-5">
						<input
							className="text-secondaryText"
							placeholder="What do want to learn?"
							type="text"
						/>
						<button>
							<img src={Search} />
						</button>
					</form>
				</section>
				<img className="aspect-square" src={HeroImg} alt="hero-image" />
			</div>
		</div>
	);
}

export default Hero;
