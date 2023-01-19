const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-06', '01-07', '01-08', '01-09', '01-10', '01-11'],
    water: ['01-08', '01-07'],
    food: ['01-08', '01-07'],
}

nlwSetup.setData(data)
nlwSetup.load()

