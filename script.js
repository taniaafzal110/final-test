// Write all your Javascript here!
$.ajax({
	url: "https://techkaro-test.herokuapp.com/api/v1/getdata",
	success: function(data) {
		console.log(data);

        document.querySelector(".lotus").innerHTML = `${data.imageURL}`;
		document.querySelector(".date").innerHTML = `${data.date}`;
		document.querySelector(".heading").innerHTML = `${data.info.heading}`;
		document.querySelector(".description").innerHTML = `${data.info.description}`
		document.querySelector(".heading2").innerHTML = `${data.sale.heading}`;
		document.querySelector(".description2").innerHTML = `${data.sale.description}`

	} 
})








		