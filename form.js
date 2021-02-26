
let name = document.getElementById('Name')
let sername = document.getElementById('sername')
let years = document.getElementById('years')
let mail = document.getElementById('mail')

let dataArray = []

const storegeName = 'ntodata';

function save() {
  let data = {
    name:name.value,
    sername:sername.value,
    years:years.value,
    mail:mail.value
  }
  console.log(dataArray);
  dataArray.push(data)
  localStorage.setItem(storegeName, JSON.stringify({
    data: dataArray
  }))

}

function getData() {
  let data = JSON.parse(localStorage.getItem(storegeName))
  console.log(data);
  if(data)
    dataArray = data.data
  console.log(dataArray);
}
getData()
