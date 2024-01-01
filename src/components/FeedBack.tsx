import Slider from "react-slick";
import One from "../assets/Testimony1.png";
import Two from "../assets/Testimony2.png";
import Three from "../assets/Testimony3.png";
import Four from "../assets/Testimony4.jpg";
import Five from "../assets/Testimony5.png";
import Quote from "../assets/Quotation.svg";
const FeedBacks = [
	{
		id: 1,
		name: "John Doe",
		position: "Software Engineer",
		comments:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus mauris vel commodo luctus.",
		image: One,
	},
	{
		id: 2,
		name: "Jane Doe",
		position: "UX Designer",
		comments:
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultricies consequat urna, vel rhoncus lacus tristique eu.", // Detailed feedback comments
		image: Two,
	},
	{
		id: 3,
		name: "Alice Smith",
		position: "Marketing Specialist",
		comments:
			"Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Suspendisse potenti. Duis vitae justo ac augue tristique scelerisque.",
		image: Three,
	},
	{
		id: 4,
		name: "Bob Johnson",
		position: "Product Manager",
		comments:
			"Nulla quis lorem ut libero malesuada feugiat. Nullam sagittis consequat purus, et accumsan elit malesuada nec. Sed congue bibendum metus, nec venenatis odio rhoncus ut.",
		image: Four,
	},
	{
		id: 5,
		name: "Eva Brown",
		position: "Data Scientist",
		comments:
			"Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Integer tincidunt, urna vitae pellentesque tincidunt, ex odio accumsan velit.",
		image: Five,
	},
];
function FeedBack() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: false,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="bg-white w-full md:py-[147px] py-10">
			<div className="md:max-w-[1480px] max-w-[600px] m-auto">
				<p className="text-[40px] font-semibold">
					Student <span className="text-primary">Feedback</span>
				</p>
				<p className="text-secondaryText">
					Various versions have evolved over the years, sometimes by accident,
				</p>
				<div className="md:py-12">
					<Slider {...settings}>
						{FeedBacks.map((item) => (
							<div className="bg-white rounded-md max-w-[450px] shadow-md aspect-video flex flex-col overflow-hidden my-10 mx-4 p-4 ">
								<div className="flex justify-between items-start mb-5">
									<div className="flex gap-x-2">
										<img
											className="w-20 h-20 rounded-full object-cover"
											src={item.image}
											alt={item.name}
										/>
										<div>
											<p className="font-semibold text-xl">{item.name}</p>
											<p>{item.position}</p>
										</div>
									</div>
									<img src={Quote} className="w-10" alt="quotation" />
								</div>
								<div className="text-base max-w-[600px] py-2">{item.comments}</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default FeedBack;
