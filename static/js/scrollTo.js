function scrollToKey(key, opts = { offset: 70, attr: "data-scroll-to" }) {
  console.log("EXECUTIONG");
  const el = document.querySelectorAll(`[${attr}='${key}']`)[0];

  if (el) {
    const top = window.pageYOffset + el.getBoundingClientRect().top - offset;
    window.scrollTo({
      top: key === "home" ? 0 : top,
      behavior: "smooth"
    });
  }
}
