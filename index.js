const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
}) 

//change theme
// close sidebar
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//fill orders in table
Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.ol}</td>
                        <td>${order.ticket}</td> 
                        <td>${order.paymentStatus}</td>
                        <td class="${order.status === 'Aberto' ? 'danger' : 
                                     order.status === 'Em espera' ? 'warning' :
                                    'primary'}">${order.status}</td>
                        <td class="primary">Zendesk</td>
                        <td class="primary">Jira</td>
                        <td>${order.nomeResponsavel}</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
    
                    
})

let input = document.querySelector('input[type="file"]');

input.addEventListener('change', function() {
  let reader = new FileReader();
  reader.onload = function() {
    let lines = reader.result.split('\n').map(function(line){
      return line.split(',');
    });
    console.log(lines);
  }
  reader.readAsText(input.files[0]);
}, false);


