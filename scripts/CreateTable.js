import Sorting from "../scripts/sort.js";

export default function Table() {

    // ../data/data.json
    fetch("data/data.json")
    .then(res => res.json())
    .then(data => {
        let people;

        people = data.People;
        
        //injectHere 
        let injectHere = document.getElementById('injectHere');

        //Table Element
        let table = document.createElement('table');
        table.id = 'dtBasicExample';
        table.className = 'table table-striped table-bordered table-sm';
        table.setAttribute('cellspacing', '0');
        table.setAttribute('width', '100%');

        //thead element
        let thead = document.createElement('thead');
        //tr in thead
        let trHead = document.createElement('tr');

        //th in tr in thead
        let thHead1 = document.createElement('th');
        thHead1.className = 'th-sm';
        thHead1.textContent = 'Id'

        let thHead2 = document.createElement('th');
        thHead2.className = 'th-sm';
        thHead2.textContent = 'Name'

        let thHead3 = document.createElement('th');
        thHead3.className = 'th-sm';
        thHead3.textContent = 'Email'

        let thHead4 = document.createElement('th');
        thHead4.className = 'th-sm';
        thHead4.textContent = 'Height';

        let thHead5 = document.createElement('th');
        thHead5.className = 'th-sm';
        thHead5.textContent = 'Age';


        //Insert table to body
        injectHere.appendChild(table);
        table.appendChild(thead);
        thead.appendChild(trHead);

        trHead.appendChild(thHead1);
        trHead.appendChild(thHead2);
        trHead.appendChild(thHead3);
        trHead.appendChild(thHead4);
        trHead.appendChild(thHead5);

        //tbody element
        let tbody = document.createElement('tbody');
        
        table.appendChild(tbody);

        // Create multiple tr in tbody
        for (let i = 0; i < people.length; i++) {

            let tRow = document.createElement('tr');

            let td1 = document.createElement('td');
            td1.textContent = people[i].Id;
            let td2 = document.createElement('td'); 
            td2.textContent = people[i].FirstName + " " + people[i].LastName;
            let td3 = document.createElement('td'); 
            td3.textContent = people[i].Email;
            let td4 = document.createElement('td'); 
            td4.textContent = people[i].Height;
            let td5 = document.createElement('td');
            td5.textContent = people[i].Age;

            
            tbody.appendChild(tRow);
            tRow.appendChild(td1);
            tRow.appendChild(td2);
            tRow.appendChild(td3);
            tRow.appendChild(td4);
            tRow.appendChild(td5);


        }

        //tFoot
        let tfoot = document.createElement('tfoot');
        table.appendChild(tfoot);

        let trFoot = document.createElement('tr');
        
        let thFoot1 = document.createElement('th');
        thFoot1.textContent = "Id";
        let thFoot2 = document.createElement('th');
        thFoot2.textContent = "Name";
        let thFoot3 = document.createElement('th');
        thFoot3.textContent = "Email";
        let thFoot4 = document.createElement('th');
        thFoot4.textContent = "Height";
        let thFoot5 = document.createElement('th');
        thFoot5.textContent = "Age";

        tfoot.appendChild(trFoot);

        trFoot.appendChild(thFoot1);
        trFoot.appendChild(thFoot2);
        trFoot.appendChild(thFoot3);
        trFoot.appendChild(thFoot4);
        trFoot.appendChild(thFoot5);

        Sorting();

    })

    
}

