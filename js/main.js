$(document).ready(function () {
	$('#example').DataTable({
		"dom": '<"top"Bf>rt<"bottom"lip><"clear">',
		// dom: 'Bfrtip',
		buttons: [
			'copyHtml5',
			'excelHtml5',
			'csvHtml5',
			'pdfHtml5'
		]
	});
});

const itemsDiv = document.querySelector(".items");
const itemsButton = document.querySelector(".plusContainer");
const itemsButton2 = document.querySelector(".minusContainer");
const tendererDiv = document.querySelector(".tenderer");
const tendererButton = document.querySelector("#ten");
const tendererButton2 = document.querySelector("#ten2");
const mileDiv = document.querySelector(".milestones");
const mileButton = document.querySelector("#mile");
const mileButton2 = document.querySelector("#mile2");
const amendDiv = document.querySelector(".amend");
const amendButton = document.querySelector("#amend");
const amendButton2 = document.querySelector("#amend2");
let tenderInput1 = 1;
let tendererCount = 1;
let mileCount = 1;
let amendCount = 1;

function createItem() {
	if (tenderInput1 <= 1) {
		itemsButton2.setAttribute("disabled", " ");
	} else {
		itemsButton2.removeAttribute("disabled");
	}
	itemsDiv.innerHTML = "";
	for (let i = 0; i < tenderInput1; i++) {
		itemsDiv.innerHTML += `<div class="row">
							<div class="col-sm-6 rightItem">
								<div class="form-group inputs">
									<input type="text" class="form-control" id="item${i + 1}"
										placeholder="Item ${i + 1}">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group inputs float-right">
									<input type="text" class="form-control" id="item${i + 1}Class" placeholder="Item ${i + 1} Classification">
								</div>
							</div>
						</div>`;
	}
}


function createInput(count, button, div, id) {
	if (count <= 1) {
		button.setAttribute("disabled", " ");
	} else {
		button.removeAttribute("disabled");
	}
	div.innerHTML = "";
	for (let i = 0; i < count; i++) {
		div.innerHTML += `<div class="form-group inputs"><input type="text" class="form-control" id="${id}${i + 1}" placeholder="${id}${i + 1}"></div>`;
	}
}

itemsButton.addEventListener("click", (e) => {
	e.preventDefault();
	tenderInput1++;
	createItem();
});
itemsButton2.addEventListener("click", (e) => {
	e.preventDefault();
	tenderInput1--;
	createItem();
});
tendererButton.addEventListener("click", (e) => {
	e.preventDefault();
	tendererCount++;
	createInput(tendererCount, tendererButton2, tendererDiv, "tenderer");
});
tendererButton2.addEventListener("click", (e) => {
	e.preventDefault();
	tendererCount--;
	createInput(tendererCount, tendererButton2, tendererDiv, "tenderer");
});

mileButton.addEventListener("click", (e) => {
	e.preventDefault();
	mileCount++;
	createInput(mileCount, mileButton2, mileDiv, "milestone");
});
mileButton2.addEventListener("click", (e) => {
	e.preventDefault();
	mileCount--;
	createInput(mileCount, mileButton2, mileDiv, "milestone");
});
amendButton.addEventListener("click", (e) => {
	e.preventDefault();
	amendCount++;
	createInput(amendCount, amendButton2, amendDiv, "amendment");
});
amendButton2.addEventListener("click", (e) => {
	e.preventDefault();
	amendCount--;
	createInput(amendCount, amendButton2, amendDiv, "amendment");
});


const selectState = document.querySelector("#state");
const selectLga = document.querySelector("#lga");
const selectCountry = document.querySelector("#country");
selectCountry.length = 0;





$(".tel").intlTelInput({
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});

const data = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    if (response.data.Error) {
      return [];
    } else {
		let option;
		response.data.forEach((result, i) => {
			option = document.createElement("option");
			option.text = response.data[i].name;
			option.value = response.data[i].name;
			selectCountry.add(option);
		})
		if (response) {
		$('.picker1').selectpicker();
		}
	}
  }

data();



// Get rid of small loading animation
[...document.querySelectorAll(".input-location-dependant")].forEach(element =>
	element.classList.toggle("d-none")
);

