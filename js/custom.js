let clock = document.querySelector(".clock");
let clock_para = document.querySelectorAll(".clock p");
let text_mode = document.getElementById("text_mode");
let clock_hour = clock.querySelector(".hour");
let clock_minutes = clock.querySelector(".minute");
let clock_secondes = clock.querySelector(".second");
let mode = document.getElementById("mode");
let aside = document.querySelector(".left_side");
let aside_search_btn = document.querySelector(
  ".left_side input[type='search']"
);
let calendarContainer = document.querySelector(".calander");

let logo = document.querySelector(".logo");
let logoH1 = document.querySelector(".logo h1");
let cards = document.querySelectorAll(".card");
let main = document.querySelector("main");
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
  card: "#100f0fcd",
};

let changeMode_dark = (element) => {
  element.style.color = Mode.color;
  element.style.backgroundColor = Mode.backgroundColor;
};

let changeMode_light = (element) => {
  element.style.color = Mode.backgroundColor;
  element.style.backgroundColor = Mode.color;
};

let toggleBtnMode = (e) => {
  let after = document.querySelector("input[type='checkbox'] + label");
  if (mode.checked) {
    main.classList.add("smooth");
    after.classList.add("ch");
    text_mode.textContent = "Light Mode";
    mode.nextElementSibling.style.background = "#000";
    changeMode_dark(aside);
    changeMode_dark(calendarContainer);
    cards.forEach((card) => {
      card.style.backgroundColor = Mode.card;
    });
    changeMode_dark(logo);
    clock_para.forEach((para) => {
      changeMode_dark(para);
    });

    changeMode_dark(logoH1);
    cards.forEach((card) => {
      changeMode_dark(card.firstElementChild);
    });

    aside_search_btn.style.color = Mode.color;
  } else {
    main.classList.remove("smooth");
    mode.nextElementSibling.style.backgroundColor = "#fff";
    text_mode.textContent = "Dark Mode";
    after.classList.remove("ch");
    changeMode_light(aside);
    changeMode_light(calendarContainer);
    calendarContainer.style.backgroundColor = "#ffffffff";
    aside_search_btn.style.color = Mode.backgroundColor;
    changeMode_dark(logoH1);
    cards.forEach((card) => {
      changeMode_light(card.firstElementChild);
      card.firstElementChild.style.color = "#000";
    });

    clock_para.forEach((para) => {
      changeMode_light(para);
      para.style.backgroundColor = "transparent";
    });

    cards.forEach((card) => {
      card.style.backgroundColor = Mode.color;
    });

    aside.style.backgroundColor = "#eee";
  }
};

mode.addEventListener("change", toggleBtnMode);

// add
let add_btn = document.querySelector("#add");
let id = 0;
let arr = [];
console.log(add_btn);

