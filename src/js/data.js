async function dataFetch() {
	try {
		const res = await fetch('./src/assets/data.json');

		if (!res.ok) {
			alert(res.status);
			return
		}

		const data = await res.json();
		return data;
	}
	catch (error) {
		alert(error);
	}
}

async function main(){
	
	const data = await dataFetch();
	if (!data){
		alert("data not found");
		return
	}

	const fragment = document.createDocumentFragment();
	const list = document.querySelector("#list");

	for(const [key, arr] of Object.entries(data)){

		const fieldset = document.createElement("fieldset");
		fieldset.classList.add("listField");

		const legend = document.createElement("legend");
		legend.textContent = key;
		
		fieldset.appendChild(legend);

		const ul = document.createElement("ul");

		arr.map(
			(item) => {
				const listItem = document.createElement("li");
				listItem.classList.add("listItem");

				const a = document.createElement("a");
				a.innerText = item;
				a.href = item;
				listItem.appendChild(a);

				ul.appendChild(listItem);
			}
		);
		
		fieldset.appendChild(ul);
		fragment.appendChild(fieldset);
	}
	list.appendChild(fragment);

}

main();
