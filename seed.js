import  { Payload }  from "payload";

/*const dataSet = [

  {
  clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Abreu Artiñano",
   Nombre: "Rocío Adriana",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3552",
   Email: "rocio.abreu@senado.gob.mx",
   Estado: "Campeche",
   Facebook: "https://www.facebook.com/RocioAbreuA/",
   Twitter: "https://twitter.com/RocioAbreuA",
   Instagram: "https://www.instagram.com/rocioabreua"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Aceves del Olmo",
   Nombre: "Carlos Humberto",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 3166 y 3565",
   Email: "carlos.aceves@senado.gob.mx",
   Estado: "Lista Nacional",
   Twitter: "https://twitter.com/carlosaceves_"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Álvarez Icaza Longoria",
   Nombre: "Emilio",
   Partido: "SG",
   Telefono: "5345 3000 Ext: 5210",
   Email: "emilio.alvarezicazal@senado.gob.mx",
   Estado: "Ciudad de México",
   Facebook: "https://www.facebook.com/emilioalvarezicaza/",
   Twitter: "https://twitter.com/EmilioAlvarezI",
   Instagram: "https://www.instagram.com/emilioalvarezi/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Álvarez Lima",
   Nombre: "José Antonio Cruz",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3144",
   Email: "alvarez.lima@senado.gob.mx",
   Estado: "Tlaxcala"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Anaya Mota",
   Nombre: "Claudia Edith",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 3184 y 5303",
   Email: "claudia.anaya@senado.gob.mx",
   Estado: "Zacatecas",
   Facebook: "https://www.facebook.com/claudia.anayamota/",
   Twitter: "https://twitter.com/ClaudiAnaya"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Añorve Baños",
   Nombre: "Manuel",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 5910",
   Email: "manuel.anorve@senado.gob.mx",
   Estado: "Guerrero",
   Facebook: "https://www.facebook.com/ManuelAnorveBanos/",
   Twitter: "https://twitter.com/manuelanorve",
   Instagram: "https://www.instagram.com/manuelanorvebanos/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Arias Solís",
   Nombre: "Cristóbal",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3273",
   Email: "cristobal.arias@senado.gob.mx",
   Estado: "Michoacán de Ocampo",
   Facebook: "https://www.facebook.com/SenCristobalArias/",
   Twitter: "https://twitter.com/CristobalAriaSo",
   Instagram: "https://www.instagram.com/cristobalariassolis"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Armenta Mier",
   Nombre: "Alejandro",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3118 y 5392",
   Email: "alejandro.armenta@senado.gob.mx",
   Estado: "Puebla",
   Facebook: "https://www.facebook.com/armentaconmigo/",
   Twitter: "https://twitter.com/armentaconmigo",
   Instagram: "https://www.instagram.com/alejandroarmentamier"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Ávila Vázquez",
   Nombre: "Katya Elizabeth",
   Partido: "PES",
   Telefono: "5345 3000 Ext: 3448 y 3340",
   Email: "katya.avila@senado.gob.mx",
   Estado: "Lista Nacional"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Ávila Villegas",
   Nombre: "Eruviel",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 5273, 3045, 5922",
   Email: "oficina.eruviel.avila@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/eruviel/",
   Twitter: "https://twitter.com/eruviel_avila",
   Instagram: "https://www.instagram.com/eruviel_avila/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Balderas Espinoza",
   Nombre: "Claudia Esther",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3333 y 5602",
   Email: "claudia.balderas@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/soyclaudiabalderas/",
   Twitter: "https://twitter.com/ClauBalderasMX",
   Instagram: "https://www.instagram.com/claubalderasmx/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Bañuelos ",
   Nombre: "Geovanna",
   Partido: "PT",
   Telefono: "5345 3000 Ext: 3327",
   Email: "geovanna.banuelos@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/GeovannaBanuelosOficial/",
   Twitter: "https://twitter.com/geovanna_b",
   Instagram: "https://www.instagram.com/geovannabanuelos/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Beltrones Sánchez",
   Nombre: "Sylvana",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 5821",
   Email: "sylvana.beltrones@senado.gob.mx",
   Estado: "Sonora",
   Facebook: "https://www.facebook.com/sylvana.beltronessanchez.5",
   Twitter: "https://twitter.com/sylbeltrones",
   Instagram: "https://www.instagram.com/sylvanabeltrones/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Benavides Cobos",
   Nombre: "Gabriela",
   Partido: "PVEM",
   Telefono: "5345 3000 Ext: 3933",
   Email: "gabriela.benavides@senado.gob.mx",
   Estado: "Colima",
   Facebook: "https://www.facebook.com/GabrielaBenavidesCobos/",
   Twitter: "https://www.instagram.com/Gaby.Benavides.Cobos/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Bermúdez Méndez",
   Nombre: "José Erandi",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3268",
   Email: "erandi.bermudez@senado.gob.mx",
   Estado: "Guanajuato",
   Facebook: "https://www.facebook.com/ErandiBermudez/",
   Twitter: "https://twitter.com/ErandiBermudez",
   Instagram: "https://www.instagram.com/erandibermudez/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Bolaños-Cacho Cué",
   Nombre: "Raúl",
   Partido: "PVEM",
   Telefono: "5345 3000 Ext: 5235, 3065 y 3338",
   Email: "oficina.raul.bolanos@senado.gob.mx",
   Estado: "Oaxaca",
   Facebook: "https://www.facebook.com/RaulBCC/",
   Twitter: "https://twitter.com/RaulBCCue",
   Instagram: "https://www.instagram.com/raulbccue/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Bonilla Valdez",
   Nombre: "Jaime",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3036, 5229",
   Email: "jaime.bonilla@senado.gob.mx",
   Estado: "Baja California",
   Facebook: "https://www.facebook.com/JaimeBonillaValdez/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Botello Montes",
   Nombre: "José Alfredo",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 4183 y 4184",
   Email: "jose.botello@senado.gob.mx",
   Estado: "Querétaro"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Bours Griffith",
   Nombre: "Arturo",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3123",
   Email: "oficina.arturo.bours@senado.gob.mx",
   Estado: "Sonora",
   Facebook: "https://www.facebook.com/ArturoBoursG/",
   Twitter: "https://twitter.com/Arturo_Bours",
   Instagram: "https://www.instagram.com/arturoboursg"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Camino Farjat",
   Nombre: "Verónica Noemí",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3082",
   Email: "veronica.camino@senado.gob.mx",
   Estado: "Yucatán",
   Facebook: "https://www.facebook.com/Ver%C3%B3nica-Camino-Farjat-346352612235933/",
   Twitter: "https://twitter.com/veronicacamino",
   Instagram: "https://www.instagram.com/verocaminof/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Caraveo Camarena",
   Nombre: "Bertha Alicia",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3245",
   Email: "bertha.caraveo@senado.gob.mx",
   Estado: "Chihuahua",
   Facebook: "https://www.facebook.com/BerthaCaraveoC/",
   Twitter: "https://twitter.com/CaraveoBertha",
   Instagram: "https://www.instagram.com/berthacaraveoc"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Cárdenas Mariscal",
   Nombre: "María Antonia",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5436, 3280 y 3282",
   Email: "maria.cardenas@senado.gob.mx",
   Estado: "Jalisco",
   Facebook: "https://www.facebook.com/MaAntoniaCar/",
   Twitter: "https://twitter.com/MaAntoniaCar",
   Instagram: "https://www.instagram.com/dip_antonia/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Castañeda Hoeflich",
   Nombre: "Clemente",
   Partido: "Movimiento Ciudadano",
   Telefono: "53453000 Ext: 5889",
   Email: "clemente.castaneda@senado.gob.mx",
   Estado: "Jalisco",
   Facebook: "https://www.facebook.com/clementech/",
   Twitter: "https://twitter.com/ClementeCH",
   Instagram: "https://www.instagram.com/clementechmx/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Castañón ",
   Nombre: "Noé",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3380 y 3631",
   Email: "oficina.noe.castanon@senado.gob.mx",
   Estado: "Chiapas",
   Facebook: "https://www.facebook.com/noecastanonramirez/",
   Twitter: "https://twitter.com/noecastanonr",
   Instagram: "https://www.instagram.com/noecastanonr/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Castro Castro",
   Nombre: "Imelda",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3433",
   Email: "imelda.castro@senado.gob.mx",
   Estado: "Sinaloa",
   Facebook: "https://www.facebook.com/imeldacastromx/",
   Twitter: "https://twitter.com/imeldacastromx",
   Instagram: "https://www.instagram.com/imeldacastromx/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Cervantes Rojas",
   Nombre: "Elí César Eduardo",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3013 y 5597",
   Email: "cesar.cervantes@senado.gob.mx",
   Estado: "San Luis Potosí",
   Facebook: "https://www.facebook.com/104736365198532/posts/261982592807241/",
   Twitter: "https://twitter.com/eli_csar?t=Cjdv5Ves2kU2-h2_A5rtpg&s=08",
   Instagram: "https://www.instagram.com/p/Cbtdpo2tVYq/?utm_medium=copy_link"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Covarrubias Cervantes",
   Nombre: "Ma. Guadalupe",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3281",
   Email: "maria.covarrubias@senado.gob.mx",
   Estado: "Tamaulipas",
   Facebook: "https://www.facebook.com/mtra.lupitac/?ref=br_rs",
   Twitter: "https://twitter.com/mtra_lupita"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Cravioto Romero",
   Nombre: "César Arnulfo",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5900",
   Email: "cesar.cravioto@senado.gob.mx",
   Estado: "Ciudad de México"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Cruz Blackledge",
   Nombre: "Gina Andrea",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3388",
   Email: "gina.cruz@senado.gob.mx",
   Estado: "Baja California",
   Facebook: "https://www.facebook.com/Senadora-Gina-Cruz-772464189500094/",
   Twitter: "https://twitter.com/GinaCruz2018",
   Instagram: "https://www.instagram.com/ginacruzb/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "De la Sierra Arámburo",
   Nombre: "Nancy",
   Partido: "SG",
   Telefono: "5345 3000 Ext: 3084",
   Email: "nancy.delasierra@senado.gob.mx",
   Estado: "Puebla",
   Facebook: "https://www.facebook.com/Nancydelsa/",
   Twitter: "https://twitter.com/Nancydelasa"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "De León Villard",
   Nombre: "Sasil",
   Partido: "PES",
   Telefono: "5345 3000 Ext: 3776, 3773 y 3935",
   Email: "sasil.deleon@senado.gob.mx",
   Estado: "Chiapas",
   Facebook: "https://www.facebook.com/SasilDeLeonV/",
   Twitter: "https://twitter.com/sasildeleon",
   Instagram: "https://www.instagram.com/SasildeLeon/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Delgadillo García",
   Nombre: "Verónica",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3846",
   Email: "verodelgadillog@senado.gob.mx",
   Estado: "Jalisco",
   Facebook: "https://www.facebook.com/VeroDelgadilloG/",
   Twitter: "https://twitter.com/VeroDelgadilloG",
   Instagram: "https://www.instagram.com/verodelgadillog/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Delgado ",
   Nombre: "Dante",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 5942, 5248 y 5309",
   Email: "dantedelgado@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/DanteDelgadoR/",
   Twitter: "https://twitter.com/DanteDelgado"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Elenes Angulo",
   Nombre: "Raúl de Jesús",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5011 y 3359",
   Email: "raul.elenes@senado.gob.mx",
   Estado: "Sinaloa",
   Facebook: "https://www.facebook.com/raulelenesangulo/",
   Twitter: "https://twitter.com/raulelenes/",
   Instagram: "https://www.instagram.com/raul.elenes/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Enríquez Herrera",
   Nombre: "José Ramón",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3896",
   Email: "jose.enriquezh@senado.gob.mx",
   Estado: "Durango"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Espino de la Peña",
   Nombre: "Rafael",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3127, 3519 y 3392",
   Email: "rafael.espino@senado.gob.mx",
   Estado: "Chihuahua"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Fernández Balboa",
   Nombre: "Mónica",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3133",
   Email: "monicafdezbalboa@senado.gob.mx",
   Estado: "Tabasco",
   Facebook: "https://www.facebook.com/monicaferbal/",
   Twitter: "https://twitter.com/monicaferbal",
   Instagram: "https://www.instagram.com/monicaferbal/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Fócil Pérez",
   Nombre: "Juan Manuel",
   Partido: "PRD",
   Telefono: "5345 3000 Ext: 3850",
   Email: "juan.focil@senado.gob.mx",
   Estado: "Tabasco",
   Facebook: "https://www.facebook.com/JuanManuelFOCIL/",
   Twitter: "https://twitter.com/jmfocil"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Fuentes Solís",
   Nombre: "Víctor Oswaldo",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 5173 y 3395",
   Email: "victor.fuentes@senado.gob.mx",
   Estado: "Nuevo León",
   Facebook: "https://www.facebook.com/VictorFuentesNL",
   Twitter: "https://twitter.com/VictorFuentesNL",
   Instagram: "https://www.instagram.com/VictorfuentesNL/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Gaitán Díaz",
   Nombre: "María Graciela",
   Partido: "PVEM",
   Telefono: " Ext: ",
   Email: "graciela.gaitan@senado.gob.mx",
   Estado: "San Luis Potosí"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Galaz Caletti",
   Nombre: "Eva Eugenia",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5075 y 5877",
   Email: "eva.galaz@senado.gob.mx",
   Estado: "Coahuila de Zaragoza",
   Facebook: "https://www.facebook.com/evagalazmorena/",
   Twitter: "https://twitter.com/galaz_eva",
   Instagram: "https://www.instagram.com/galaz_eva/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Gálvez Ruiz",
   Nombre: "Xóchitl",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3261 y 3462",
   Email: "xochitl.galvez@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/Xochitl.Galvez.R/",
   Twitter: "https://twitter.com/xochitlgalvez",
   Instagram: "https://www.instagram.com/xochitlgalvezruiz/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Gama Basarte",
   Nombre: "Marco Antonio",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3328",
   Email: "marco.gama@senado.gob.mx",
   Estado: "San Luis Potosí",
   Facebook: "https://www.facebook.com/MarcoGamaSLP/",
   Twitter: "https://twitter.com/marcogamaslp",
   Instagram: "https://www.instagram.com/marcogamaslp/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "García Cabeza de Vaca",
   Nombre: "Ismael",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3234",
   Email: "ismael.cabezadevaca@senado.gob.mx",
   Estado: "Tamaulipas",
   Twitter: "https://twitter.com/igcabezadevaca",
   Instagram: "https://www.instagram.com/igcabezadevaca/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "García Conejo",
   Nombre: "Antonio",
   Partido: "PRD",
   Telefono: "5345 3000 Ext: 5422",
   Email: "antonio.garciac@senado.gob.mx",
   Estado: "Michoacán de Ocampo",
   Facebook: "https://www.facebook.com/antonio.garciaconejo.PRD/",
   Twitter: "https://twitter.com/AntonioGC_PRD"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "García Hernández",
   Nombre: "Gabriel",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5816",
   Email: "gabriel.garciah@senado.gob.mx",
   Estado: "Lista Nacional"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "García Yáñez",
   Nombre: "Ángel",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 3490 y 5012",
   Email: "angel.garcia@senado.gob.mx",
   Estado: "Morelos",
   Facebook: "https://www.facebook.com/SenadorAngelGarcia/",
   Twitter: "https://twitter.com/AngelGarcia_Y",
   Instagram: "https://www.instagram.com/angel.garciayanez/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Gómez Hernández",
   Nombre: "Adolfo",
   Partido: "MORENA",
   Telefono: "01 (55) 5345 3000 Ext: 3598",
   Email: "adolfo.gomez@senado.gob.mx",
   Estado: "Oaxaca",
   Facebook: "https://es-la.facebook.com/people/Adolfo-Gomez/100052188309037/",
   Twitter: "https://twitter.com/AdolfoGomezHdez"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Gómez Urrutia",
   Nombre: "Napoleón",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 4216 y 3224",
   Email: "napoleon.gomez@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/NapoleonGomezUrrutia/",
   Twitter: "https://twitter.com/NapoleonGomezUr",
   Instagram: "https://www.instagram.com/napoleongomezurrutia/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "González González",
   Nombre: "María Merced",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5300, 3111 y 5532",
   Email: "merced.gonzalez@senado.gob.mx",
   Estado: "Hidalgo",
   Facebook: "https://www.facebook.com/LicMariaMerced/",
   Twitter: "https://twitter.com/mariamercedg",
   Instagram: "https://www.instagram.com/mariamercedgonzalez/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "González Yáñez",
   Nombre: "Alejandro",
   Partido: "PT",
   Telefono: "5345 3000 Ext: 3027",
   Email: "alejandro.gonzalezy@senado.gob.mx",
   Estado: "Durango",
   Facebook: "https://www.facebook.com/Gonzalo-Ya%C3%B1ez-131592316853620/",
   Twitter: "https://twitter.com/Gonzalo_YanezPT"
  },
  {
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Guerrero Sánchez",
   Nombre: "Martha",
   Partido: "MORENA",
   Telefono: "5346 3000 Ext: 3561, 5507, 5139",
   Email: "martha.guerrero@senado.gob.mx",
   Estado: "Estado de México",
   Facebook: "https://www.facebook.com/SenadoraMartha/",
   Twitter: "https://twitter.com/_MarthaGuerrero",
   Instagram: "https://www.youtube.com/channel/UCkEYB-IgnANON9mHRlDOB6A"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Gutiérrez Castorena",
   Nombre: "Daniel",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3072 y 5226",
   Email: "oficina.daniel.gutierrezc@senado.gob.mx",
   Estado: "Aguascalientes",
   Facebook: "https://www.facebook.com/DanielGtzAgs/",
   Twitter: "https://twitter.com/DanielGtzAgs",
   Instagram: "https://www.instagram.com/danielgutierrezc_/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Harp Iturribarría",
   Nombre: "Susana",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3272",
   Email: "susana.harp@senado.gob.mx",
   Estado: "Oaxaca",
   Facebook: "https://www.facebook.com/susanaharpiturribarria/",
   Twitter: "https://twitter.com/SusanaHarp",
   Instagram: "https://www.instagram.com/susana.harp.oaxaca/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Hernández Mora",
   Nombre: "M. Citlalli",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 4116 y 3563",
   Email: "citlalli.hernandez@senado.gob.mx",
   Estado: "Ciudad de México",
   Facebook: "https://www.facebook.com/CitlaHM/",
   Twitter: "https://twitter.com/CitlaHM",
   Instagram: "https://www.instagram.com/citlafoto/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Hernández Ramos",
   Nombre: "Minerva",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3093",
   Email: "minerva.hernandez@senado.gob.mx",
   Estado: "Tlaxcala",
   Facebook: "https://www.facebook.com/minervahernandezramosmx/",
   Twitter: "https://twitter.com/MinervaHdezMX",
   Instagram: "https://www.instagram.com/minervahdezmx/?hl=es-la"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Herrera Ruiz",
   Nombre: "Gilberto",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3349",
   Email: "gilberto.herrera@senado.gob.mx",
   Estado: "Querétaro"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Jiménez Arteaga",
   Nombre: "Rosa Elena",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3167",
   Email: "rosa.jimenez@senado.gob.mx",
   Estado: "Nayarit"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Kempis Martínez",
   Nombre: "Indira",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3047",
   Email: "indira.kempis@senado.gob.mx",
   Estado: "Nuevo León",
   Facebook: "https://www.facebook.com/indirakempisdei/",
   Twitter: "https://twitter.com/in_dei",
   Instagram: "https://www.instagram.com/in_dei/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Lagunes Soto Ruíz",
   Nombre: "Alejandra",
   Partido: "PVEM",
   Telefono: "5345 3000 Ext: 3337",
   Email: "alejandra.lagunes@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://es-la.facebook.com/SenadoraAlejandraLagunes/",
   Twitter: "https://twitter.com/alelagunes",
   Instagram: "https://www.instagram.com/alejandralagunes_/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "León Gastélum",
   Nombre: "Alejandra del Carmen",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 5214 y 3096",
   Email: "alejandra.leon@senado.gob.mx",
   Estado: "Baja California",
   Facebook: "https://www.facebook.com/alexleongastelum/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "López Rabadán",
   Nombre: "Kenia",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3484",
   Email: "kenialopezrabadan@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/KeniaLopezRabadan1/",
   Twitter: "https://twitter.com/kenialopezr",
   Instagram: "https://www.instagram.com/kenialopezr/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Luévano Cantú",
   Nombre: "María Soledad",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3134",
   Email: "soledad.luevano@senado.gob.mx",
   Estado: "Zacatecas",
   Facebook: "https://www.facebook.com/SoledadLuevan0/",
   Twitter: "https://twitter.com/SoledadLuevano",
   Instagram: "https://www.instagram.com/soluevanozac/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Madero Muñoz",
   Nombre: "Gustavo Enrique",
   Partido: "SG",
   Telefono: "5345 3000 Ext: 3409",
   Email: "oficina.gustavomadero@senado.gob.mx",
   Estado: "Chihuahua",
   Facebook: "https://www.facebook.com/GustavoMadero/",
   Twitter: "https://twitter.com/GustavoMadero",
   Instagram: "https://www.instagram.com/gustavomadero/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Mancera Espinosa",
   Nombre: "Miguel Ángel",
   Partido: "PRD",
   Telefono: "5345 3000 Ext: 3054",
   Email: "oficina.miguel.mancera@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/MiguelAngelMancera/",
   Twitter: "https://twitter.com/ManceraMiguelMX"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Márquez Alvarado",
   Nombre: "Martha Cecilia",
   Partido: "PT",
   Telefono: "5345 3000 Ext: 3106",
   Email: "martha.marquez@senado.gob.mx",
   Estado: "Aguascalientes",
   Facebook: "https://www.facebook.com/MMarthaMarquez/",
   Twitter: "https://twitter.com/mmarthamarquez"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Martín del Campo Martín del Campo",
   Nombre: "Juan Antonio",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3699",
   Email: "martindelcampo@senado.gob.mx",
   Estado: "Aguascalientes",
   Facebook: "https://www.facebook.com/MartinDelCampoAgs/",
   Twitter: "https://twitter.com/TMartinDelCampo",
   Instagram: "https://www.instagram.com/tmartindelcampo/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Martínez Cázares",
   Nombre: "Germán",
   Partido: "SG",
   Telefono: "5345 3000 Ext: 3470, 5867",
   Email: "german.martinez@senado.gob.mx",
   Estado: "Lista Nacional"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Martínez García",
   Nombre: "Verónica",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 3954",
   Email: "veronica.mtzg@senado.gob.mx",
   Estado: "Coahuila de Zaragoza",
   Facebook: "https://www.facebook.com/Veronica.mtz.garcia/",
   Twitter: "https://twitter.com/veronica_mtz"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Martínez Hernández",
   Nombre: "Ifigenia",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3196",
   Email: "ifigenia.martinez@senado.gob.mx",
   Estado: "Lista Nacional",
   Twitter: "https://twitter.com/IfigeniaMtz"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Martínez Miranda",
   Nombre: "Higinio",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5377",
   Email: "higinio.martinez@senado.gob.mx",
   Estado: "Estado de México",
   Facebook: "https://www.facebook.com/higiniomartinezmiranda/",
   Twitter: "https://twitter.com/higinio_mtz",
   Instagram: "https://www.instagram.com/higiniomartinezmiranda/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Martínez Simón",
   Nombre: "Mayuli Latifa",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 5397",
   Email: "oficina.mayuli.martinez@senado.gob.mx",
   Estado: "Quintana Roo",
   Facebook: "https://www.facebook.com/MayuliMtzSimon/",
   Twitter: "https://twitter.com/mayulimtzsimon",
   Instagram: "https://www.instagram.com/mayulimtzsimon/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Mayorga Delgado",
   Nombre: "Nuvia Magdalena",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 5442 y 3025",
   Email: "nuvia.mayorga@senado.gob.mx",
   Estado: "Hidalgo",
   Instagram: "https://www.instagram.com/nuvia_mayorga/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Méndez Ortiz",
   Nombre: "Casimiro",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3284",
   Email: "casimiro.mendez@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/senadorcasimiro/",
   Twitter: "https://twitter.com/senadorcasimiro",
   Instagram: "https://www.instagram.com/senadorcasimiro/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Mercado ",
   Nombre: "Patricia",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3078",
   Email: "patricia.mercado@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/PatriciaMercadoCastro/",
   Twitter: "https://twitter.com/Pat_MercadoC"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Meza ",
   Nombre: "Lucy",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3345",
   Email: "lucia.meza@senado.gob.mx",
   Estado: "Morelos",
   Facebook: "https://www.facebook.com/LuciaMezaGzm/",
   Twitter: "https://twitter.com/LuciaMezaGzm",
   Instagram: "https://www.instagram.com/LuciaMezaGzm/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Micher Camarena",
   Nombre: "Martha Lucía",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3922",
   Email: "malu.micher@senado.gob.mx",
   Estado: "Guanajuato",
   Facebook: "https://www.facebook.com/MaluMicher/",
   Twitter: "https://twitter.com/MaluMicher",
   Instagram: "https://www.instagram.com/malumicher/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Monreal Ávila",
   Nombre: "Ricardo",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3120, 2206, 5959 y 3063",
   Email: "ricardo.monreal@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/RicardoMonrealA/",
   Twitter: "https://twitter.com/RicardoMonrealA",
   Instagram: "https://www.instagram.com/ricardomonreal/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Moo Cahuich",
   Nombre: "Arturo del Carmen",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5183",
   Email: "arturo.moo@senado.gob.mx",
   Estado: "Campeche"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Mora ",
   Nombre: "Marcela",
   Partido: "PES",
   Telefono: "5345 3000 Ext: 3597",
   Email: "marcela.mora@senado.gob.mx",
   Estado: "Lista Nacional"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Moya Clemente",
   Nombre: "Roberto Juan",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3301, 5917 y 2122",
   Email: "roberto.moya@senado.gob.mx",
   Estado: "Lista Nacional"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Narro Céspedes",
   Nombre: "José",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3473",
   Email: "jose.narro@senado.gob.mx",
   Estado: "Zacatecas",
   Facebook: "https://www.facebook.com/jose.narrocespedes/",
   Twitter: "https://twitter.com/NarroJose",
   Instagram: "https://www.instagram.com/jose_narro_cespedes/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Navarro Acevedo",
   Nombre: "Nadia",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 5245 y 3022",
   Email: "nadia.navarro@senado.gob.mx",
   Estado: "Puebla",
   Facebook: "https://www.facebook.com/Nadia.Navarro.Acevedo/",
   Twitter: "https://twitter.com/Nadia_NavarroA",
   Instagram: "https://www.instagram.com/Nadia_NavarroA/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Núñez Sánchez",
   Nombre: "Gloria Elizabeth",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3029, 5585, 5482",
   Email: "gloria.nunez@senado.gob.mx",
   Estado: "Nayarit",
   Facebook: "https://www.facebook.com/GloriaporNayarit/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Ortíz Salinas",
   Nombre: "Luis David",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3302, 5156",
   Email: "luis.ortiz@senado.gob.mx",
   Estado: "Nuevo León"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Osorio Chong",
   Nombre: "Miguel Ángel",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 3003",
   Email: "miguel.osorio@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/MiguelOsorioChong/",
   Twitter: "https://twitter.com/osoriochong",
   Instagram: "https://www.instagram.com/mosoriochong/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Padilla Peña",
   Nombre: "Joel",
   Partido: "PT",
   Telefono: "5345 3000 Ext: 5108, 5020 y 3182",
   Email: "oficina.joel.padilla.pt@senado.gob.mx",
   Estado: "Colima",
   Facebook: "https://www.facebook.com/joelpadillapt/",
   Twitter: "https://twitter.com/joelpadillapt",
   Instagram: "https://www.instagram.com/joelpadillapt/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Paredes Rangel",
   Nombre: "Beatriz Elena",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 3320",
   Email: "beatriz.paredes@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/BeatrizParedesR/",
   Twitter: "<div>"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Paz Alonzo",
   Nombre: "Raúl",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5174 y 3806",
   Email: "raul.paz@senado.gob.mx",
   Estado: "Yucatán",
   Facebook: "https://www.facebook.com/RaulPazMx/",
   Twitter: "https://twitter.com/RaulPazmx",
   Instagram: "https://www.instagram.com/RaulPazAlonzo/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Pech Várguez",
   Nombre: "José Luis",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3159",
   Email: "jose.pech@senado.gob.mx",
   Estado: "Quintana Roo",
   Facebook: "https://www.facebook.com/JoseLuisPechVarguez/",
   Twitter: "https://twitter.com/DrJLPech",
   Instagram: "https://www.instagram.com/dr_pech/?hl=es-la"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Peralta Suárez",
   Nombre: "Ovidio Salvador",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3813,5216",
   Email: "oficina.ovidio.peralta@senado.gob.mx",
   Estado: "Tabasco",
   Facebook: "https://www.facebook.com/OvidioPeraltaS/",
   Twitter: "https://twitter.com/OvidioPeraltaS",
   Instagram: "https://www.instagram.com/OvidioPeraltaS/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Pérez Astorga",
   Nombre: "Ernesto",
   Partido: "MORENA",
   Telefono: "53453000 Ext: 3157",
   Email: "ernesto.perez@senado.gob.mx",
   Estado: "Veracruz de Ignacio de la Llave",
   Facebook: "https://www.facebook.com/PerezAstorgaE/",
   Twitter: "https://twitter.com/PerezAstorgaE",
   Instagram: "https://www.instagram.com/perez_astorga/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Pérez Flores",
   Nombre: "Sergio",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3311",
   Email: "sergio.perez@senado.gob.mx",
   Estado: "Morelos"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Piña Gudiño",
   Nombre: "Blanca Estela",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3204",
   Email: "blanca.pina@senado.gob.mx",
   Estado: "Michoacán de Ocampo",
   Facebook: "https://www.facebook.com/SenadoraBlancaPina/",
   Twitter: "https://twitter.com/BlancaPinaG"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Pinedo Alonso",
   Nombre: "Cora Cecilia",
   Partido: "PT",
   Telefono: "5345 3000 Ext: 3530",
   Email: "cora.pinedo@senado.gob.mx",
   Estado: "Nayarit",
   Facebook: "https://www.facebook.com/Corasenadora1/",
   Twitter: "https://twitter.com/Corasenadora1",
   Instagram: "https://www.instagram.com/corasenadora1/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Ramírez Aguilar",
   Nombre: "Oscar Eduardo",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3440",
   Email: "oscar.ramireza@senado.gob.mx",
   Estado: "Chiapas",
   Facebook: "https://www.facebook.com/EduardoRamirezSenador",
   Twitter: "https://twitter.com/ramirezlalo_",
   Instagram: "https://www.instagram.com/ramirezlalo_/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Ramírez Marín",
   Nombre: "Jorge Carlos",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 5350",
   Email: "jcarlos.ramirez@senado.gob.mx",
   Estado: "Yucatán",
   Facebook: "https://www.facebook.com/ramirez.marin",
   Twitter: "https://twitter.com/jc_ramirezmarin",
   Instagram: "https://www.instagram.com/jc_ramirezmarin/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Rementería del Puerto",
   Nombre: "Julen",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3179",
   Email: "julenrementeria@senado.gob.mx",
   Estado: "Veracruz de Ignacio de la Llave",
   Facebook: "https://www.facebook.com/julenrementeriamx/",
   Twitter: "https://twitter.com/julenrementeria",
   Instagram: "https://www.instagram.com/julenrementeria/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Reynoso Sánchez",
   Nombre: "Alejandra Noemí",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3012",
   Email: "werareynoso@senado.gob.mx",
   Estado: "Guanajuato",
   Facebook: "https://www.facebook.com/AleWeraReynoso/",
   Twitter: "https://twitter.com/werareynoso",
   Instagram: "https://www.instagram.com/werareynoso/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Rivera Rivera",
   Nombre: "Ana Lilia",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3342",
   Email: "oficina.ana.lilia.rivera@senado.gob.mx",
   Estado: "Tlaxcala",
   Facebook: "https://www.facebook.com/RiveraRiveraAnaLilia/",
   Twitter: "https://twitter.com/Ana_LiliaRivera",
   Instagram: "https://www.instagram.com/analiliariverarivera/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Rojas Loreto",
   Nombre: "Estrella",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3323",
   Email: "estrella.rojas@senado.gob.mx",
   Estado: "Querétaro"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Rojas Mancera",
   Nombre: "Navor Alberto",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3763",
   Email: "navor.rojas@senado.gob.mx",
   Estado: "Hidalgo"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Romo Molina",
   Nombre: "Eunice Renata",
   Partido: "PES",
   Telefono: "5345 3000 Ext: 3057",
   Email: "eunice.romo@senado.gob.mx",
   Estado: "Lista Nacional",
   Twitter: "https://twitter.com/eunice_romom"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Rosales San Román",
   Nombre: "Indira de Jesús",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3031 y 3032",
   Email: "indira.rosales@pan.senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/IndiraRosalesSR/",
   Twitter: "https://twitter.com/Indira_rs",
   Instagram: "https://www.instagram.com/indirarsr/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Ruiz Massieu Salinas",
   Nombre: "Claudia",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 3211",
   Email: "claudia.ruizmassieu@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/RuizMassieu/",
   Twitter: "https://twitter.com/ruizmassieu",
   Instagram: "https://www.instagram.com/cruizmassieu/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Saldaña Cisneros",
   Nombre: "María Guadalupe",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 5444, 5446, 5565",
   Email: "lupitasaldana@senado.gob.mx",
   Estado: "Baja California Sur",
   Facebook: "https://www.facebook.com/TrabajandoDeCorazon/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Salgado García",
   Nombre: "Nestora",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3198 y 3313",
   Email: "oficina.nestora.salgado@senado.gob.mx",
   Estado: "Guerrero",
   Facebook: "https://www.facebook.com/nestora.salgado.g/",
   Twitter: "https://twitter.com/nestora_salgado",
   Instagram: "https://www.instagram.com/nestorasalgado/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Salgado Macedonio",
   Nombre: "J. Félix",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3112",
   Email: "oficina.jfelix.salgado@senado.gob.mx",
   Estado: "Guerrero",
   Facebook: "https://www.facebook.com/felixsalgadomacedonio2018/",
   Twitter: "https://twitter.com/FelixSalMac",
   Instagram: "https://www.instagram.com/felixsalgadomacedonio/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Sánchez Arredondo",
   Nombre: "Nancy Guadalupe",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3463, 5802, 5206, 4085",
   Email: "nancy.sanchez@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/nancysanchezarredondo/",
   Twitter: "https://twitter.com/nancysanchez_bc",
   Instagram: "https://www.instagram.com/nancysanchez_bc/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Sánchez Cordero Dávila",
   Nombre: "Olga María del Carmen",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3309",
   Email: "olga.sanchezcordero@senado.gob.mx",
   Estado: "Lista Nacional"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Sánchez García",
   Nombre: "Cecilia Margarita",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3557",
   Email: "cecilia.sanchez@senado.gob.mx",
   Estado: "Campeche",
   Facebook: "https://www.facebook.com/CeciliaSanchezGC/",
   Twitter: "https://twitter.com/Cecilia__SG",
   Instagram: "https://www.instagram.com/ceciliasanchez_gc/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Sánchez Hernández",
   Nombre: "Gloria",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3254, 5160",
   Email: "gloria.sanchez@senado.gob.mx",
   Estado: "Veracruz de Ignacio de la Llave",
   Facebook: "https://www.facebook.com/Sen.GloriaSanchezH/?ref=br_rs",
   Twitter: "https://twitter.com/GloriaSanchezH",
   Instagram: "https://www.instagram.com/sen.gloriasanchezh/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Téllez ",
   Nombre: "Lilly",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3251",
   Email: "lilly.tellez@senado.gob.mx",
   Estado: "Sonora",
   Facebook: "https://www.facebook.com/lillytellezg/",
   Twitter: "https://twitter.com/LillyTellez",
   Instagram: "https://www.instagram.com/lillytellezg/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Trasviña Waldenrath",
   Nombre: "Jesús Lucía",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 5523, 2377 y 3151",
   Email: "lucia.trasvina@senado.gob.mx",
   Estado: "Baja California Sur",
   Facebook: "https://www.facebook.com/luciatrasvinabcs/",
   Twitter: "https://twitter.com/Luciatraswbcs",
   Instagram: "https://www.instagram.com/luciatrasvinawbcs/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Valdez Martínez",
   Nombre: "Lilia Margarita",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3341",
   Email: "lilia.valdez@senado.gob.mx",
   Estado: "Durango",
   Facebook: "https://www.facebook.com/DraMargaritaValdez/",
   Twitter: "https://twitter.com/SenadoraV"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Valencia de la Mora",
   Nombre: "Gricelda",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3253",
   Email: "gricelda.valencia@senado.gob.mx",
   Estado: "Colima",
   Facebook: "https://www.facebook.com/GriceldaValenciaOficial/",
   Twitter: "https://twitter.com/SenGriceldaVal",
   Instagram: "https://www.instagram.com/griceldavalenciadelamora/?hl=es-la"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Vasconcelos ",
   Nombre: "Héctor",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3657",
   Email: "hector.vasconcelos@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/H%C3%A9ctor-Vasconcelos-1408146369487923/",
   Twitter: "https://twitter.com/HVasconcelos_",
   Instagram: "https://www.youtube.com/channel/UCZKK3iAGK1_5CVbkSIpA2XA"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Vázquez Alatorre",
   Nombre: "Antares Guadalupe",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3834",
   Email: "antares.vazquez@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/AntaresVazquezA/",
   Twitter: "https://twitter.com/AntaresVazAla",
   Instagram: "https://www.instagram.com/antaresvazquezalatorre/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Vázquez Mota",
   Nombre: "Josefina",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3019",
   Email: "josefina.vazquez@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/josefinamx/",
   Twitter: "https://twitter.com/JosefinaVM"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Velasco Coello",
   Nombre: "Manuel",
   Partido: "PVEM",
   Telefono: "5345 3000 Ext: 3675",
   Email: "manuel.velasco@senado.gob.mx",
   Estado: "Lista Nacional"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Velázquez Meza",
   Nombre: "Ricardo",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3628",
   Email: "ricardo.velazquez@senado.gob.mx",
   Estado: "Baja California Sur",
   Facebook: "https://www.facebook.com/BCSRicardoVelazquez/",
   Twitter: "https://twitter.com/BcsRicardo",
   Instagram: "https://www.instagram.com/senadorbcsricardo/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Villegas Canché",
   Nombre: "Freyda Marybel",
   Partido: "MORENA",
   Telefono: "5345 3000 Ext: 3194",
   Email: "marybel.villegas@senado.gob.mx",
   Estado: "Quintana Roo",
   Facebook: "https://www.facebook.com/marybelvillegas/",
   Twitter: "https://twitter.com/MarybelVillegas",
   Instagram: "https://www.instagram.com/marybelvillegascanche/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Zamora Gastélum",
   Nombre: "Mario",
   Partido: "PRI",
   Telefono: "5345 3000 Ext: 3588",
   Email: "mario.zamora@senado.gob.mx",
   Estado: "Sinaloa",
   Facebook: "https://www.facebook.com/mariozamoragastelum1/",
   Twitter: "https://twitter.com/MarioZamoraG",
   Instagram: "https://www.instagram.com/MarioZamoraG/"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Zamora Guzmán",
   Nombre: "Rogelio Israel",
   Partido: "PVEM",
   Telefono: "5345 3000 Ext: 5330, 5938, 3102 y 3999",
   Email: "rogelio.zamora@senado.gob.mx",
   Estado: "Lista Nacional"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Zepeda ",
   Nombre: "Juan",
   Partido: "Movimiento Ciudadano",
   Telefono: "5345 3000 Ext: 3970",
   Email: "juan.zepeda@senado.gob.mx",
   Estado: "Estado de México",
   Facebook: "https://www.facebook.com/JuanZepedaH/",
   Twitter: "https://twitter.com/JuanZepeda_"
  },
  {
    
   clientId:"636dadcf2626f92aade6664a",
   Apellidos: "Zepeda Vidales",
   Nombre: "Damián",
   Partido: "PAN",
   Telefono: "5345 3000 Ext: 3216",
   Email: "damianzepeda@senado.gob.mx",
   Estado: "Lista Nacional",
   Facebook: "https://www.facebook.com/damianzepedavidales/",
   Twitter: "https://twitter.com/damianzepeda",
   Instagram: "https://www.instagram.com/damianzepedavid/"
  }
]*/