// Function to set multiple attributes at once
const setAttributes = (el, attrs) => {
	for (var key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
};

const toggleLGA = target => {
	let state = target.value,                                                         // Get value of state
		selectLGAOption = ["Select from list"],                                            // Define this once so as not to repeat it multiple times
		lgaList = {
			Abia: [
				"Aba North",
				"Aba South",
				"Arochukwu",
				"Bende",
				"Ikwuano",
				"Isiala Ngwa North",
				"Isiala Ngwa South",
				"Isuikwuato",
				"Obi Ngwa",
				"Ohafia",
				"Osisioma",
				"Ugwunagbo",
				"Ukwa East",
				"Ukwa West",
				"Umuahia North",
				"muahia South",
				"Umu Nneochi"
			],
			Adamawa: [
				"Demsa",
				"Fufure",
				"Ganye",
				"Gayuk",
				"Gombi",
				"Grie",
				"Hong",
				"Jada",
				"Larmurde",
				"Madagali",
				"Maiha",
				"Mayo Belwa",
				"Michika",
				"Mubi North",
				"Mubi South",
				"Numan",
				"Shelleng",
				"Song",
				"Toungo",
				"Yola North",
				"Yola South"
			],
			AkwaIbom: [
				"Abak",
				"Eastern Obolo",
				"Eket",
				"Esit Eket",
				"Essien Udim",
				"Etim Ekpo",
				"Etinan",
				"Ibeno",
				"Ibesikpo Asutan",
				"Ibiono-Ibom",
				"Ika",
				"Ikono",
				"Ikot Abasi",
				"Ikot Ekpene",
				"Ini",
				"Itu",
				"Mbo",
				"Mkpat-Enin",
				"Nsit-Atai",
				"Nsit-Ibom",
				"Nsit-Ubium",
				"Obot Akara",
				"Okobo",
				"Onna",
				"Oron",
				"Oruk Anam",
				"Udung-Uko",
				"Ukanafun",
				"Uruan",
				"Urue-Offong Oruko",
				"Uyo"
			],
			Anambra: [
				"Aguata",
				"Anambra East",
				"Anambra West",
				"Anaocha",
				"Awka North",
				"Awka South",
				"Ayamelum",
				"Dunukofia",
				"Ekwusigo",
				"Idemili North",
				"Idemili South",
				"Ihiala",
				"Njikoka",
				"Nnewi North",
				"Nnewi South",
				"Ogbaru",
				"Onitsha North",
				"Onitsha South",
				"Orumba North",
				"Orumba South",
				"Oyi"
			],

			Anambra: [
				"Aguata",
				"Anambra East",
				"Anambra West",
				"Anaocha",
				"Awka North",
				"Awka South",
				"Ayamelum",
				"Dunukofia",
				"Ekwusigo",
				"Idemili North",
				"Idemili South",
				"Ihiala",
				"Njikoka",
				"Nnewi North",
				"Nnewi South",
				"Ogbaru",
				"Onitsha North",
				"Onitsha South",
				"Orumba North",
				"Orumba South",
				"Oyi"
			],
			Bauchi: [
				"Alkaleri",
				"Bauchi",
				"Bogoro",
				"Damban",
				"Darazo",
				"Dass",
				"Gamawa",
				"Ganjuwa",
				"Giade",
				"Itas-Gadau",
				"Jama are",
				"Katagum",
				"Kirfi",
				"Misau",
				"Ningi",
				"Shira",
				"Tafawa Balewa",
				" Toro",
				" Warji",
				" Zaki"
			],

			Bayelsa: [
				"Brass",
				"Ekeremor",
				"Kolokuma Opokuma",
				"Nembe",
				"Ogbia",
				"Sagbama",
				"Southern Ijaw",
				"Yenagoa"
			],
			Benue: [
				"Agatu",
				"Apa",
				"Ado",
				"Buruku",
				"Gboko",
				"Guma",
				"Gwer East",
				"Gwer West",
				"Katsina-Ala",
				"Konshisha",
				"Kwande",
				"Logo",
				"Makurdi",
				"Obi",
				"Ogbadibo",
				"Ohimini",
				"Oju",
				"Okpokwu",
				"Oturkpo",
				"Tarka",
				"Ukum",
				"Ushongo",
				"Vandeikya"
			],
			Borno: [
				"Abadam",
				"Askira-Uba",
				"Bama",
				"Bayo",
				"Biu",
				"Chibok",
				"Damboa",
				"Dikwa",
				"Gubio",
				"Guzamala",
				"Gwoza",
				"Hawul",
				"Jere",
				"Kaga",
				"Kala-Balge",
				"Konduga",
				"Kukawa",
				"Kwaya Kusar",
				"Mafa",
				"Magumeri",
				"Maiduguri",
				"Marte",
				"Mobbar",
				"Monguno",
				"Ngala",
				"Nganzai",
				"Shani"
			],
			CrossRiver: [
				"Abi",
				"Akamkpa",
				"Akpabuyo",
				"Bakassi",
				"Bekwarra",
				"Biase",
				"Boki",
				"Calabar Municipal",
				"Calabar South",
				"Etung",
				"Ikom",
				"Obanliku",
				"Obubra",
				"Obudu",
				"Odukpani",
				"Ogoja",
				"Yakuur",
				"Yala"
			],

			Delta: [
				"Aniocha North",
				"Aniocha South",
				"Bomadi",
				"Burutu",
				"Ethiope East",
				"Ethiope West",
				"Ika North East",
				"Ika South",
				"Isoko North",
				"Isoko South",
				"Ndokwa East",
				"Ndokwa West",
				"Okpe",
				"Oshimili North",
				"Oshimili South",
				"Patani",
				"Sapele",
				"Udu",
				"Ughelli North",
				"Ughelli South",
				"Ukwuani",
				"Uvwie",
				"Warri North",
				"Warri South",
				"Warri South West"
			],

			Ebonyi: [
				"Abakaliki",
				"Afikpo North",
				"Afikpo South",
				"Ebonyi",
				"Ezza North",
				"Ezza South",
				"Ikwo",
				"Ishielu",
				"Ivo",
				"Izzi",
				"Ohaozara",
				"Ohaukwu",
				"Onicha"
			],
			Edo: [
				"Akoko-Edo",
				"Egor",
				"Esan Central",
				"Esan North-East",
				"Esan South-East",
				"Esan West",
				"Etsako Central",
				"Etsako East",
				"Etsako West",
				"Igueben",
				"Ikpoba Okha",
				"Orhionmwon",
				"Oredo",
				"Ovia North-East",
				"Ovia South-West",
				"Owan East",
				"Owan West",
				"Uhunmwonde"
			],

			Ekiti: [
				"Ado Ekiti",
				"Efon",
				"Ekiti East",
				"Ekiti South-West",
				"Ekiti West",
				"Emure",
				"Gbonyin",
				"Ido Osi",
				"Ijero",
				"Ikere",
				"Ikole",
				"Ilejemeje",
				"Irepodun-Ifelodun",
				"Ise-Orun",
				"Moba",
				"Oye"
			],
			Rivers: [
				"Port Harcourt",
				"Obio-Akpor",
				"Okrika",
				"Ogu–Bolo",
				"Eleme",
				"Tai",
				"Gokana",
				"Khana",
				"Oyigbo",
				"Opobo–Nkoro",
				"Andoni",
				"Bonny",
				"Degema",
				"Asari-Toru",
				"Akuku-Toru",
				"Abua–Odual",
				"Ahoada West",
				"Ahoada East",
				"Ogba–Egbema–Ndoni",
				"Emohua",
				"Ikwerre",
				"Etche",
				"Omuma"
			],
			Enugu: [
				"Aninri",
				"Awgu",
				"Enugu East",
				"Enugu North",
				"Enugu South",
				"Ezeagu",
				"Igbo Etiti",
				"Igbo Eze North",
				"Igbo Eze South",
				"Isi Uzo",
				"Nkanu East",
				"Nkanu West",
				"Nsukka",
				"Oji River",
				"Udenu",
				"Udi",
				"Uzo Uwani"
			],
			FCT: [
				"Abaji",
				"Bwari",
				"Gwagwalada",
				"Kuje",
				"Kwali",
				"Municipal Area Council"
			],
			Gombe: [
				"Akko",
				"Balanga",
				"Billiri",
				"Dukku",
				"Funakaye",
				"Gombe",
				"Kaltungo",
				"Kwami",
				"Nafada",
				"Shongom",
				"Yamaltu-Deba"
			],
			Imo: [
				"Aboh Mbaise",
				"Ahiazu Mbaise",
				"Ehime Mbano",
				"Ezinihitte",
				"Ideato North",
				"Ideato South",
				"Ihitte-Uboma",
				"Ikeduru",
				"Isiala Mbano",
				"Isu",
				"Mbaitoli",
				"Ngor Okpala",
				"Njaba",
				"Nkwerre",
				"Nwangele",
				"Obowo",
				"Oguta",
				"Ohaji-Egbema",
				"Okigwe",
				"Orlu",
				"Orsu",
				"Oru East",
				"Oru West",
				"Owerri Municipal",
				"Owerri North",
				"Owerri West",
				"Unuimo"
			],
			Jigawa: [
				"Auyo",
				"Babura",
				"Biriniwa",
				"Birnin Kudu",
				"Buji",
				"Dutse",
				"Gagarawa",
				"Garki",
				"Gumel",
				"Guri",
				"Gwaram",
				"Gwiwa",
				"Hadejia",
				"Jahun",
				"Kafin Hausa",
				"Kazaure",
				"Kiri Kasama",
				"Kiyawa",
				"Kaugama",
				"Maigatari",
				"Malam Madori",
				"Miga",
				"Ringim",
				"Roni",
				"Sule Tankarkar",
				"Taura",
				"Yankwashi"
			],
			Kaduna: [
				"Birnin Gwari",
				"Chikun",
				"Giwa",
				"Igabi",
				"Ikara",
				"Jaba",
				"Jema a",
				"Kachia",
				"Kaduna North",
				"Kaduna South",
				"Kagarko",
				"Kajuru",
				"Kaura",
				"Kauru",
				"Kubau",
				"Kudan",
				"Lere",
				"Makarfi",
				"Sabon Gari",
				"Sanga",
				"Soba",
				"Zangon Kataf",
				"Zaria"
			],
			Kano: [
				"Ajingi",
				"Albasu",
				"Bagwai",
				"Bebeji",
				"Bichi",
				"Bunkure",
				"Dala",
				"Dambatta",
				"Dawakin Kudu",
				"Dawakin Tofa",
				"Doguwa",
				"Fagge",
				"Gabasawa",
				"Garko",
				"Garun Mallam",
				"Gaya",
				"Gezawa",
				"Gwale",
				"Gwarzo",
				"Kabo",
				"Kano Municipal",
				"Karaye",
				"Kibiya",
				"Kiru",
				"Kumbotso",
				"Kunchi",
				"Kura",
				"Madobi",
				"Makoda",
				"Minjibir",
				"Nasarawa",
				"Rano",
				"Rimin Gado",
				"Rogo",
				"Shanono",
				"Sumaila",
				"Takai",
				"Tarauni",
				"Tofa",
				"Tsanyawa",
				"Tudun Wada",
				"Ungogo",
				"Warawa",
				"Wudil"
			],
			Katsina: [
				"Bakori",
				"Batagarawa",
				"Batsari",
				"Baure",
				"Bindawa",
				"Charanchi",
				"Dandume",
				"Danja",
				"Dan Musa",
				"Daura",
				"Dutsi",
				"Dutsin Ma",
				"Faskari",
				"Funtua",
				"Ingawa",
				"Jibia",
				"Kafur",
				"Kaita",
				"Kankara",
				"Kankia",
				"Katsina",
				"Kurfi",
				"Kusada",
				"Mai Adua",
				"Malumfashi",
				"Mani",
				"Mashi",
				"Matazu",
				"Musawa",
				"Rimi",
				"Sabuwa",
				"Safana",
				"Sandamu",
				"Zango"
			],
			Kebbi: [
				"Aleiro",
				"Arewa Dandi",
				"Argungu",
				"Augie",
				"Bagudo",
				"Birnin Kebbi",
				"Bunza",
				"Dandi",
				"Fakai",
				"Gwandu",
				"Jega",
				"Kalgo",
				"Koko Besse",
				"Maiyama",
				"Ngaski",
				"Sakaba",
				"Shanga",
				"Suru",
				"Wasagu Danko",
				"Yauri",
				"Zuru"
			],
			Kogi: [
				"Adavi",
				"Ajaokuta",
				"Ankpa",
				"Bassa",
				"Dekina",
				"Ibaji",
				"Idah",
				"Igalamela Odolu",
				"Ijumu",
				"Kabba Bunu",
				"Kogi",
				"Lokoja",
				"Mopa Muro",
				"Ofu",
				"Ogori Magongo",
				"Okehi",
				"Okene",
				"Olamaboro",
				"Omala",
				"Yagba East",
				"Yagba West"
			],
			Kwara: [
				"Asa",
				"Baruten",
				"Edu",
				"Ekiti",
				"Ifelodun",
				"Ilorin East",
				"Ilorin South",
				"Ilorin West",
				"Irepodun",
				"Isin",
				"Kaiama",
				"Moro",
				"Offa",
				"Oke Ero",
				"Oyun",
				"Pategi"
			],
			Lagos: [
				"Agege",
				"Ajeromi-Ifelodun",
				"Alimosho",
				"Amuwo-Odofin",
				"Apapa",
				"Badagry",
				"Epe",
				"Eti Osa",
				"Ibeju-Lekki",
				"Ifako-Ijaiye",
				"Ikeja",
				"Ikorodu",
				"Kosofe",
				"Lagos Island",
				"Lagos Mainland",
				"Mushin",
				"Ojo",
				"Oshodi-Isolo",
				"Shomolu",
				"Surulere"
			],
			Nasarawa: [
				"Akwanga",
				"Awe",
				"Doma",
				"Karu",
				"Keana",
				"Keffi",
				"Kokona",
				"Lafia",
				"Nasarawa",
				"Nasarawa Egon",
				"Obi",
				"Toto",
				"Wamba"
			],
			Niger: [
				"Agaie",
				"Agwara",
				"Bida",
				"Borgu",
				"Bosso",
				"Chanchaga",
				"Edati",
				"Gbako",
				"Gurara",
				"Katcha",
				"Kontagora",
				"Lapai",
				"Lavun",
				"Magama",
				"Mariga",
				"Mashegu",
				"Mokwa",
				"Moya",
				"Paikoro",
				"Rafi",
				"Rijau",
				"Shiroro",
				"Suleja",
				"Tafa",
				"Wushishi"
			],
			Ogun: [
				"Abeokuta North",
				"Abeokuta South",
				"Ado-Odo Ota",
				"Egbado North",
				"Egbado South",
				"Ewekoro",
				"Ifo",
				"Ijebu East",
				"Ijebu North",
				"Ijebu North East",
				"Ijebu Ode",
				"Ikenne",
				"Imeko Afon",
				"Ipokia",
				"Obafemi Owode",
				"Odeda",
				"Odogbolu",
				"Ogun Waterside",
				"Remo North",
				"Shagamu"
			],
			Ondo: [
				"Akoko North-East",
				"Akoko North-West",
				"Akoko South-West",
				"Akoko South-East",
				"Akure North",
				"Akure South",
				"Ese Odo",
				"Idanre",
				"Ifedore",
				"Ilaje",
				"Ile Oluji-Okeigbo",
				"Irele",
				"Odigbo",
				"Okitipupa",
				"Ondo East",
				"Ondo West",
				"Ose",
				"Owo"
			],
			Osun: [
				"Atakunmosa East",
				"Atakunmosa West",
				"Aiyedaade",
				"Aiyedire",
				"Boluwaduro",
				"Boripe",
				"Ede North",
				"Ede South",
				"Ife Central",
				"Ife East",
				"Ife North",
				"Ife South",
				"Egbedore",
				"Ejigbo",
				"Ifedayo",
				"Ifelodun",
				"Ila",
				"Ilesa East",
				"Ilesa West",
				"Irepodun",
				"Irewole",
				"Isokan",
				"Iwo",
				"Obokun",
				"Odo Otin",
				"Ola Oluwa",
				"Olorunda",
				"Oriade",
				"Orolu",
				"Osogbo"
			],
			Oyo: [
				"Afijio",
				"Akinyele",
				"Atiba",
				"Atisbo",
				"Egbeda",
				"Ibadan North",
				"Ibadan North-East",
				"Ibadan North-West",
				"Ibadan South-East",
				"Ibadan South-West",
				"Ibarapa Central",
				"Ibarapa East",
				"Ibarapa North",
				"Ido",
				"Irepo",
				"Iseyin",
				"Itesiwaju",
				"Iwajowa",
				"Kajola",
				"Lagelu",
				"Ogbomosho North",
				"Ogbomosho South",
				"Ogo Oluwa",
				"Olorunsogo",
				"Oluyole",
				"Ona Ara",
				"Orelope",
				"Ori Ire",
				"Oyo",
				"Oyo East",
				"Saki East",
				"Saki West",
				"Surulere"
			],
			Plateau: [
				"Bokkos",
				"Barkin Ladi",
				"Bassa",
				"Jos East",
				"Jos North",
				"Jos South",
				"Kanam",
				"Kanke",
				"Langtang South",
				"Langtang North",
				"Mangu",
				"Mikang",
				"Pankshin",
				"Qua an Pan",
				"Riyom",
				"Shendam",
				"Wase"
			],
			Sokoto: [
				"Binji",
				"Bodinga",
				"Dange Shuni",
				"Gada",
				"Goronyo",
				"Gudu",
				"Gwadabawa",
				"Illela",
				"Isa",
				"Kebbe",
				"Kware",
				"Rabah",
				"Sabon Birni",
				"Shagari",
				"Silame",
				"Sokoto North",
				"Sokoto South",
				"Tambuwal",
				"Tangaza",
				"Tureta",
				"Wamako",
				"Wurno",
				"Yabo"
			],
			Taraba: [
				"Ardo Kola",
				"Bali",
				"Donga",
				"Gashaka",
				"Gassol",
				"Ibi",
				"Jalingo",
				"Karim Lamido",
				"Kumi",
				"Lau",
				"Sardauna",
				"Takum",
				"Ussa",
				"Wukari",
				"Yorro",
				"Zing"
			],
			Yobe: [
				"Bade",
				"Bursari",
				"Damaturu",
				"Fika",
				"Fune",
				"Geidam",
				"Gujba",
				"Gulani",
				"Jakusko",
				"Karasuwa",
				"Machina",
				"Nangere",
				"Nguru",
				"Potiskum",
				"Tarmuwa",
				"Yunusari",
				"Yusufari"
			],
			Zamfara: [
				"Anka",
				"Bakura",
				"Birnin Magaji Kiyaw",
				"Bukkuyum",
				"Bungudu",
				"Gummi",
				"Gusau",
				"Kaura Namoda",
				"Maradun",
				"Maru",
				"Shinkafi",
				"Talata Mafara",
				"Chafe",
				"Zurmi"
			]
		}[state],                                                                       // Ternary switch operator to show list of LGAs based on chosen state
		lgas = [...selectLGAOption, ...Object.values(lgaList)],                         // Join select LGA option with list of LGAs
		form = target.parentElement.parentElement.parentElement.parentElement,          // Get parent up to the forth generation just in case LGA select element is deeply nested
		lgaSelect = form.querySelector(".select-lga"),                                  // Get the LGA select element
		length = lgaSelect.options.length;                                              // Get number of options already existing in LGA select element

	// Clear LGS select element
	for (i = length - 1; i >= 0; i--) {
		lgaSelect.options[i] = null;
	}

	// Populate LGA select element
	lgas.forEach(lga => {
		let opt = document.createElement("option");                                     // Create option element
		opt.appendChild(document.createTextNode(lga));                                  // Append LGA to it
		opt.value = lga;                                                                // Set the value to LGA

		// Make option asking you to select unclickable
		lga.includes("elect")
			? setAttributes(opt, { disabled: "disabled", selected: "selected" })
			: "";

		// Add this option element to LGA select element
		lgaSelect.appendChild(opt);
	});
};





