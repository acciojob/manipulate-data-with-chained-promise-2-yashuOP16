const output = document.getElementById("output");

const promise = new promise ( (resorve , reject) => {
	setTimeout (() => {
		resorve([1,2,3,4])
	}, 1000)
})

promise.then((evenData) => {
	const multipleNumber = evenData.map((num) =>{
			return num * 2
	});

	setTimeout (() => {
		output.innerText = multipleNumber;
	}, 3000)
	
	console.log(evenData)
})