let fbToken

$(document).ready(() => {
	fbToken = prompt("Enter your facebook token:")
	if (fbToken == null || fbToken == "") {
		alert("No user token found")
	} else {
		$('#get-data').click(() => {
			getDetails()
		})
	}
})

let getDetails = () => {

	$.ajax({
		type: 'Get',
		dataType: 'json',
		async: true,
		url: 'https://graph.facebook.com/me?fields=id,name,about,cover,picture.type(large)&access_token=' + fbToken,
		success: (response) => {
			$('#userName').css('display', 'block')
			console.log(response)
			$('#userName').append(response.name)
			$('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>')
			$('#cover').css('background-image', 'url(' + response.cover.source + ')')

		}, error: (err) => {
			console.log(err.responseJSON.error.message)
		}

	})

}