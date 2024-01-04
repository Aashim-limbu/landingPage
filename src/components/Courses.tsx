import Slider from "react-slick";
import One from "../assets//Course1.png";
import Two from "../assets/Course2.png";
import Three from "../assets/Course3.png";
import Four from "../assets/Course4.png";
import Five from "../assets/Course5.png";
import Six from "../assets/Course6.png";
import Card from "./Card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Categories = [
	{
		id: 1,
		imageSrc: One,
		price: 500,
		star: 5,
		course: "HTML",
		details: "Various versions have evolved daf",
	},
	{
		id: 2,
		imageSrc: Two,
		price: 500,
		star: 4,
		course: "Design",
		details: "Various versions have evolved daf",
	},
	{
		id: 3,
		imageSrc: Three,
		price: 500,
		star: 3,
		course: "Business",
		details: "Various versions have evolved daf",
	},
	{
		id: 4,
		imageSrc: Four,
		price: 500,
		star: 4,
		course: "JavaScript",
		details: "Various versions have evolved daf",
	},
	{
		id: 5,
		imageSrc: Five,
		price: 500,
		star: 4,
		course: "React",
		details: "Various versions have evolved daf",
	},
	{
		id: 6,
		imageSrc: Six,
		price: 500,
		star: 5,
		course: "Python",
		details: "Various versions have evolved daf",
	},

];
function Courses() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    })
	return (
		<motion.div style={{opacity:scrollYProgress}} ref={ref} className="bg-[#e9f8f3] bg-opacity-[0.7] w-full">
			<div className="md:max-w-[1480px] max-w-[600px] md:py-[200px] py-10  m-auto">
				<p className="md:text-[56px] text-2xl font-semibold py-5">
					Most Popular <span className="text-primary">Courses</span>
				</p>
				<p className="text-secondaryText py-5 mb-5">
					Various versions have evolved over the years, sometimes by accident,
				</p>
				<div className="px-10">
					<Slider {...settings}>
						{Categories.map((item) => (
							<Card key={item.id} item={item} />
						))}
					</Slider>
				</div>
			</div>
		</motion.div>
	);
}

export default Courses;
