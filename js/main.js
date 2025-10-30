let clock = document.querySelector(".clock");
let clock_para = document.querySelectorAll(".clock p");
let clock_hour = clock.querySelector(".hour");
let clock_minutes = clock.querySelector(".minute");
let clock_secondes = clock.querySelector(".second");
let mode = document.getElementById("mode");
let aside = document.querySelector(".left_side");
let aside_search_btn = document.querySelector(".left_side input[type='search']");
let calendarContainer = document.querySelector(".calander");
let logo = document.querySelector(".logo");
let logoH1 = document.querySelector(".logo h1");
let cards = document.querySelectorAll(".card");

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let setTime = setInterval(() => {
  seconds++;

  if (seconds >= 59) {
    minutes++;
    seconds = 0;
  }

  if (minutes >= 59) {
    minutes = 0;
    hour++;
  }

  if (hour >= 24) {
    hour = 0;
  }

  clock_hour.textContent = hour < 10 ? "0" + hour : hour;
  clock_minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
  clock_secondes.textContent = seconds < 10 ? "0" + seconds : seconds;
}, 1000);



let index = 3;
cards.forEach((card) => {
  let para_index = document.createElement("p");
  para_index.setAttribute("class", "para_index");
  let text = document.createTextNode(index);
  para_index.appendChild(text);
  card.prepend(para_index);
  index++;
});



let Mode = {
  backgroundColor: "#323030ff",
  color: "#fff",
  card : "#100f0fcd",
};

let changeMode_dark = (element) => {
  element.style.color = Mode.color;
  element.style.backgroundColor = Mode.backgroundColor;
};

let changeMode_light = (element) => {
  element.style.color = Mode.backgroundColor;
  element.style.backgroundColor = Mode.color;
};

let toggleBtnMode = () => {
  if (mode.checked) {
    changeMode_dark(aside);
    changeMode_dark(calendarContainer);
    cards.forEach((card) => {
      card.style.backgroundColor = Mode.card;
    });
    changeMode_dark(logo)
    clock_para.forEach(para=>{
       changeMode_dark(para)
    })

    changeMode_dark(logoH1)
    cards.forEach(card=>{
     changeMode_dark(card.firstElementChild)
      
    })


    aside_search_btn.style.color = Mode.color;



  } else {
    changeMode_light(aside);
    changeMode_light(calendarContainer);
    calendarContainer.style.backgroundColor = "#ffffffff"
    aside_search_btn.style.color = Mode.backgroundColor;
      changeMode_dark(logoH1)
    cards.forEach(card=>{
     changeMode_light(card.firstElementChild)
     card.firstElementChild.style.color = "#000" 
     
      
    })

     clock_para.forEach(para=>{
       changeMode_light(para)
       para.style.backgroundColor = "transparent"
     
    })

      cards.forEach((card) => {
      card.style.backgroundColor = Mode.color;
    });


    aside.style.backgroundColor = "#eee"
  }
};

mode.addEventListener("change", toggleBtnMode);



// add

let add_btn = document.querySelector("#add");
let id = 0;
let arr = [];
console.log(add_btn);

