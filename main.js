const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const res = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

  if (res.ok) {
    alert("Message sent successfully ✨");
    form.reset();
  } else {
    alert("Something went wrong. Try again.");
  }
});
