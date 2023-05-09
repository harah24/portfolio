// Contact(form)section 
// form reset code from formspree.io

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};