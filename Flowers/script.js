function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isExpanded = question.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      answer.style.height = '0';
      question.setAttribute('aria-expanded', 'false');
    } else {
      const height = answer.scrollHeight;
      answer.style.height = height + 'px';
      question.setAttribute('aria-expanded', 'true');
    }
  });
});
