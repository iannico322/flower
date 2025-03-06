
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Birthday Day Ma\'am Nidz ❤️').split('');
    const from = ('eGov Team').split('');
    const titleElement = document.getElementById('title');
    const fromElement = document.getElementById('from');
    
    console.log("Title element:", titleElement);
    console.log("From element:", fromElement); // Check if these elements exist
    
    let titleIndex = 0;
    let fromIndex = 0;

    function appendTitle() {
      if (titleIndex < titles.length) {
        titleElement.innerHTML += titles[titleIndex];
        titleIndex++;
        setTimeout(appendTitle, 200); // 200ms delay
      } else {
        console.log("Title animation complete, starting from text");
        // Start appending "from" text only after title is complete
        setTimeout(appendFrom, 200);
      }
    }

    function appendFrom() {
      console.log("appendFrom called");
      if (fromIndex < from.length) {
        fromElement.innerHTML += from[fromIndex];
        fromIndex++;
        setTimeout(appendFrom, 200); // 200ms delay
      } else {
        console.log("From text animation complete");
      }
    }

    appendTitle();
    // appendFrom will be called after appendTitle completes

    clearTimeout(c);
  }, 500);
};