import Star from "../assets/Star.svg";
import Void from "../assets/VoidStar.svg";
type StarPropsType = {
	star: number;
};
function StarArray({ star }: StarPropsType) {
	const TotalStar = 5;
	const starArray = Array.from({ length: TotalStar }, (_, index) => index + 1);

	return (
		<div className="flex gap-1">
			{starArray.map((s) => (
				<span key={s}>
					{star >= s ? (
						<img className="w-5" src={Star} alt="star" />
					) : (
						<img className="w-5" src={Void} alt="star" />
					)}
				</span>
			))}
		</div>
	);
}

export default StarArray;