// Function to create and open the popup form
function openForm(editData = null) {
  let popOp = document.createElement("div");
  popOp.setAttribute("class", "popOp");
  document.body.appendChild(popOp);
  
  let formOfPopOp = ` <form id="form">
      <div class="title_popOp">
      <h1>${editData ? 'Modifier Réservation' : 'Nouvelle Réservation'}</h1>
      <div class="close">
      <span>&times</span>
      </div>
    </div>

<div class="form_custom">
    <div class="left">
    
                <div class="name">
                    <label for="name">nom</label>
                    <input type="text" id="name" value="${editData ? editData.Name : ''}">
                </div>

                <div class="email">
                    <label for="name">email</label>
                    <input type="text" id="email" value="${editData ? editData.Email : ''}">
                </div>

                <div class="nombre_personne">
                    <label for="nombre_personne">nombre personne</label>
                    <input type="text" id="nombre_personne" value="${editData ? editData.Nombre_personne : ''}">
                </div>
     <div class="comment">
                        <label for="comment">commentaire</label>
                        <textarea name="comment" id="comment">${editData ? editData.Comment : ''}</textarea>
                    </div>
    </div>

    <div class="right">

     <div class="time start">
                    <label for="time_start">
                          heure du début
                        </label>
                    <input type="time" id="time_start" value="${editData ? editData.Time_start : ''}">

                    </div>


  <div class="time end">
                    <label for="time_end">
                          heure du fin
                        </label>
                    <input type="time" id="time_end" value="${editData ? editData.Time_end : ''}">

                    </div>


                    <div class="date">
                        <label for="date">
                          date
                        </label>
                        <input type="date" id="date" value="${editData ? editData.Date : ''}">
                    </div>


                    <div class="select">
                        <label for="type">
                          type de réservation
                        </label>
                        <select name="type_reservation" id="type">
                              <option value="standart" ${editData && editData.Type === 'standart' ? 'selected' : ''}>standart</option>
                            <option value="anniversaires" ${editData && editData.Type === 'anniversaires' ? 'selected' : ''}>anniversaires</option>
                            <option value="mariages" ${editData && editData.Type === 'mariages' ? 'selected' : ''}>mariages</option>
                            <option value="reunions" ${editData && editData.Type === 'reunions' ? 'selected' : ''}>réunions</option>
                        </select>
                        </div>
                        
                

    </div>
           
    
</div>
  <div class="footer_form">
                    <button type="submit">${editData ? 'Modifier' : 'Réserver'}</button>
  </div>
            </form>`;

  popOp.innerHTML = formOfPopOp;



// add summary of details







  // Apply dark mode styles if needed




  if (mode.checked) {
    changeMode_dark(popOp.querySelector("#form"));
    let inputs = popOp.querySelectorAll(
      "#form input , #form select , #form textarea"
    );

    inputs.forEach((input) => {
      input.style.color = "#fff";
    });
  }

  let form = popOp.querySelector("#form");
  let close_btn = popOp.querySelector(".close");

  // Set edit ID if editing
  if (editData) {
    form.dataset.editId = editData.Id;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = form.querySelector("#name");
    let email = form.querySelector("#email");
    let nombre_personne = form.querySelector("#nombre_personne");
    let comment = form.querySelector("#comment");
    let time_start = form.querySelector("#time_start");
    let time_end = form.querySelector("#time_end");
    let dateInput = form.querySelector("#date");
    let type = form.querySelector("#type");

    // build info object
    let info = {
      Name: name.value,
      Email: email.value,
      Nombre_personne: nombre_personne.value,
      Comment: comment.value,
      Time_start: time_start.value,
      Time_end: time_end.value,
      Date: dateInput.value,
      Type: type.value,
    };

    const editId = form.dataset.editId;
    if (editId !== undefined && editId !== "") {
      // update existing reservation
      info.Id = Number(editId);
      const idx = arr.findIndex((a) => String(a.Id) === String(editId));
      if (idx !== -1) arr[idx] = info;
      updateCalendarCard(info);
    } else {
      // new reservation
      info.Id = id++;
      arr.push(info);
      addToCalendarCard(info);
    }

    console.log(arr);

    // Clear form
    name.value = "";
    email.value = "";
    nombre_personne.value = "";
    time_end.value = "";
    time_start.value = "";
    dateInput.value = "";
    comment.value = "";
    type.value = "";

    close_btn.click();




let reserve = document.querySelector(".reservation");
let summary =document.querySelector(".summary");
let total = document.getElementById("total");
let standart = document.getElementById("standart");
let anniversaires = document.getElementById("anniversaires");
let mariages = document.getElementById("mariages");
let reunions = document.getElementById("reunions");

total.textContent = 0;
  standart.textContent = 0;
  anniversaires.textContent = 0;
  mariages.textContent = 0;
  reunions.textContent = 0;


  


  let totalCount = arr.length;
  let standartCount = arr.filter(item => item.Type === 'standart').length;
  let anniversairesCount = arr.filter(item => item.Type === 'anniversaires').length;
  let mariagesCount = arr.filter(item => item.Type === 'mariages').length;
  let reunionsCount = arr.filter(item => item.Type === 'reunions').length;

  total.textContent = totalCount;
  standart.textContent = standartCount;
  anniversaires.textContent = anniversairesCount;
  mariages.textContent = mariagesCount;
  reunions.textContent = reunionsCount;



  });





  close_btn.addEventListener("click", () => {
    popOp.remove();
  });
}






// Function to add reservation to calendar card
function addToCalendarCard(info) {
  let dayOf = info.Date.split("-")[2];
  let color = {
    standart: "#87CEEB",
    anniversaires: "#ff4bc9",
    mariages: "#f4a628",
    reunions: "#708090",
  };
  
  cards.forEach((card) => {
    let ifSmall =
      card.firstElementChild.textContent < 10
        ? "0" + card.firstElementChild.textContent
        : card.firstElementChild.textContent;

    if (ifSmall == dayOf) {
      let cardContent = `<div data-color="${info.Type}" data-id="${info.Id}" class="info_card" style="background:${color[info.Type]}">
             <p>${info.Name}</p>
            <span>${info.Time_start}</span>
           </div>`;

      card.innerHTML += cardContent;
    }
  });
}

