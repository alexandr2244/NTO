
let name = document.getElementById('Name')
let sername = document.getElementById('sername')
let years = document.getElementById('years')
let mail = document.getElementById('mail')

const storegeName = 'ntodata';

function save() {
  let data = {
    name:name.value,
    sername:name.sername,
    years:name.years,
    mail:name.mail
  }

  localStorage.setItem(storegeName, JSON.stringify({
    data: data
  }))

}

function getData() {
  let data = localStorage.getItem(storegeName)
}
getData()
