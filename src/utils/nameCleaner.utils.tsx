export const nameCleaner = (name: string) => {
	let cleanedName;
	let inizio;
	if (name.includes("]")) {
		if (name.includes("] ")) {
			inizio = name.indexOf("] ") + 2;
		} else {
			inizio = name.indexOf("] ") + 1;
		}
		cleanedName = name.substring(inizio);
	} else if (name.includes(")")) {
		if (name.includes(") ")) {
			inizio = name.indexOf(") ") + 2;
		} else {
			inizio = name.indexOf(") ") + 1;
		}
		cleanedName = name.substring(inizio);
	} else {
		cleanedName = name;
	}

	return cleanedName;
};
