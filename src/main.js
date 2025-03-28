let contacts = JSON.parse(localStorage.getItem("contacts"));
const list = document.querySelector(".contacts__list");
const nameEl = document.querySelector(".input__name");
const surnameEl = document.querySelector(".input__surname");
const telEl = document.querySelector(".input__tel");
const emailEl = document.querySelector(".input__email");
const controlsBtn = document.querySelectorAll(".contacts__button");
controlsBtn[1].classList.add("hidden");

// fill in from localStorage
if (contacts !== null) {
  contacts.forEach(
    (c) =>
      (list.innerHTML += `<li class="contacts__item">
                <h2 class="contacts__name">${c.name}</h2>
                <h2 class="contacts__name">${c.surname}</h2>
                <p class="contacts__tel">${c.tel}</p>
                <p class="contacts__email">${c.email}</p>
                <button class="contacts__delete">✖️</button>
                <button class="contacts__modify">✎</button>
            </li>`)
  );
  // --- //

  // delete event
  document.querySelectorAll(".contacts__delete").forEach((el) =>
    el.addEventListener("click", (event) => {
      event.target.parentNode.remove();
      const contact = {
        name: event.target.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling.textContent,
        surname:
          event.target.previousElementSibling.previousElementSibling
            .previousElementSibling.textContent,
        tel: event.target.previousElementSibling.previousElementSibling
          .textContent,
        email: event.target.previousElementSibling.textContent,
      };

      contacts.splice(
        contacts.findIndex(
          (c) =>
            c.name === contact.name &&
            c.surname === contact.surname &&
            c.tel === contact.tel &&
            c.email === contact.email
        ),
        1
      );
      localStorage.setItem("contacts", JSON.stringify(contacts));
    })
  );
} else {
  contacts = [];
}
// --- //

// modify event
function handleClick(e) {}

document.querySelectorAll(".contacts__modify").forEach((el) =>
  el.addEventListener("click", (event) => {
    controlsBtn[0].classList.add("hidden");
    controlsBtn[1].classList.remove("hidden");

    const contact = {
      name: event.target.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .textContent,
      surname:
        event.target.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling.textContent,
      tel: event.target.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent,
      email:
        event.target.previousElementSibling.previousElementSibling.textContent,
    };

    nameEl.value = contact.name;
    surnameEl.value = contact.surname;
    telEl.value = contact.tel;
    emailEl.value = contact.email;

    handleClick = function (e) {
      const newContact = {
        name: nameEl.value,
        surname: surnameEl.value,
        tel: telEl.value,
        email: emailEl.value,
      };
      const index = contacts.findIndex(
        (c) =>
          c.name === contact.name &&
          c.surname === contact.surname &&
          c.tel === contact.tel &&
          c.email === contact.email
      );
      contacts[index] = newContact;

      event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
        newContact.name;
      event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
        newContact.surname;
      event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
        newContact.tel;
      event.target.previousElementSibling.previousElementSibling.textContent =
        newContact.email;
    localStorage.setItem("contacts", JSON.stringify(contacts));
    controlsBtn[0].classList.remove("hidden");
    controlsBtn[1].classList.add("hidden");
    nameEl.value = "";
    surnameEl.value = "";
    telEl.value = "";
    emailEl.value = "";
    };
  })
);
controlsBtn[1].addEventListener("click", (ev) => handleClick(ev));
// --- //

// event for form
document
  .querySelector(".contacts__form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // check if already exists
    const index = contacts.findIndex(
      (c) =>
        c.name === nameEl.value &&
        c.surname === surnameEl.value &&
        c.tel === telEl.value &&
        c.email === emailEl.value
    );
    if (index !== -1) {
      alert("Такий контакт вже створено!");
      return;
    }
    // --- //

    // create element
    list.innerHTML += `<li class="contacts__item">
                <h2 class="contacts__name">${nameEl.value}</h2>
                <h2 class="contacts__name">${surnameEl.value}</h2>
                <p class="contacts__tel">${telEl.value}</p>
                <p class="contacts__email">${emailEl.value}</p>
                <button class="contacts__delete">✖️</button>
                <button class="contacts__modify">✎</button>
            </li>`;
    // --- //

    // delete event
    document.querySelectorAll(".contacts__delete").forEach((el) =>
      el.addEventListener("click", (event) => {
        event.target.parentNode.remove();
        const contact = {
          name: event.target.previousElementSibling.previousElementSibling
            .previousElementSibling.previousElementSibling.textContent,
          surname:
            event.target.previousElementSibling.previousElementSibling
              .previousElementSibling.textContent,
          tel: event.target.previousElementSibling.previousElementSibling
            .textContent,
          email: event.target.previousElementSibling.textContent,
        };

        contacts.splice(
          contacts.findIndex(
            (c) =>
              c.name === contact.name &&
              c.surname === contact.surname &&
              c.tel === contact.tel &&
              c.email === contact.email
          ),
          1
        );
        localStorage.setItem("contacts", JSON.stringify(contacts));
      })
    );
    // --- //

    // modify event
    function handleClick(e) {}

document.querySelectorAll(".contacts__modify").forEach((el) =>
  el.addEventListener("click", (event) => {
    controlsBtn[0].classList.add("hidden");
    controlsBtn[1].classList.remove("hidden");

    const contact = {
      name: event.target.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling
        .textContent,
      surname:
        event.target.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling.textContent,
      tel: event.target.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent,
      email:
        event.target.previousElementSibling.previousElementSibling.textContent,
    };

    nameEl.value = contact.name;
    surnameEl.value = contact.surname;
    telEl.value = contact.tel;
    emailEl.value = contact.email;

    handleClick = function (e) {
      const newContact = {
        name: nameEl.value,
        surname: surnameEl.value,
        tel: telEl.value,
        email: emailEl.value,
      };
      const index = contacts.findIndex(
        (c) =>
          c.name === contact.name &&
          c.surname === contact.surname &&
          c.tel === contact.tel &&
          c.email === contact.email
      );
      contacts[index] = newContact;

      event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
        newContact.name;
      event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
        newContact.surname;
      event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
        newContact.tel;
      event.target.previousElementSibling.previousElementSibling.textContent =
        newContact.email;
    localStorage.setItem("contacts", JSON.stringify(contacts));
    controlsBtn[0].classList.remove("hidden");
    controlsBtn[1].classList.add("hidden");
    nameEl.value = "";
    surnameEl.value = "";
    telEl.value = "";
    emailEl.value = "";
    };
  })
);
controlsBtn[1].addEventListener("click", (ev) => handleClick(ev));
    // --- //

    // update everything
    contacts.push({
      name: nameEl.value,
      surname: surnameEl.value,
      tel: telEl.value,
      email: emailEl.value,
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    nameEl.value = "";
    surnameEl.value = "";
    telEl.value = "";
    emailEl.value = "";
    // --- //
  });
// --- //
