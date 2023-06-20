
async function getChange() {
    let url = `http://data.fixer.io/api/latest?access_key=66da8adf19a844bca7ff61734b58cfa1&base=EUR&symbols=USD,GBP,CAD`
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

document.querySelector('button').onclick = async () => {
    let select1 = document.querySelector('#select-1').value,
        select2 = document.querySelector('#select-2').value,
        res = document.querySelector('#res'),
        val = document.querySelector('#val')

    if (select1 == select2) {
        res.value = val.value;
    } else {
        let taux = await getChange();
        console.log(taux);

        let usd = taux.rates.USD,
            gbp = taux.rates.GBP,
            cad = taux.rates.CAD,
            eur = 1

        console.log(usd, gbp, cad);
        let chang1
        switch (select1) {
            case '1':
                chang1 = eur
                break
            case '2':
                chang1 = usd
                break
            case '3':
                chang1 = gbp
                break
            case '4':
                chang1 = cad
                break
        }
        let affiche1 = val.value / chang1

        let chang2
        switch (select2) {
            case '1':
                chang2 = eur
                break
            case '2':
                chang2 = usd
                break
            case '3':
                chang2 = gbp
                break
            case '4':
                chang2 = cad
                break
        }
        let affiche2 = affiche1 * chang2
        console.log(affiche1, affiche2);
        res.value = affiche2
    }
}