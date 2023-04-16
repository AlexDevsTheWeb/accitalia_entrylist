import { AutoWrapper, Wrapper } from "./styled/teamContainer.styled";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Stack } from "@mui/material";
import TeamField from "./TeamField.component";

const NewTeamContainer = ({ number, team }: any) => {
	const {
		ballastKg,
		customCar,
		defaultGridPosition,
		forcedCarModel,
		isServerAdmin,
		overrideCarModelForCustomCar,
		overrideDriverInfo,
		raceNumber,
		restrictor,
		teamName,
		drivers,
	} = team;
	return (
		<Wrapper>
			<AutoWrapper>TEAM #{number}</AutoWrapper>

			<Grid2 container spacing={2}>
				<Grid2 xs={8}>
					<Grid2 container spacing={1}>
						<Grid2 xs={6}>
							<Stack>
								<TeamField label="Team Name" value={teamName} />
								<TeamField label="Race Number" value={raceNumber} />
								<TeamField
									label="Default Grid Position"
									value={defaultGridPosition}
								/>

								<TeamField
									label="Override driver info?"
									value={overrideDriverInfo ? "Sì" : "No"}
								/>
								<TeamField
									label="is Server Admin?"
									value={isServerAdmin ? "Sì" : "No"}
								/>
							</Stack>
						</Grid2>
						<Grid2 xs={6}>
							<Stack>
								<TeamField
									label="Override car model for custom car?"
									value={overrideCarModelForCustomCar ? "Sì" : "No"}
								/>
								<TeamField
									label="Car Model"
									value={forcedCarModel ? forcedCarModel : " - "}
								/>
								<TeamField
									label="Custom Car"
									value={customCar ? customCar : " - "}
								/>
								<TeamField
									label="Ballast"
									value={ballastKg ? `${ballastKg} kg` : " 0 kg "}
								/>
								<TeamField
									label="Restrictor"
									value={restrictor ? `${restrictor} %` : " 0 % "}
								/>
							</Stack>
						</Grid2>
					</Grid2>
				</Grid2>
				<Grid2 xs={4}>
					{drivers[0].map((d: any, index: number) => {
						console.log("...");
						return (
							<div key={index}>
								<TeamField
									label="Pilota"
									value={`${d.firstName} ${d.lastName} (${d.shortName}) `}
								/>
							</div>
						);
					})}
				</Grid2>
			</Grid2>
		</Wrapper>
	);
};

export default NewTeamContainer;