add_btn.addEventListener("click", function () {
  let popOp = document.createElement("div");
  popOp.setAttribute("class", "popOp");
  document.body.appendChild(popOp);
  let formOfPopOp = ` <form id="form">

      <div class="title_popOp">
      <h1>novelle reservation</h1>
      <div class="close">
      <span>&times</span>
      </div>
    </div>

<div class="form_custom">
    <div class="left">
    
                <div class="name">
                    <label for="name">nom</label>
                    <input type="text" id="name">
                </div>

                <div class="email">
                    <label for="name">email</label>
                    <input type="text" id="email">
                </div>

                <div class="nombre_personne">
                    <label for="nombre_personne">nomber personne</label>
                    <input type="text" id="nombre_personne">
                </div>
     <div class="comment">
                        <label for="comment">commentaire</label>
                        <textarea name="comment" id="comment"></textarea>
                    </div>
    </div>

    <div class="right">

     <div class="time start">
                    <label for="time_start">
                       
                          heur du debut
                        </label>
                    <input type="time" id="time_start">

                    </div>


  <div class="time end">
                    <label for="time_end">
                       
                          heur du fin
                        </label>
                    <input type="time" id="time_end">

                    </div>


                    <div class="date">
                        <label for="date">
                          date
                        </label>
                        <input type="date" id="date">
                    </div>


                    <div class="select">
                        <label for="type">
                          

                          type du reservation
                        </label>
                        <select name="type_reservation" id="type" >

        
                             
                              <option value="standart">standart</option>
                            <option value="anniversaires">anniversaires</option>
                            <option value="mariages">mariages</option>
                            <option value=reunions"">reunions</option>
                            
                        </select>

                        </div>
                        
                

    </div>
           
    
</div>
  <div class="footer_form">
   
                    <button type="submit">reserve</button>
  </div>
            </form>`;

  popOp.innerHTML = formOfPopOp;

  let form = popOp.querySelector("#form");
  let close_btn = popOp.querySelector(".close");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = form.querySelector("#name");
    let email = form.querySelector("#email");
    let nombre_personne = form.querySelector("#nombre_personne");
    let comment = form.querySelector("#comment");
    let time_start = form.querySelector("#time_start");
    let time_end = form.querySelector("#time_end");
    let date = form.querySelector("#date");
    let type = form.querySelector("#type");
    let btn_submit = form.querySelector("button[type='submit']");

    let info = {
      Name: name.value,
      Email: email.value,
      Nombre_personne: nombre_personne.value,
      Comment: comment.value,
      Time_start: time_start.value,
      Time_end: time_end.value,
      Date: date.value,
      Type: type.value,
      Id: id++,
    };

    arr.push(info);

    console.log(id);
    console.log(arr);

    btn_submit.addEventListener("click", () => {
      name.value = "";
      email.value = "";
      nombre_personne.value = "";
      time_end.value = "";
      time_start.value = "";
      date.value = "";
      comment.value = "";
      type.value = "";
    });

    close_btn.click();

    let dayOf = date.value.split("-")[2];
    console.log(dayOf);


    let color = {
      standart:"#87CEEB",
      anniversaires : "#ff4bc9",
      mariages : "#f4a628",
      reunions : "#708090"
    }
    cards.forEach((card) => {
      let ifSmall =
        card.firstElementChild.textContent < 10
          ? "0" + card.firstElementChild.textContent
          : card.firstElementChild.textContent;


      if (ifSmall == dayOf) {
        let cardContent = `  <div data-color = "${info.Type}" data-id = "${info.Id}" class =info_card style = "background:${color[info.Type]}">
             <p>${name.value}</p>
            <span>${time_start.value}</span>
           </div>`;

            

           
           card.innerHTML += cardContent;

//    let info_card = document.querySelector(".info_card");
//  for(let key in color )
//  {
//   if(info_card.getAttribute("data-color") == key){
//     info_card.style.backgroundColor = color[key];
//     console.log(color[key]);
    
    
    
//   }



  
//  }
        


      // let info_card = document.querySelector(".info_card");
      // let data_color = info_card.getAttribute("data-color");

     
      }

      
      
      
    });
    
    
 
   
   



    
 

 
     
   

  
  });

  close_btn.addEventListener("click", () => {
    popOp.style.display = "none";
  });
});

cards.forEach((el) => {
  el.addEventListener("click", function (e) {
    arr.forEach((data) => {
      if (data.Id == e.target.dataset.id) {
        console.log(data.Name);

        let reservation = document.querySelector(".reservation");

        console.log(data);

        let content = `
 <div class="card_reservation">
 <div class="header_card_reservation">
 <h2>title</h2>
<div class="controle_btn">

<button class="edit">edit</button>
<button class="delete">delete</button>

</div>
<span class="close_reservation_details">&times</span>
</div>


<div class="card_reservation_content"> 

<div class="card_title">
<h4>nom</h4>
<h4>N°= persons</h4>
<h4>date</h4>
<h4>h debut</h4>
<h4>h fin</h4>
<h4>type</h4>

</div>
<div class="show_content_info">
<p>${data.Name}</p>
<p>${data.Nombre_personne}</p>
<p>${data.Date}</p>
<p>${data.Time_start}</p>
<p>${data.Time_end}</p>
<p>${data.Type}</p>



</div>
</div>
 </div>
 
 `;

        document.querySelector(".reservation").innerHTML = content;

        reservation.style.display = "flex";

        document
          .querySelector(".close_reservation_details")
          .addEventListener("click", () => {
            reservation.style.display = "none";
          });
      }
    });
  });
});







/**
 
              let info_card = document.querySelector(".info_card");
      let data_color = info_card.getAttribute("data-color");

      switch (data_color) {
        case "standart":
          info_card.style.backgroundColor = "#87CEEB";
          break;
        case "anniversaires":
          info_card.style.backgroundColor = "#FFC0CB";
          break;
        case "mariages":
          info_card.style.backgroundColor = "#F7E7CE";
          break;
        case "réunions":
          info_card.style.backgroundColor = "#708090";
          break;
      }
 */