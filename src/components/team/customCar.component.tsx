import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CustomCar = () => {
	const dispatch = useDispatch<any>();
	const [carID, setCarID] = useState<any>(-1);
	const carData = {
		"-1": {
			id: -1,
			name: "No forced car",
			year: 0,
			class: null,
		},
		0: {
			id: 0,
			name: "Porsche 991 GT3 R",
			year: 2018,
			class: "gt3",
		},
		1: {
			id: 1,
			name: "Mercedes-AMG GT3",
			year: 2015,
			class: "gt3",
		},
		2: {
			id: 2,
			name: "Ferrari 488 GT3",
			year: 2018,
			class: "gt3",
		},
		3: {
			id: 3,
			name: "Audi R8 LMS",
			year: 2015,
			class: "gt3",
		},
		4: {
			id: 4,
			name: "Lamborghini Huracán GT3",
			year: 2015,
			class: "gt3",
		},
		5: {
			id: 5,
			name: "McLaren 650S GT3",
			year: 2015,
			class: "gt3",
		},
		6: {
			id: 6,
			name: "Nissan GT-R Nismo GT3",
			year: 2018,
			class: "gt3",
		},
		7: {
			id: 7,
			name: "BMW M6 GT3",
			year: 2017,
			class: "gt3",
		},
		8: {
			id: 8,
			name: "Bentley Continental GT3",
			year: 2018,
			class: "gt3",
		},
		9: {
			id: 9,
			name: "Porsche 991 II GT3 Cup",
			year: 2017,
			class: "gtc",
		},
		10: {
			id: 10,
			name: "Nissan GT-R Nismo GT3",
			year: 2015,
			class: "gt3",
		},
		11: {
			id: 11,
			name: "Bentley Continental GT3",
			year: 2015,
			class: "gt3",
		},
		12: {
			id: 12,
			name: "AMR V12 Vantage GT3",
			year: 2013,
			class: "gt3",
		},
		13: {
			id: 13,
			name: "Reiter Engineering R-EX GT3",
			year: 2017,
			class: "gt3",
		},
		14: {
			id: 14,
			name: "Emil Frey Jaguar G3",
			year: 2012,
			class: "gt3",
		},
		15: {
			id: 15,
			name: "Lexus RC F GT3",
			year: 2016,
			class: "gt3",
		},
		16: {
			id: 16,
			name: "Lamborghini Huracán GT3 Evo",
			year: 2019,
			class: "gt3",
		},
		17: {
			id: 17,
			name: "Honda NSX GT3",
			year: 2017,
			class: "gt3",
		},
		18: {
			id: 18,
			name: "Lamborghini Huracán SuperTrofeo",
			year: 2015,
			class: "gtc",
		},
		19: {
			id: 19,
			name: "Audi R8 LMS Evo",
			year: 2019,
			class: "gt3",
		},
		20: {
			id: 20,
			name: "AMR V8 Vantage",
			year: 2019,
			class: "gt3",
		},
		21: {
			id: 21,
			name: "Honda NSX GT3 Evo",
			year: 2019,
			class: "gt3",
		},
		22: {
			id: 22,
			name: "McLaren 720S GT3",
			year: 2019,
			class: "gt3",
		},
		23: {
			id: 23,
			name: "Porsche 911 II GT3 R",
			year: 2019,
			class: "gt3",
		},
		24: {
			id: 24,
			name: "Ferrari 488 GT3 Evo",
			year: 2020,
			class: "gt3",
			dlc: "2020 GT World Challenge Pack",
		},
		25: {
			id: 25,
			name: "Mercedes-AMG GT3",
			year: 2020,
			class: "gt3",
			dlc: "2020 GT World Challenge Pack",
		},
		26: {
			id: 26,
			name: "Ferrari 488 Challenge Evo",
			year: 2022,
			class: "gtc",
			dlc: "Challengers Pack",
		},
		27: {
			id: 27,
			name: "BMW M2 Club Sport Racing",
			year: 2022,
			class: "tcx",
			dlc: "Challengers Pack",
		},
		28: {
			id: 28,
			name: "Porsche 992 GT3 Cup",
			year: 2022,
			class: "gtc",
			dlc: "Challengers Pack",
		},
		29: {
			id: 29,
			name: "Lamborghini Huracán SuperTrofeo EVO2",
			year: 2022,
			class: "gtc",
			dlc: "Challengers Pack",
		},
		30: {
			id: 30,
			name: "BMW M4 GT3",
			year: 2022,
			class: "gt3",
		},
		31: {
			id: 31,
			name: "Audi R8 LMS GT3 Evo 2",
			year: 2022,
			class: "gt3",
			dlc: "Challengers Pack",
		},
		50: {
			id: 50,
			name: "Alpine A110 GT4",
			year: 2018,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		51: {
			id: 51,
			name: "Aston Martin Vantage GT4",
			year: 2018,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		52: {
			id: 52,
			name: "Audi R8 LMS GT4",
			year: 2018,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		53: {
			id: 53,
			name: "BMW M4 GT4",
			year: 2018,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		55: {
			id: 55,
			name: "Chevrolet Camaro GT4",
			year: 2017,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		56: {
			id: 56,
			name: "Ginetta G55 GT4",
			year: 2012,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		57: {
			id: 57,
			name: "KTM X-Bow GT4",
			year: 2016,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		58: {
			id: 58,
			name: "Maserati MC GT4",
			year: 2016,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		59: {
			id: 59,
			name: "McLaren 570S GT4",
			year: 2016,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		60: {
			id: 60,
			name: "Mercedes AMG GT4",
			year: 2016,
			class: "gt4",
			dlc: "GT4 Pack",
		},
		61: {
			id: 61,
			name: "Porsche 718 Cayman GT4 Clubsport",
			year: 2019,
			class: "gt4",
			dlc: "GT4 Pack",
		},
	};

	const handleChange = (e: SelectChangeEvent) => {
		setCarID(e.target.value);
		// dispatch(setForcedCarModel(e.target.value as never));
	};

	return (
		<FormControl>
			<Select
				onChange={(e: any) => handleChange(e)}
				defaultValue="-1"
				value={carID}
			>
				{carData
					? Object.values(carData).map((car, index) => {
							return (
								<MenuItem key={index} value={car.id}>
									{car.id === -1
										? `${car.name}`
										: `${car.name} (${car.year}) ${car.class?.toUpperCase()}`}
								</MenuItem>
							);
					  })
					: null}
			</Select>
		</FormControl>
	);
};

export default CustomCar;
