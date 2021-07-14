const movie = document.getElementById("nmv");
const url = document.getElementById("url");
let valores = []

function add(){
	if(movie.value.length == 0 || url.value.length == 0){
		alert("Dados inválidos")
	}else if(valores.indexOf(movie.value) == -1 && valores.indexOf(url.value) == -1){
		valores.push(movie.value)
		valores.push(url.value)
		let filmes = document.getElementById('maindiv').insertAdjacentHTML("beforeend", `
			<figure class="figure">
			<img src="${url.value}" alt="${movie.value}" draggable="false">
			<figcaption class="caption">
			${movie.value}
			</figcaption>
			</figure>
			`)
		//valores = movie.value
	}else{
		alert("Filme ou URL já adicionado!")
	}
}