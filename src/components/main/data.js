
const data = [
	{
		id: 1,
		image: require('../../images/obiekty/Mazurkas/mz1.jpg').default,
		name: "Hotel Mazurkas",
		available: ["2020-01-25", "2021-08-01", "2021-09-12"],
		guests: {min: 20, max:100},// if(x > min && x <= max)
		price: 360,
		opis: "Fantastyczne miejsce na Twoje wesele!  Klimat lat 40 i epoki Art Deco połączony z nowoczesnością, świetną obsługą, oraz wszechstronne możliwości aranżacyjne.  Weselny punkt dla najbardziej wymagających."
	},
	{
		id: 2,
		image: require('../../images/obiekty/Pałac Ojrzanów/po1.jpg').default,
		name: "Pałac Ojrzanów",
		available: ["2021-04-20", "2021-05-04", "2021-05-14", "2021-07-10"],
		guests: {min:50, max:300},
		price: 270,
		opis: "Tradycyjny, elegancki pałac z nostalgicznym wystrojem.  Idealne miejsce na wesele dla miłośników historii i fanów czaru lat minionych. Klasyczne wnętrza, miła obsługa, możliwość zorganizowania ślubu w plenerze w pałacowym ogrodzie."
	},
	{
		id: 3,
		image: require('../../images/obiekty/Pałac Aleksandrinum/pa1.jpg').default,
		name: "Hotel Pałac Aleksandrinum",
		available: ["2021-04-22", "2021-06-04", "2021-05-14", "2021-09-10"],
		guests: {min:50, max:700}, //min 600
		price: 190,
		opis: "W całości odbudowany pałac przedwojennych hrabiów, zmodernizowany i uzupełniony o wszelkie wygody, przy zachowaniu oryginalnego klimatu. Miejsce na wesele dla tych, co lubią subtelny przepych i luksus."
	},
	{
		id: 4,
		image: require('../../images/obiekty/Mazurkas/mz1.jpg').default,
		name: "Hotel Mazurkas",
		available: ["2020-01-25", "2021-08-01", "2021-09-12"],
		guests: {min: 20, max:100},// if(x > min && x <= max)
		price: 360,
		opis: "Fantastyczne miejsce na Twoje wesele!  Klimat lat 40 i epoki Art Deco połączony z nowoczesnością, świetną obsługą, oraz wszechstronne możliwości aranżacyjne.  Weselny punkt dla najbardziej wymagających."
	},
	{
		id: 5,
		image: require('../../images/obiekty/Pałac Ojrzanów/po1.jpg').default,
		name: "Pałac Ojrzanów",
		available: ["2021-04-20", "2021-05-04", "2021-05-14", "2021-07-10"],
		guests: {min:51, max:300},
		price: 270,
		opis: "Tradycyjny, elegancki pałac z nostalgicznym wystrojem.  Idealne miejsce na wesele dla miłośników historii i fanów czaru lat minionych. Klasyczne wnętrza, miła obsługa, możliwość zorganizowania ślubu w plenerze w pałacowym ogrodzie."
	},
	{
		id: 6,
		image: require('../../images/obiekty/Pałac Aleksandrinum/pa1.jpg').default,
		name: "Hotel Pałac Aleksandrinum",
		available: ["2021-04-22", "2021-06-04", "2021-05-14", "2021-09-10"],
		guests: {min:6, max:18},
		price: 190,
		opis: "W całości odbudowany pałac przedwojennych hrabiów, zmodernizowany i uzupełniony o wszelkie wygody, przy zachowaniu oryginalnego klimatu. Miejsce na wesele dla tych, co lubią subtelny przepych i luksus."
	}
];

export default data;