export const addTeamToLS = (team: any) => {
	console.log(team);
	localStorage.setItem("accitalia_team", JSON.stringify(team));
};

export const getTeamFromLS = () => {
	const result = localStorage.getItem("accitalia_team");
	const team = result ? JSON.parse(result) : null;
	return team;
};
export const deleteTeamFromLS = () => {
	localStorage.removeItem("accitalia_team");
};
