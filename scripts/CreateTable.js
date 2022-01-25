let people = [];


export default function Table() {

    fetch("../data/data.json")
    .then(res => res.json())
    .then(data => {
        people = data;
        console.log(people)
    })
}

