export const writeEntrylist = async (data: any) => {
	//let newData = data.replace(",ready:1", "");
	// let key = "ready";
	// let ready = new RegExp(`,.*${key}.*[, ]`, "g");
	// let ready2 = data.replace(ready, "");
	const entrylist = JSON.stringify(data);

	console.log(entrylist);
	var FileSaver = require("file-saver");
	var blob = new Blob([entrylist], { type: "application/json" });
	FileSaver.saveAs(blob, "entrylist.json");
};
