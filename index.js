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
    const thead = createElement('thead', {}, [trhead])
    let trbody = [];
    for (let i = 0; i < json.vehicles.length; i++) {
        const element = json.vehicles[i];
        let from = new Date(parseInt(element.soatValidFrom,10))
        let until = new Date(parseInt(element.soatValidUntil,10))
        let circle;
        if (from.getDay==until.getDay && from.getMonth==until.getMonth && from.getFullYear-until.getFullYear==-1) {
            circle= createElement('circle', { fill: "green",cx:50,cy:50,r:50}, [])
        } else {
            circle= createElement('circle', { fill: "red",cx:50,cy:50,r:50}, [])
        }
        let svg = createElement('svg', { viewBox: "0 0 100 100" }, [circle])
        thbody = [createElement('td', { scope: "col" }, [svg]),
            createElement('td', { scope: "col" }, [element.brand.toString()]),
            createElement('td', { scope: "col" }, [element.licensePlate]),
            createElement('td', { scope: "col" }, [`${from.getDay}-${from.getMonth}-${from.getFullYear}`]),
            createElement('td', { scope: "col" }, [])
        ]
        trbody.push(createElement('tr', {  }, thbody))
    }
    tbody = createElement('tbody', { class: 'table-striped' }, trbody)

    const table = createElement('table', { class: 'table' }, [thead, tbody])

    const container = createElement('div', { id: 'container', class: 'container' }, [table])
    console.log(container)
    $app.innerHTML = '';
    $app.appendChild(container);
}
soat()