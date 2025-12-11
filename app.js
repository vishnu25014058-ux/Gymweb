document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("register-form");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();

      let data = {
        name:document.getElementById("r-name").value,
        phone:document.getElementById("r-phone").value,
        email:document.getElementById("r-email").value,
        address:document.getElementById("r-address").value,
        plan:document.getElementById("r-plan").value,
        payment:document.getElementById("r-payment").value,
        date:new Date().toLocaleString()
      };

      let all = JSON.parse(localStorage.getItem("fitjiwan_regs")) || [];
      all.push(data);
      localStorage.setItem("fitjiwan_regs", JSON.stringify(all));

      alert("Registration Successful!");
      form.reset();
    });
  }
});
