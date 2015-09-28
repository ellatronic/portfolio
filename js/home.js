$(document).ready(function() {
	function getGitHubData() {
		$.get('https://api.github.com/users/ellatronic/events')
			.done(function(data) {
				// retrieve last commit
				for (i = 0; i < data.length; i++) {
					var type = data[i].type;
					if (type === "PushEvent") {
						//find commit's time
						var date = data[i].created_at;
						//find commit's time from time now
						var time = moment(date).fromNow();
						//find commit's api url
						var apiLink = data[i].payload.commits[0].url;

						//find commit's html url
						$.get(apiLink)
							.done(function(data){
								var htmlURL = data.html_url;
								//display commit link on homepage
								$('#commit-link').attr("href", htmlURL);
							})
					}
					break;
				}
				//display how long ago last commit was on homepage
				$('#github-data').text("Last commit on GitHub was " 
					+ time + ".");
		})
	}

	getGitHubData();
});