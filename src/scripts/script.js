  //DOM-узлы
  const block_people=document.querySelector('.block_people');
  const block2_input_name=document.querySelector('input[placeholder="Name"]');
  const block2_input_surname=document.querySelector('input[placeholder="Surname"]');
  const block2_input_email=document.querySelector('input[placeholder="Email"]');
  const block2_textarea=document.querySelector('#message');
  const block2_button=document.querySelector('.block3_button');
  const block2_error=document.querySelector('.block3_error');
  const load=document.querySelector('.lds-hourglass');

//Ошибка пустых input-ов
block2_button.addEventListener('click',function(){
  if(
    block2_input_surname.value.length==0||
    block2_input_name.value.length==0||
    block2_input_email.value.length==0){
    block2_error.style.display='block'
  }else{
    block2_error.style.display='none'
  }
})
     
/*Обработка данных с бэка*/ 
fetch('https://randomuser.me/api/?results=8')
        .then(response => response.json())
        //Сортирвка объектов
        .then(data => {
data.results.sort((a,b) => {
  return a.dob.age-b.dob.age;
});
//Создание карточек
 data.results.forEach(item => {
   load.style.display='none'
                const person=document.createElement('div');
                person.classList.add('person');
              block_people.appendChild(person);

            const person_name=document.createElement('div');
            person_name.classList.add('person_name');

            const person_img=document.createElement('img');
            person_img.classList.add('person_img');

            person.appendChild(person_img);
            person.appendChild(person_name);

             person_name.textContent=item.name.first+' '+item.name.last;
             person_img.alt=item.name.first+' '+item.name.last;
             person_img.src=item.picture.large;
})
})

     