// index.html dosyasını oluşturur
const fs = require('fs');
const html = `
<!DOCTYPE html>
<html lang="tr">
<head>
	<meta charset="UTF-8">
	<title>Kişisel Web Sitesi</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="container">
		<h1>Merhaba, Ben [Adınız]</h1>
		<p>Kendinizi kısaca tanıtan bir metin buraya gelecek.</p>
		<h2>Bildiğim Teknolojiler</h2>
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<!-- Diğer bildiğiniz teknolojileri ekleyin -->
		</ul>
		<h2>Projelerim</h2>
		<ul>
			<li><a class="project-link" href="project1.html">Proje 1: Örnek Proje Başlığı</a></li>
			<li><a class="project-link" href="project2.html">Proje 2: Diğer Proje Başlığı</a></li>
		</ul>
	</div>
</body>
</html>
`;
fs.writeFileSync('index.html', html);
