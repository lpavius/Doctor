/* Affichage description de l'épaule */
let epaule = document.getElementById('epaule');

epaule.onmouseenter = () => {
	document.getElementById('description1').style.display = 'block';
}
epaule.onmouseleave = () => {
	document.getElementById('description1').style.display = 'none';
}

/* Affichage description du coude */
const coude = document.getElementById('coude');

coude.onmouseenter = () => {
	document.getElementById('description2').style.display = 'block';
}
coude.onmouseleave = () => {
	document.getElementById('description2').style.display = 'none';
}

/* Affichage description du poignet */
const poignet = document.getElementById('poignet');

poignet.onmouseenter = () => {
	document.getElementById('description3').style.display = 'block';
}
poignet.onmouseleave = () => {
	document.getElementById('description3').style.display = 'none';
}

/* Affichage description de la hanche */
const hanche = document.getElementById('hanche');

hanche.onmouseenter = () => {
	document.getElementById('description4').style.display = 'block';
	document.getElementById('description4').innerHTML = "Hanche :<br><br>La hanche \
	ou articulation coxo-fémorale est une articulation (sphéroïde) qui permet de \
	joindre la cuisse au bassin. Elle met en jeu deux os : l'os coxal et le fémur.";
}
hanche.onmouseleave = () => {
	document.getElementById('description4').style.display = 'none';
}

/* Affichage description du genou */
const genou = document.getElementById('genou');

genou.onmouseenter = () => {
	document.getElementById('description5').style.display = 'block';
	document.getElementById('description5').innerHTML = "Genou :<br><br> Le genou est une articulation \
	qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le \
	tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire\
	et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des \
	mouvements du genou. Le tissu élastique fin, le cartilage, protège l'os et fait \
	en sorte que les surfaces de l'articulation glissent facilement les unes contre \
	les autres. Le genou renferme deux types de cartilages articulaires: le cartilage\
	fibreux (ménisque) et le cartilage hyalin. Le cartilage s'use non seulement au \
	fil des ans, mais aussi en fonction de son utilisation. Le cartilage possède \
	en outre une capacité de régénération limitée. La faible capacité de régénération\
	du cartilage s'explique par l'absence de vaisseaux sanguins qui permettent un \
	métabolisme important. Le tissu cicatriciel se compose essentiellement de\
	cartilage fibreux, de moins bonne qualité que le cartilage hyalin d'origine.\
	Par conséquent, de nouvelles déchirures et fissures apparaissent dans le \
	cartilage après un certain temps. ";
}
genou.onmouseleave = () => {
	document.getElementById('description5').style.display = 'none';
}

/* Affichage description de la cheville */
const cheville = document.getElementById('cheville');

cheville.onmouseenter = () => {
	document.getElementById('description6').style.display = 'block';
	document.getElementById('description6').innerHTML = "Cheville :<br><br>La cheville \
	ou cou-de-pied est l'articulation qui relie la jambe et le pied. Elle est parfois \
	sujette à des entorses, le plus souvent externes par flexion plantaire et pied en \
	équin. Une cheville adulte est composée, au point de vue osseux, de l'épiphyse \
	inférieure du tibia (malléole interne et plafond), de l'épiphyse inférieure de la \
	fibula (ou péroné) (malléole externe) et du talus (ou astragale). Classiquement, \
	on parle d'articulation supinale de l'arrière pied. On peut la définir comme une \
	articulation synoviale de type ginglyme (anciennement trochléenne) c'est-à-dire \
	mettant en rapport un segment de poulie plein à un segment de poulie creux. "
}
cheville.onmouseleave = () => {
	document.getElementById('description6').style.display = 'none';
}


