start = """
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Nyan CaT Fans only</title>

	<link rel="icon" href="favicon.ico" />
	<link rel="stylesheet" href="css/nyan.css"/>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Bungee+Spice&family=Rubik+Iso&display=swap" rel="stylesheet">
</head>
<body style="background:"""

end = """;">


	<div class="sparks-combo">
		<div class="spark"></div>
		<div class="spark"></div>
		<div class="spark"></div>
		<div class="spark"></div>
	</div>

	<div id="wave-a" class="hot rainbow"></div>
	<div id="wave-a" class="cold rainbow"></div>

	<div id="wave-b" class="hot rainbow"></div>
	<div id="wave-b" class="cold rainbow"></div>

	<div id="nyan-cat" class="frame1">
		<div id="tail"></div>

		<div id="paws"></div>

		<div id="pop-tarts-body">
			<div id="pop-tarts-body-cream"></div>
		</div>

		<div id="head">
			<div id="face"></div>
		</div>
	</div>

	<script src="js/nyan.js"></script>
</body>
</html>
"""

from sys import argv
color = argv[1]
name = argv[2]
site = start + color + end

def cfilter(color):
    ret = ""
    for c in color:
        if c.isalnum():
            ret += c
    return ret

with open(f"{name}.html", "w") as file:
    file.write(site)
