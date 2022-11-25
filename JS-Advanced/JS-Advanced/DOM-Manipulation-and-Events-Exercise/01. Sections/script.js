function create(words) {
   let content = document.getElementById('content');

   for (let word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.innerText = word;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div)
      div.addEventListener('click', showP)
   }

   function showP(event) {
      event.target.children[0].style.display = 'block'
   }
}