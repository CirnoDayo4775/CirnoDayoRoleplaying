function aclicked() {
  everyoneoff();
  document.getElementById("buta").style.transform = "translateY(0%)";
  document.getElementById("containholderA").style.opacity = 1;
  document.getElementById("containholderA").style.zIndex = 3;
}
function bclicked() {
  everyoneoff();
  document.getElementById("butb").style.transform = "translateY(0%)";
  document.getElementById("containholderB").style.opacity = 1;
  document.getElementById("containholderB").style.zIndex = 3;
}
function cclicked() {
  everyoneoff();
  document.getElementById("butc").style.transform = "translateY(0%)";
  document.getElementById("containholderC").style.opacity = 1;
  document.getElementById("containholderC").style.zIndex = 3;
  
  weveryoneoff();

  document.getElementById("workheader").innerText = "Welcome to my Gallery";
  document.getElementById("workdetail1").innerText =
    "Here's work's gallery! you can see my notable work here!";
  document.getElementById("workdetail2").innerText =
    "Please select your work you want to see by using button on the left.";
  document.getElementById("workimage").src = "../thumbnail/soon.png";workbutclickA('A');
}
/*function dclicked() {
  everyoneoff();
 // document.getElementById("butd").style.transform = "translateY(0%)";
  //document.getElementById("containholderD").style.opacity = 1;
  //document.getElementById("containholderD").style.zIndex = 3;
  everyoneup();
}*/

function everyoneoff() {
  document.getElementById("buta").style.transform = "translateY(50%)";
  document.getElementById("butb").style.transform = "translateY(50%)";
  document.getElementById("butc").style.transform = "translateY(50%)";
 // document.getElementById("butd").style.transform = "translateY(50%)";

  document.getElementById("containholderA").style.opacity = 0;
  document.getElementById("containholderB").style.opacity = 0;
  document.getElementById("containholderC").style.opacity = 0;
  //document.getElementById("containholderD").style.opacity = 0;

  document.getElementById("containholderA").style.zIndex = 0;
  document.getElementById("containholderB").style.zIndex = 0;
  document.getElementById("containholderC").style.zIndex = 0;
  //document.getElementById("containholderD").style.zIndex = 0;
}

function dayaclicked() {
  everyoneup();
  changesche(
    "8:30am - 10:30am",
    "Data Science",
    "LC315",
    "1:00pm - 5:00pm",
    "Web Programming",
    "LC207"
  );
  document.getElementById("daya").style.transform = "translateY(50%)";
}

function daybclicked() {
  everyoneup();
  changesche(
    "10:00am - 12:00pm",
    "Data Science",
    "Computer Lab 3",
    "3:00pm - 5:00pm",
    "Speak Tech",
    "LC310"
  );
  document.getElementById("dayb").style.transform = "translateY(50%)";
}

function daycclicked() {
  everyoneup();
  changesche(
    "8:30am - 10:30am",
    "Life Skill 21",
    "LC407",
    "1:00pm - 4:00pm",
    "Business Int",
    "LC204"
  );

  document.getElementById("dayc").style.transform = "translateY(50%)";
}

function daydclicked() {
  everyoneup();
  changesche(
    "8:30am - 11:30am",
    "System Analy",
    "LC316",
    "3:00pm - 5:00pm",
    "Idea to Entrepren",
    "LC306"
  );

  document.getElementById("dayd").style.transform = "translateY(50%)";
}

function dayeclicked() {
  everyoneup();
  changesche(
    "8:30am - 10:30am",
    "Effective Eng",
    "LC315",
    "1:00pm - 3:00pm",
    "Eng in workplace",
    "LC209"
  );

  document.getElementById("daye").style.transform = "translateY(50%)";
}

function everyoneup() {
  changesche("-", "-", "-", "-", "-", "-");
  document.getElementById("daya").style.transform = "translateY(0%)";
  document.getElementById("dayb").style.transform = "translateY(0%)";
  document.getElementById("dayc").style.transform = "translateY(0%)";
  document.getElementById("dayd").style.transform = "translateY(0%)";
  document.getElementById("daye").style.transform = "translateY(0%)";
}

function changesche(morntm, morncls, mornr, afttm, aftcls, aftr) {
  document.getElementById("morningtime").innerHTML = morntm;
  document.getElementById("morningclass").innerHTML = morncls;
  document.getElementById("morningroom").innerHTML = mornr;
  document.getElementById("aftertime").innerHTML = afttm;
  document.getElementById("afterclass").innerHTML = aftcls;
  document.getElementById("afterroom").innerHTML = aftr;
}

