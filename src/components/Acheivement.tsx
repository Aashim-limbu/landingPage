import Image from "../assets/Acheivement.png";
import One from "../assets/Instructor.png";
import Two from "../assets/Video.png";
import Three from "../assets/Student.png";
import Four from "../assets/Users.png";
const Achievements = [
	{ id: 1, number: "300", item: "Instructor", imgSrc: One, name: "Instructor" },
	{ id: 2, number: "10,000+", item: "Video", imgSrc: Two, name: "Video" },
	{ id: 3, number: "20,000+", item: "Student", imgSrc: Three, name: "Student" },
	{ id: 4, number: "1,00,000+", item: "Users", imgSrc: Four, name: "Users" },
];
function Acheivement() {
	return (
		<div className="w-full bg-white md:py-[119px]">
			<div className="py-10 md:max-w-[1480px] grid md:gap-x-10 md:grid-cols-2 m-auto max-w-[600px] md:py-10">
				<div>
					<p className="md:text-[40px] max-w-[700px] text-2xl font-semibold">
						Our
						<span className="text-primary">Achievement</span>
					</p>
					<p className="text-secondaryText md:text-xl  py-4">
						Various versions have evolved over the years, sometimes by accident,
					</p>
					<div className="grid grid-cols-2  md:my-20 my-5 md:gap-4">
						{Achievements.map((item) => (
							<div className="flex gap-4">
								<img src={item.imgSrc} alt={item.name} />
								<div>
									<p className="text-[32px] font-semibold">{item.number}</p>
									<p className="text-secondaryText">{item.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<img className="md:order-last md:m-0 md:ml-auto order-first m-auto" src={Image} alt="Our Achievement" />
			</div>
		</div>
	);
}

export default Acheivement;
