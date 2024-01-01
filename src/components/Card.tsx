import StarArray from "./StarArray";

type CardProps = {
	id: number;
	imageSrc: string;
	price: number;
	star: number;
	course: string;
	details: string;
};
function Card({item}:{item:CardProps}) {
  return (
		<div className="shadow-md mr-4 my-4 rounded-2xl">
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
	);
}

export default Card;
