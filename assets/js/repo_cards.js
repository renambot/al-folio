// Progressive enhancement for the cards on the repositories page.
//
// The cards are rendered complete by Liquid (name, GitHub icon, link), so the
// page is never broken when GitHub is unreachable or rate-limits us. This
// script only fills in the live metadata, and stays silent when it cannot.
(function () {
  "use strict";

  function api(path) {
    return fetch("https://api.github.com" + path, {
      headers: { Accept: "application/vnd.github+json" },
    }).then(function (response) {
      if (!response.ok) throw new Error("GitHub API returned " + response.status);
      return response.json();
    });
  }

  // 1234 -> "1.2k", so the counters stay narrow on small cards.
  function compact(value) {
    if (typeof value !== "number") return null;
    if (value < 1000) return String(value);
    return (value / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }

  // Writes a value into the card and reveals the stat it belongs to. Missing
  // values leave the placeholder hidden rather than showing an empty stat.
  function fill(card, selector, value) {
    if (value === null || value === undefined || value === "") return;
    var target = card.querySelector(selector);
    if (!target) return;
    target.textContent = value;
    var stat = target.closest("[hidden]");
    if (stat) stat.hidden = false;
  }

  document.querySelectorAll(".repo-card[data-repo]").forEach(function (card) {
    api("/repos/" + card.dataset.repo)
      .then(function (repo) {
        fill(card, "[data-repo-description]", repo.description);
        fill(card, "[data-repo-language] span:last-child", repo.language);
        fill(card, "[data-repo-stars] span:last-child", compact(repo.stargazers_count));
        fill(card, "[data-repo-forks] span:last-child", compact(repo.forks_count));
      })
      .catch(function () {
        /* keep the static card as-is */
      });
  });

  document.querySelectorAll(".repo-card[data-user]").forEach(function (card) {
    api("/users/" + card.dataset.user)
      .then(function (user) {
        fill(card, "[data-user-name]", user.name || user.login);
        fill(card, "[data-user-bio]", user.bio);
        fill(card, "[data-user-repos] span:last-of-type", compact(user.public_repos));
        fill(card, "[data-user-followers] span:last-of-type", compact(user.followers));
      })
      .catch(function () {
        /* keep the static card as-is */
      });
  });
})();
