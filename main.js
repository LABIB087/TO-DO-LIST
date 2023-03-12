//Finding the Elements......

var inputBox = document.querySelector('#box');
var button = document.querySelector('#btn');



//Textbox work start here....

button.addEventListener('click', () => {
  if (inputBox.value.length == 0) {
    alert('Invalid input');
  } else {
    document.querySelector('.items_div').innerHTML += `
                <div class="item">
                    <span id="itemname">
                        ${document.querySelector('#box').value}
                    </span>
                    <button class="delete">
                        &#10006;
                    </button>
                </div>
            `;
  }
  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function() {
      this.parentNode.remove();
    }
  }
  inputBox.value = "";
})
