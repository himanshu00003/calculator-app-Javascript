let string = "";
let buttons = document.querySelectorAll(".button"); // jin jin ki class button hai unhe select kar lega
Array.from(buttons).forEach((button) => {// ek array banao buttons ka ...har button
  button.addEventListener("click", (e) => {// jab bhi click kre koi toh arrow function chalega
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
        string = " ";
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'Del'){
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
      }
      else{
      console.log(e.target); // jis bhi btn pe hmne click kra
      string = string + e.target.innerHTML; // 
      document.querySelector("input").value = string;
    }
  });
});
