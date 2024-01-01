
import One from "../assets//Course1.png";
import Two from "../assets/Course2.png";
import Three from "../assets/Course3.png";
import Four from "../assets/Course4.png";
import StarArray from "./StarArray";
const Categories = [
	{
		id: 1,
		imageSrc: One,
		price: 500,
		star: 5,
        course:"HTML",

		details: "Various versions have evolved daf",
	},
	{
        id: 2,
		imageSrc: Two,
		price: 500,
		star: 4,
        course:"Design",
		details: "Various versions have evolved daf",
	},
	{
        id: 3,
		imageSrc: Three,
		price: 500,
		star: 3,
        course:"Business",
		details: "Various versions have evolved daf",
	},
	{
        id: 4,
		imageSrc: Four,
		price: 500,
		star: 4,
        course:"UI/UX",
		details: "Various versions have evolved daf",
	},
];
function Courses() {
    // const settings = {
	// 		dots: true,
	// 		infinite: true,
	// 		speed: 500,
	// 		slidesToShow: 3,
	// 		slidesToScroll: 3,
	// 	};
	return (
		<div className="bg-[#e9f8f3] bg-opacity-[0.7] w-full">
			<div className="md:max-w-[1480px] max-w-[600px] md:py-[200px] py-10  m-auto flex gap-5 flex-col items-center md:items-start">
				<p className="md:text-[56px] text-2xl font-semibold ">
					Most Popular <span className="text-primary">Courses</span>
				</p>
				<p className="text-secondaryText mb-5">
					Various versions have evolved over the years, sometimes by accident,
				</p>
				<div className="flex md:flex-row flex-col gap-6 ">
					{Categories.map((item) => (
						<div className="shadow-md rounded-2xl" key={item.id}>
							<div className="flex  border border-b-gray-300 flex-col gap-2 bg-white relative p-4 rounded-t-2xl">
								<img src={item.imageSrc} alt={`Image ${item.id}`} />
								<p className="text-secondaryText">{item.details}</p>
								<StarArray star={item.star} />
								<p className="absolute bg-white left-5  top-5 p-1 px-2 rounded-xl cursor-pointer bg-opacity-70">
									{item.course}
								</p>
							</div>
							<p className="font-semibold py-5 text-lg p-4 rounded-b-2xl bg-white">
								{`$${item.price}`}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Courses;
