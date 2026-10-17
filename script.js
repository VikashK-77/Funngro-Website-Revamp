
// 1. Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after clicking a navigation link
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });

  // Close mobile menu when switching to desktop layout
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    }
  });
}


// 2. FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question
      .closest(".faq-item")
      .querySelector(".faq-answer");

    const isExpanded =
      question.getAttribute("aria-expanded") === "true";

    // Close all other FAQ answers
    faqQuestions.forEach((otherQuestion) => {
      const otherAnswer = otherQuestion
        .closest(".faq-item")
        .querySelector(".faq-answer");

      otherQuestion.setAttribute("aria-expanded", "false");
      otherAnswer.hidden = true;

      const icon = otherQuestion.querySelector("span");
      if (icon) {
        icon.textContent = "+";
      }
    });

    // Toggle the clicked FAQ
    if (!isExpanded) {
      question.setAttribute("aria-expanded", "true");
      answer.hidden = false;

      const icon = question.querySelector("span");
      if (icon) {
        icon.textContent = "−";
      }
    }
  });
});


// 3. Console message for development
console.log("Funngro Website Revamp loaded successfully.");
