const btn = document.querySelector(".content_suscription__btn");
const txt = document.querySelector(".content_suscription__text");
btn.addEventListener("click", () => {
  const isValid = validateEmail(txt.value);
  console.log(txt.value)
  if(isValid == null){
      btn.classList.add("show");
      txt.classList.add("error");
  }else{
        btn.classList.remove("show");
        txt.classList.remove("error");
  }
});

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
