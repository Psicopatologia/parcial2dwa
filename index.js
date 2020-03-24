import createElement from './utils/createElement'

const $app = document.getElementById('app')
const url = 'https://dwaapi.juvasquez88.now.sh/soatdwa'

async function soat() {
    let response = await fetch(url);
    let json;
    if (response.ok) {
        json = await response.json();
    } else {
        alert("HTTP-Error: " + response.status);
    }
    console.log(json);
    const thhead = [
        createElement('th', { scope: "col" }, ['status']),
        createElement('th', { scope: "col" }, ['brand']),
        createElement('th', { scope: "col" }, ['Lisence plate']),
        createElement('th', { scope: "col" }, ['Valid From']),
        createElement('th', { scope: "col" }, ['Valid until'])]
    const trhead = createElement('tr', {}, thhead)
    const thead = createElement('thead', {class:"thead-dark"}, [trhead])
    let trbody = [];
    for (let i = 0; i < json.vehicles.length; i++) {
        const element = json.vehicles[i];
        let from = new Date(parseInt(element.soatValidFrom,10))
        let until = new Date(parseInt(element.soatValidUntil,10))
        console.log(from);
        console.log(until)
        let circle;
        if (from.getDate()==until.getDate() && from.getMonth()==until.getMonth() && from.getFullYear()-until.getFullYear()==-1) {
            circle= createElement('span', { style: "height: 25px; width: 25px; background-color: green;border-radius: 50%; display: inline-block;"}, [])
        } else {
            circle= createElement('span', { style: "height: 25px; width: 25px; background-color: red;border-radius: 50%; display: inline-block;"}, [])
        }
        thbody = [createElement('td', { scope: "col" }, [circle]),
            createElement('td', { scope: "col" }, [element.brand.toString()]),
            createElement('td', { scope: "col" }, [element.licensePlate]),
            createElement('td', { scope: "col" }, [`${from.getDay()}-${from.getMonth()}-${from.getFullYear()}`]),
            createElement('td', { scope: "col" }, [`${until.getDay()}-${until.getMonth()}-${until.getFullYear()}`])
        ]
        trbody.push(createElement('tr', {  }, thbody))
    }
    tbody = createElement('tbody', { }, trbody)

    const table = createElement('table', { class: 'table table-striped' }, [thead, tbody])
    const title = createElement('div', { class: 'w-100 bg-dark h1 text-center text-light p-2' }, ['SOAT LIST'])
    const container = createElement('div', { id: 'container', class: 'container' }, [title,table])
    console.log(container)
    $app.appendChild(container);
}
soat()