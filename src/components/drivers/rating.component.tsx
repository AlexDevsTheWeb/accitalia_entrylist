import { RatingValue, RatingWrapper } from "./styled/rating.styled";

const Rating = ({ rating }: any) => {
	return (
		<RatingWrapper>
			RATING <br />
			<RatingValue>{rating === 0 ? 0 : rating}</RatingValue>
		</RatingWrapper>
	);
};

export default Rating;