function warp(destinationA) {
  window.location.href = destinationA;
}

window.onload = function () {
  bclicked();
};

function workbutclickA(inputfor){
  weveryoneoff();

  if(inputfor=='A'){
    document.getElementById("worka").style.transform = "translateX(30%)";
    document.getElementById("workheader").innerText = "Meister Kaksik";
    document.getElementById("workdetail1").innerText =
      "Male\nAge : 28 Y/O\nHeight : 166 cm\nWeight 45.6 kg";
    document.getElementById("workdetail2").innerText =
      "Habit :\n- Talkative : Can speak in any normal situation\n- Self-awareness : Able to guess/feeling-like whenever you are called.\n- Risk taker : Able to participate in higher treat level.\n- Gambler : Can do gambling host for fun.\n\nTrait :\n- Loud : Cannot be gossip. (Can choose not to speak)";
    document.getElementById("workimage").src = "img/boy.jpg";
  }
  if(inputfor=='B'){
    document.getElementById("workb").style.transform = "translateX(30%)";
    document.getElementById("workheader").innerText = "Maucmop Kaksik";
    document.getElementById("workdetail1").innerText =
      "Female\nAge : 27 Y/O\nHeight : 155 cm\nWeight 44.5 kg";
    document.getElementById("workdetail2").innerText =
      "Habit :\n- Acknowledge : Easy learner\n- Careful : Able to see choose to not work in danger situation.\n- Slow-roll : In roll check, will roll it last.\n- Bartender : Can do bartendering.\n\nTrait :\n- Overconfidence : Will not work with other if possible.";
    document.getElementById("workimage").src = "img/girl.jpg";
  }
  if(inputfor=='C'){
    document.getElementById("workc").style.transform = "translateX(30%)";
    document.getElementById("workheader").innerText = "Mestre Kaksik";
    document.getElementById("workdetail1").innerText =
      "Male\nAge : 22 Y/O\nHeight : 158 cm\nWeight 51.6 kg";
    document.getElementById("workdetail2").innerText =
      "Habit :\n- Mind Clearance : Can witness the dire situation easily.\n- Controlable : Able to persuade someone to take risk.\n- Cleared Value : Always stay clean.\n- Consultant : Able to do consultant.\n\nTrait :\n- Greed : If money is related, always take whatever it is for money.";
    document.getElementById("workimage").src = "img/boy.jpg";
  }
  if(inputfor=='D'){
    document.getElementById("workd").style.transform = "translateX(30%)";
    document.getElementById("workheader").innerText = "Mjeshter Kaksik";
    document.getElementById("workdetail1").innerText =
      "Female\nAge : 32 Y/O\nHeight : 164 cm\nWeight 47.9 kg";
    document.getElementById("workdetail2").innerText =
      "Habit :\n- Endured : Will not suffer mentally pain from getting physical hurt.\n- Justice : Can sacrifice self for other safety.\n- Fleet step : Walk faster than other.\n- Paper Assistance : Can do paper work perfectly.\n\nTrait :\n- Shorten Temper : Easily angered.";
    document.getElementById("workimage").src = "img/girl.jpg";
  }
  if(inputfor=='E'){
    document.getElementById("worke").style.transform = "translateX(30%)";
    document.getElementById("workheader").innerText = "Tatsujin Kaksik";
    document.getElementById("workdetail1").innerText =
      "Male\nAge : 29 Y/O\nHeight : 172 cm\nWeight 62.9 kg";
    document.getElementById("workdetail2").innerText =
      "Habit :\n- Charming : Everything like him\n- Workaholic : Able to work consistnctly without break.\n- Focused : Will throw dummy dice to test before real one.\n- Home cook : He can cook.\n\nTrait :\n- Fagile : Can get hurt by minor injury.";
    document.getElementById("workimage").src = "img/boy.jpg";
  }






  if(inputfor=='F'){

  }
}



function weveryoneoff() {
  document.getElementById("worka").style.transform = "translateX(0%)";
  document.getElementById("workb").style.transform = "translateX(0%)";
  document.getElementById("workc").style.transform = "translateX(0%)";
  document.getElementById("workd").style.transform = "translateX(0%)";
  document.getElementById("worke").style.transform = "translateX(0%)";
}

function showimg(){
  document.getElementById("popupimage").style.opacity = 1;
  document.getElementById("popupimage").style.zIndex = 5;
  document.getElementById("popupimgimg").src = document.getElementById("workimage").src;
}

function hideimg(){
  document.getElementById("popupimage").style.opacity = 0;

  setTimeout(function () {
    document.getElementById("popupimage").style.zIndex = -3;
  }, 750);
}