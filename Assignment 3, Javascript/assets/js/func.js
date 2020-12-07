import {getStData} from './stryktipsdata.js';

let table = window.document.getElementById("table");
//deklarerar en variabel som innehåller tabellen, jag använder DOM för att hitta den

export function printdata() {
    getStData().then(insert_data);
}

function insert_data(data) {
    for (let i = 0; i < data.length; i++)
    {
        let row = table.insertRow(i+1);
        let cell_ROW = row.insertCell(0);
        let cell_TEAMS = row.insertCell(1);
        let cell_1 = row.insertCell(2);
        let cell_X = row.insertCell(3);
        let cell_2 = row.insertCell(4);
        cell_ROW.innerHTML = data[i].gameNumber;
        cell_TEAMS.innerHTML = create_link(data[i].teams['1'].name, data[i].teams['1'].homepage) + ' -VS- ' + create_link(data[i].teams['2'].name, data[i].teams['2'].homepage);

            if ((data[i].outcome) == "1") 
            {
                 
                cell_1.innerHTML =  checkmark;
        
            }else if((data[i].outcome) == "X")
            {
                 cell_X.innerHTML = checkmark;

            }else if((data[i].outcome) == "2")
            {
                cell_2.innerHTML = checkmark;
            }        
    }
    // En for-loop som för varje element i arrayen gör en ny rad (tr) och celler (th) skriver ut Rad, Namn och
    // för resultat kollar den om 'outcome' är lika med 1, om sant sätter den ut ett checkmark annars testar den 'outcome' är lika med X osv.
};
//Funktion som lägger till data i tabellen

function create_link(text, link){
    return '<a href="' + link + ' ">' + text + '</a>';
}
//Funktion som skapar länkar med text

let checkmark = '<span class="checkmark">' +
'<div class="stem"></div>' +
'<div class="kick"></div>' +
'</span>';
//Variabel som används för att skapa checkmarks
