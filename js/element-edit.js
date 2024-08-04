document.addEventListener("DOMContentLoaded", () => {
    let elementToEdit = undefined;
    const inputElement = document.getElementById("edit-input");
    const submitButton = document.getElementById("edit-submit");
    const cancelButton = document.getElementById("edit-cancel");
    const editForm = document.getElementById("edit-form");
  
    const reset = () => {
      inputElement.value = "";
      elementToEdit = undefined;
      editForm.classList.add("hidden");
    };
  
    cancelButton.addEventListener("click", reset);
  
    submitButton.addEventListener("click", (e) => {
      if (elementToEdit !== undefined && elementToEdit !== null) {
        elementToEdit.innerHTML = inputElement.value;
      }
      reset();
    });
  
    inputElement.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        elementToEdit.innerHTML = inputElement.value;
        reset();
      }
    });
  
    const onEditClick = (element) => {
      elementToEdit = element;
      editForm.classList.remove("hidden");
      inputElement.value = element.innerHTML;
    };
  
    const editElements = document.getElementsByClassName("edit");
  
    for (let i = 0; i < editElements.length; i++) {
      const editElement = editElements.item(i);
      editElement.addEventListener("click", () => onEditClick(editElement));
    }
  });
   