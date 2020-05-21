  const block_people=document.querySelector('.block_people');
fetch('https://randomuser.me/api/?results=8')
        .then(response => response.json())
        .then(data => {
             data.results.forEach(item => {

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
            