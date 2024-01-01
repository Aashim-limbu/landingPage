import One from "../assets/PenNib.svg";
import Two from "../assets/FileHtml.svg";
import Three from "../assets/MicrophoneStage.svg";
import Four from "../assets/Briefcase.svg";
import Five from "../assets/SunHorizon.svg";
import Six from "../assets/Camera.svg";
import Seven from "../assets/MusicNote.svg";
import Eight from "../assets/Database.svg";
import Nine from "../assets/Lightbulb.svg";
import Ten from "../assets/Heartbeat.svg";
import Eleven from "../assets/Graph.svg";
import Twelve from "../assets/Detective.svg";
import { MdOutlineArrowOutward } from "react-icons/md";
const categories = [
	{
		id: 1,
		imageUrl: One,
		name: "Design",
		active: true,
	},
	{
		id: 2,
		imageUrl: Two,
		name: "Development",
		active: false,
	},
	{
		id: 3,
		imageUrl: Three,
		name: "Marketing",
		active: false,
	},
	{
		id: 4,
		imageUrl: Four,
		name: "Business",
		active: false,
	},
	{
		id: 5,
		imageUrl: Five,
		name: "Lifestyle",
		active: false,
	},
	{
		id: 6,
		imageUrl: Six,
		name: "Photography",
		active: false,
	},
	{
		id: 7,
		imageUrl: Seven,
		name: "Music",
		active: false,
	},
	{
		id: 8,
		imageUrl: Eight,
		name: "Data Science",
		active: false,
	},
	{
		id: 9,
		imageUrl: Nine,
		name: "Personal Development",
		active: false,
	},
	{
		id: 10,
		imageUrl: Ten,
		name: "Health & Fitness",
		active: false,
	},
	{
		id: 11,
		imageUrl: Eleven,
		name: "Finance",
		active: false,
	},
	{
		id: 12,
		imageUrl: Twelve,
		name: "Teaching",
		active: false,
	},
];

function Categories() {
	return (
		<div className="bg-[#F0FBF7] w-full md:py-[135px]">
			<div className="md:max-w-[1480px] max-w-[600px] m-auto">
				<p className="text-[40px] font-semibold">
					Most <span className="text-primary">Popular Categories</span>
				</p>
				<p className="text-secondaryText py-4">
					Various versions have evolved over the years, sometimes by accident,
				</p>
				<div className="md:my-10 grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4  gap-4">
					{categories.map((item) => (
						<div
							key={item.id}
							className={`flex justify-between items-center cursor-pointer rounded-md text-lg gap-x-4 bg-white px-4 py-2 ${
								item.active ? "border border-primary" : ""
							}`}
						>
							<img src={item.imageUrl} alt={item.name} />
							<p>{item.name}</p>
							<div
								className={
									item.active
										? "bg-primary text-white p-2 text-2xl  rounded-md"
										: " "
								}
							>
								<MdOutlineArrowOutward />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Categories;