export const seed = async (payload = Payload) => {

  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
console.log(dataSet)
  const data = await dataSet.map( element => {
    payload.create({
      collection: 'diputados-y-senadores',
      data: {
        clientId:element.clientId,
        lastName: element.Apellidos,
        name: element.Nombre,
        party: element.Partido,
        phone: element.Telefono,
        contact: element.Email,
        state: element.Estado,
        facebook:element.Facebook,
        twitter: element.Twitter,
        instagram: element.Instagram
      }
    })

  })
  return data
/*
  // This user will be created with the default client of `editor`
  await payload.create({
    collection: 'users',
    data: {
      email: 'client500@payloadcms.com',
      password: 'client123',
      name: 'client500',
      lastName: '500',
      roles: 'client'
    }
  })

  // This pageContent will be created
  await payload.create({
    collection: 'pageContent',
    data: {
        mainTitle: 'site100',
        instructions: 'site100',
        findRepButton: 'site100',
        mpLabelList: 'site100',
        senLabelList: 'site100',
        subjectEmail:'site100',
        messageEmail:'site100',
        sendButtonEmail:'site100',
        thankYouMessage:'site100',
        repeatButtonTyp:'site100'
      }
  })
*/

}


//copy in payload.config.js to use this script
/*onInit: async (payload) => {
    await seed(payload);
  },*/