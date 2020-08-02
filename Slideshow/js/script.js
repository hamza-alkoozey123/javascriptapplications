document.addEventListener("DOMContentLoaded", function (event) {
  const itemInput = document.querySelector("#itemInput");
  const feedback = document.querySelector("#feedback");
  const List = document.querySelector("#itemsList");
  var todoItems = [];

  function handleItem(itemVal) {
    const items = document.querySelectorAll(".itemElement");

    items.forEach(function (element) {
      if (element.querySelector("#itemName").textContent === itemVal) {
        element.querySelector("#check").addEventListener("click", function () {
          element.querySelector("#itemName").classList.toggle("completed");
        });

        element.querySelector("#delete").addEventListener("click", function () {
          List.removeChild(element);
          removeItem(itemVal);
        });

        element.querySelector("#edit").addEventListener("click", function () {
          element.querySelector("#itemName").classList.toggle("d-none");
          element.querySelector("#itemTools").classList.toggle("ml-auto");
          element.querySelector("#editInput").classList.toggle("d-none");
          element.querySelector(
            "#editInput input"
          ).value = element.querySelector("#itemName").textContent;
          element.querySelector("#edit").classList.toggle("d-none");
          element.querySelector("#submit").classList.toggle("d-none");
        });

        element.querySelector("#itemName").addEventListener("click", function () {
          element.querySelector("#itemName").classList.toggle("d-none");
          element.querySelector("#itemTools").classList.toggle("ml-auto");
          element.querySelector("#editInput").classList.toggle("d-none");
          element.querySelector(
            "#editInput input"
          ).value = element.querySelector("#itemName").textContent;
          element.querySelector("#edit").classList.toggle("d-none");
          element.querySelector("#submit").classList.toggle("d-none");
        });

        element.querySelector("#submit").addEventListener("click", function () {
          element.querySelector(
            "#itemName"
          ).textContent = element.querySelector("#editInput input").value;
          element.querySelector("#submit").classList.toggle("d-none");
          element.querySelector("#editInput").classList.toggle("d-none");
          element.querySelector("#edit").classList.toggle("d-none");
          element.querySelector("#itemName").classList.toggle("d-none");
        });

        element
          .querySelector("#editInput input")
          .addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
              element.querySelector("#submit").click();
            }
          });

        console.log(List);
      }
    });
  }

  const removeItem = function (itemVal) {
    const removeIndex = todoItems.indexOf(itemVal);
    todoItems.splice(removeIndex, 1);
  };

  function getList(theItems) {
    List.innerHTML = " ";

    theItems.forEach((element) => {
      List.insertAdjacentHTML(
        "beforeend",
        "<div class='itemElement mb-3 d-flex justify-content-between'><p id='itemName' class='text-capitalize'>" +
          element +
          "</p><div id='editInput' class='d-none'><input class='form-control form-control-sm' type='text'/></div><div id='itemTools'><button id='submit' class='btn btn-sm btn-outline-primary d-none'>Submit</button><button id='edit' class='btn btn-sm btn-outline-primary'>Edit</button><button id='check' class='btn btn-sm btn-outline-success'>Check</button><button id='delete' class='btn btn-sm btn-outline-danger'>Delete</button></div></div>"
      );

      handleItem(element);
    });
  }

  document.querySelector("#addItem").addEventListener("click", function () {
    var itemVal = itemInput.value;
    if (itemVal.length === 0) {
      feedback.innerHTML = "<h1>Input is empty ! please input any value</h1>";
      feedback.classList.add(
        "showItem",
        "text-center",
        "bg-danger",
        "rounded",
        "text-white"
      );
      setTimeout(function () {
        feedback.classList.remove("showItem");
      }, 3000);
    } else {
      todoItems.push(itemVal);
      console.log(itemVal);
      getList(todoItems);
    }
    itemInput.value = "";
  });

  //Hitting enter on input box
  itemInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.querySelector("#addItem").click();
    }
  });
});
