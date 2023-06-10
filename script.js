const btn = document.querySelector(".talk");
const text=document.querySelector(".main .data h3");
function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  window.speechSynthesis.speak(text_speak);
}
function wishMe() {
  var day = new Date();
  var hr = day.getHours();
  if (hr >= 0 && hr < 12) {
    speak("Good Morning Sir");
  } else if (hr == 12) {
    speak("Good Noon Sir");
  } else if (hr > 12 && hr <= 12) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}
const SpeechRecog = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecog();
recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  speakThis(transcript.toLowerCase());
};
window.addEventListener("load", () => {
    console.log("starting");
    wishMe();
    console.log("starting33");
     speak("I am jarvis the virtual artificial intelligence and i am here to assist you the relative task sysbased tyca 24 hours a day 7 day a week");
     speak("Importing preferences for harm interface system is now fully operation");
     speak("how can i help you sir");
    console.log("starting100");
});
btn.addEventListener("click", () => {
  text.innerText="";
  recognition.start();
  btn.innerText="Listening..";
});
function speakThis(message) {
  console.log(message);
  text.innerText=message;
  if (message.includes("hey") || message.includes("hello")) {
    speak("hello sir how can i help you");
  }
  else if(message.includes("how are you")){
    speak("i am good how can i help you sir");
  }
  else if (message.includes("open")) {
    let msg = message.replace("open ", "");
    if (msg === "calculator") {
      speak("opening calculator");
      window.open("Calculator:///");
    } else {
      let link = "https://www." + msg + ".com";
      speak("opening " + msg);
      window.open(link, "_blank");
    }
  } else if (message.includes("time")) {
    let time = new Date().toLocaleTimeString();
    console.log(time);
    speak("the time is " + time);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleDateString();
    speak("the date is " + date);
  }
  else if(message.include("you")){
    speak("I am jarvis the virtual artificial intelligence and i am here to assist you the relative task sysbased tyca 24 hours a day 7 day a week");
    // speak("Importing preferences for harm interface system is now fully operation");
    speak("how can i help you sir");
  }
  else if(message.includes("what")||message.includes("how")||message.includes("who")||message.includes("tell")){
    let str=message.replace(" ","+");
    let link="https://www.google.com/search?q="+str;
    speak("searching on google");
    window.open(link,"_blank");
  }
  // else if(message.includes("opening calculator")){
  //     speak("opening calculator");
  //     window.open("Calculator:///");
  // }
  else{
    speak("i cannot understand please sir tell me again");
    btn.innerText="Ask Something";
  }

  recognition.stop();
  btn.innerText="Ask Something";
};
