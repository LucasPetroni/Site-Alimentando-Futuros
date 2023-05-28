$ = (id) => {
  return document.getElementById(id);
};
togglePassVisibility = (el) => {
  $(el).type === "password" ? ($(el).type = "text") : ($(el).type = "password");
  $("visible").style.display === "none"
    ? ($("visible").style.display = "block")
    : ($("visible").style.display = "none");
};
