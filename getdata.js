const storegeName = 'ntodata';

const box = document.getElementById("prf")

function getData() {
  let data = JSON.parse(localStorage.getItem(storegeName))
  console.log(data);
  if(data&&data.data instanceof Array){
    data.data.forEach((item, i) => {
      let div = document.createElement('div');
      let content = `<p>Name - ${item.name}</p><p>Surname - ${item.surname}</p><p>Age - ${item.years}</p><p>Email - ${item.mail}</p></br>`
      div.innerHTML = content
      box.append(div)
    });
  }
}
getData()
