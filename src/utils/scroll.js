export const smoothScrollTo = (hash) => {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};