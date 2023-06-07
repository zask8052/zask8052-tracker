const form = document.getElementById('taskform');
const tasklistElem = document.querySelector('#tasklist');

form.addEventListener('submit', function(event){
  // this will block the default submission behaviour
  event.preventDefault();
  addTask(
    form.elements.gameTitle.value,
    form.elements.gamePlatform.value, 
    form.elements.gameHours.value,
    form.elements.gameRating.value,
    form.elements.gameReplay.value,
    form.elements.gameLike.value
  )
})

function displayTask(task) {
  let item = document.createElement('li');
  item.setAttribute('data-id', task.id);
  item.innerHTML = `<p> <strong>Title: </strong>${task.name} &nbsp; &nbsp; <strong>Platform: </strong> ${task.platform} <br/> <strong>Hours Played: </strong> &nbsp; &nbsp; ${task.time} <br/> <strong>Rating: </strong> &nbsp; &nbsp; ${task.rate} / 5 <br/> <strong> Have I played it before? </strong> &nbsp; &nbsp; ${task.replay} <br/> <strong> Did I like it or dislike it? </strong> &nbsp; &nbsp; ${task.like} </p>`; /* This will determine which components are visibly listed once the form is submitted */
  tasklistElem.appendChild(item);
  form.reset();

  let delButton = document.createElement('button');
  let delButtonText = document.createTextNode('Delete');
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener('click', function(event){
    item.remove();
    taskList.forEach(function(taskArrayElement, taskArrayIndex){
      if (taskArrayElement.id == item.getAttribute('data-id')) {
        taskList.splice(taskArrayIndex, 1)
      }
    })
    console.log(taskList);
  })
  
}

var taskList = [];

function addTask(name, platform, time, rate, replay, like) {

  // here I created the object, directly passing in the input parameters
  let task = {
    name,
    platform,
    id: Date.now(),
    date: new Date().toISOString(),
    time,
    rate,
    replay,
    like
  }

  taskList.push(task);
  displayTask(task);
}

// Call the function with test values for the input parameters
addTask("Initial Game Test", "Xbox", 50, 5, "Yes", "Like");

// Log the array to the console.
console.log(taskList);