// Function to update reservation in calendar card
function updateCalendarCard(info) {
  let dayOf = info.Date.split("-")[2];
  let color = {
    standart: "#87CEEB",
    anniversaires: "#ff4bc9",
    mariages: "#f4a628",
    reunions: "#708090",
  };
  
  // Remove old entry
  cards.forEach((card) => {
    const oldEntry = card.querySelector(`.info_card[data-id="${info.Id}"]`);
    if (oldEntry) {
      oldEntry.remove();
    }
  });
  
  // Add updated entry
  addToCalendarCard(info);
}

add_btn.addEventListener("click", function () {
  openForm();
});

cards.forEach((el) => {
  el.addEventListener("click", function (e) {
    // Check if clicked element is an info_card or its child
    let infoCard = e.target.closest('.info_card');
    if (infoCard) {
      let reservationId = infoCard.dataset.id;
      let reservationData = arr.find(data => data.Id == reservationId);
      
      if (reservationData) {
        showReservationDetails(reservationData);
      }
    }
  });
});

// Function to show reservation details
function showReservationDetails(data) {
  let reservation = document.querySelector(".reservation");

  let content = `
 <div class="card_reservation">
 <div class="header_card_reservation">
 <h2>Détails de Réservation</h2>
<div class="controle_btn">
<button data-id="${data.Id}" class="edit"><em class = "fas fa-pencil-alt"></em></button>
<button data-id="${data.Id}" class="delete"><em class="fas fa-trash"></em></button>
</div>
<span class="close_reservation_details">&times</span>
</div>

<div class="card_reservation_content"> 
<div class="card_title">
<h4>Nom</h4>
<h4>N° Personnes</h4>
<h4>Date</h4>
<h4>H Début</h4>
<h4>H Fin</h4>
<h4>Type</h4>
</div>
<div class="show_content_info">
<p>${data.Name}</p>
<p>${data.Nombre_personne}</p>
<p>${data.Date}</p>
<p>${data.Time_start}</p>
<p>${data.Time_end}</p>
<p>${data.Type}</p>
</div>
<div class="card_title" style="margin-top: 20px;">
<h4>Email</h4>
<h4>Commentaire</h4>
</div>
<div class="show_content_info">
<p>${data.Email}</p>
<p>${data.Comment}</p>
</div>
</div>
 </div>`;

  document.querySelector(".reservation").innerHTML = content;
  reservation.style.display = "flex";

  document.querySelector(".close_reservation_details").addEventListener("click", () => {
    reservation.style.display = "none";
  });

  // Add event  edit and delete buttons
  document.querySelector(".edit").addEventListener("click", (e) => {
    let reservationId = e.target.dataset.id;
    let reservationData = arr.find(data => data.Id == reservationId);
    if (reservationData) {
      reservation.style.display = "none";
      openForm(reservationData);
    }
  });

  document.querySelector(".delete").addEventListener("click", (e) => {
    let reservationId = e.target.dataset.id;
    deleteReservation(reservationId);
    reservation.style.display = "none";
  });
}

//  delete reservation
function deleteReservation(id) {
  // Remove from array
  arr = arr.filter(data => data.Id != id);
  
  // Remove from calendar
  cards.forEach((card) => {
    const reservationElement = card.querySelector(`.info_card[data-id="${id}"]`);
    if (reservationElement) {
      reservationElement.remove();
    }
  });
  
  console.log("Reservation deleted:", id);
  console.log("Remaining reservations:", arr);
}


let search_btn = document.getElementById("search");
console.log(search_btn);
let search_input = document.querySelector(".left_side input[type='search']");
console.log(search_input);



search_btn.addEventListener("click", ()=>{
  let searchValue = search_input.value.toLowerCase();

  console.log(searchValue);
  
  let search_value_type = arr.filter(data =>{
    return data.Type == searchValue;
  })



  console.log(search_value_type);



  if(search_value_type.length === 0){
    alert("aucun data");
  }






 






  for (const arr_data of arr){
    

  console.log(arr_data.Type);

  console.log(arr_data);
  
   if(arr_data.Type != searchValue){
    continue;
   }

   else{

  
   }
  
  }

  
})









