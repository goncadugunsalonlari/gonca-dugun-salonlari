
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("commentForm");
  const commentList = document.getElementById("comment-list");

  function loadComments() {
    const saved = JSON.parse(localStorage.getItem("gonca-comments")) || [];
    commentList.innerHTML = saved.map(
      c => `<div class="comment"><strong>${c.name}</strong><p>${c.text}</p></div>`
    ).join("");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();
    if (name && comment) {
      const newComment = { name, text: comment };
      const saved = JSON.parse(localStorage.getItem("gonca-comments")) || [];
      saved.push(newComment);
      localStorage.setItem("gonca-comments", JSON.stringify(saved));
      loadComments();
      form.reset();
    }
  });

  loadComments();
});
