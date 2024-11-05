window.onload = async function () {
	let lists = document.getElementsByClassName("list");

	console.log(lists);

	for (let list of lists) {
		const folder = list.getAttribute("data-folder");
		const response = await fetch(
			`https://api.github.com/repos/LucaMonetti/docsTest/contents/${folder}`
		);

		let htmlString = "<ul>";

		for (let file of await response.json()) {
			htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
		}

		htmlString += "</ul>";
		list.innerHTML += htmlString;
	}
};
