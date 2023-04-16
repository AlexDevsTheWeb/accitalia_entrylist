import {
	LabelTypography,
	ValueTypography,
	Wrapper,
} from "./styled/TeamField.styled";

const TeamField = ({ label, value }: any) => {
	return (
		<Wrapper>
			<LabelTypography>{label}:</LabelTypography>
			<ValueTypography>{value ? value : " - "}</ValueTypography>
		</Wrapper>
	);
};

export default TeamField;
