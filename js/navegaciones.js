	$(document).ready(function() {
		$("#plataformas").click(function(event) {
			$("#contenedor").load('plataformas_mate.html');
		});
	});

	$(document).ready(function() {
		$("#grupos").click(function(event) {
			$("#contenedor").load('grupos_facebook.html');
		});
	});
