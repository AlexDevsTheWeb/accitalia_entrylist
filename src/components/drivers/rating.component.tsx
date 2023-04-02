import styled from "styled-components";

const Rating = ({ rating }: any) => {
	return (
		<RatingWrapper>
			RATING <br />
			<RatingValue>{rating == 0 ? 0 : rating}</RatingValue>
		</RatingWrapper>
	);
};

const RatingWrapper = styled.div`
	font-size: 16px;
	color: white;
	min-width: 100px;
	padding: 10px;
	text-align: center;
	-webkit-border-top-right-radius: 10px;
	-webkit-border-bottom-right-radius: 10px;
	-moz-border-radius-topright: 10px;
	-moz-border-radius-bottomright: 10px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	background-color: white;

	background-color: #000;
	margin: 0px;
`;

const RatingValue = styled.h2`
	font-size: 20px;
	font-weight: bold;
	color: white;
	margin: 0px;
`;

export default Rating;
