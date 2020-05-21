  const block_people=document.querySelector('.block_people');
  function compare(a, b) {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  }
  
fetch('https://randomuser.me/api/?results=8')
        .then(response => response.json())
        .then(data => {
data.results.sort((a,b) => {
  return a.dob.age-b.dob.age;
});

 data.results.forEach(item => {
   console.log(item);
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
      
            