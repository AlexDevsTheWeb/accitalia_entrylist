export const writeEntrylist = async (data: any) => {
	//let newData = data.replace(",ready:1", "");
	// let key = "ready";
	// let ready = new RegExp(`,.*${key}.*[, ]`, "g");
	// let ready2 = data.replace(ready, "");
	let entrylist = JSON.stringify(data);

	let newEntrylist = entrylist.replace("[[", "[");
	newEntrylist = newEntrylist.replace("]]", "]");
	newEntrylist = newEntrylist.replace("{}", "");

	var FileSaver = require("file-saver");
	var blob = new Blob([newEntrylist], { type: "application/json" });

	FileSaver.saveAs(blob, "entrylist.json");
};
