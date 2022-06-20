document.getElementById("push").onclick = function (e) {
  let elInput = document.getElementById("todo-input").value;

  if (elInput == "") {
    alert("Ajoute une tache");
  } else if (elInput.length < 3) {
    alert("la tache est trop courte");
  } else if (elInput.length > 35) {
    alert("la tache est trop longue");
  } else {
    console.log("tout est ok pour envoyer");
    document.getElementById(
      "task"
    ).innerHTML += `<div class="d-flex justify-content-between align-items-center mb-3 border-bottom py-3">
      <span class="my-0 taskName">${elInput}</span>
      <button class="btn btn-danger delete">Delete</button>
     <div/>`;

    //  delete task
    let tasksDelete = document.querySelectorAll(".delete");
    for (let i = 0; i < tasksDelete.length; i++) {
      tasksDelete[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    // task done
    let tasksDone = document.querySelectorAll(".taskName");
    for (let i = 0; i < tasksDone.length; i++) {
      tasksDone[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    // supprime l'event une fois validé dans l'input
    document.querySelector("#todo-input").value = "";
  }
};
