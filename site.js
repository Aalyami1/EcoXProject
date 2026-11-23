/* =====================================================================
   EcoX — shared site behaviour (every page)
   ===================================================================== */
(function () {
  "use strict";
  var doc = document.documentElement;
  var LANG = doc.lang === "ar" ? "ar" : "en";
  var AR = LANG === "ar";
  var CFG = window.ECOX || {};
  var C = CFG.company || {};
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  doc.classList.add("js");

  var T = {
    en: { required: "This field is required.", email: "Please enter a valid email address.", service: "Please choose a service.",
          short: "Please tell us a little more (at least 10 characters).", sending: "Sending…",
          thanks: "Thank you!", sent: "Your message has been received. Our team will get back to you within one business day.",
          again: "Send another message", demo: "Demo mode — connect a form service in config.js to receive messages.",
          all: "All", prev: "Previous project", next: "Next project", menu: "Menu", close: "Close", top: "Back to top",
          notFound: "Project not found", home: "Home", projects: "Projects",
          meta: ["Client", "Location", "Year", "Duration", "Project value", "Our role"],
          overview: "Overview", challenge: "The Challenge", solution: "Our Solution", scope: "Scope of Work", results: "Key Results", gallery: "Project Gallery",
          ctaT: "Have a similar project in mind?", ctaP: "Talk to our engineers about scope, schedule and budget.", ctaB: "Start a Project", error: "Something went wrong. Please try again or email us directly." },
    ar: { required: "هذا الحقل مطلوب.", email: "يرجى إدخال بريد إلكتروني صحيح.", service: "يرجى اختيار الخدمة.",
          short: "يرجى كتابة المزيد من التفاصيل (10 أحرف على الأقل).", sending: "جارٍ الإرسال…",
          thanks: "شكراً لك!", sent: "تم استلام رسالتك. سيتواصل معك فريقنا خلال يوم عمل واحد.",
          again: "إرسال رسالة أخرى", demo: "وضع العرض — اربط خدمة نماذج في ملف config.js لاستقبال الرسائل.",
          all: "الكل", prev: "المشروع السابق", next: "المشروع التالي", menu: "القائمة", close: "إغلاق", top: "العودة للأعلى",
          notFound: "المشروع غير موجود", home: "الرئيسية", projects: "المشاريع",
          meta: ["العميل", "الموقع", "السنة", "المدة", "قيمة المشروع", "دورنا"],
          overview: "نظرة عامة", challenge: "التحدي", solution: "الحل الذي قدمناه", scope: "نطاق العمل", results: "أبرز النتائج", gallery: "معرض صور المشروع",
          ctaT: "هل لديك مشروع مشابه؟", ctaP: "تحدث مع مهندسينا حول النطاق والجدول الزمني والميزانية.", ctaB: "ابدأ مشروعاً", error: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا عبر البريد الإلكتروني." }
  }[LANG];

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function pick(v) { return v && typeof v === "object" && !Array.isArray(v) ? (v[LANG] || v.en) : v; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function page(name) { return name + (AR ? "2" : "") + ".html"; }

  /* ---------- 1. Company info from config ---------- */
  $$("[data-company]").forEach(function (el) {
    var v = pick(C[el.getAttribute("data-company")]);
    if (v != null && v !== "") el.textContent = v;
  });
  $$('a[data-company-link="phone"]').forEach(function (a) { if (C.phone) a.href = "tel:" + C.phone.replace(/[^\d+]/g, ""); });
  $$('a[data-company-link="email"]').forEach(function (a) { if (C.email) a.href = "mailto:" + C.email; });
  $$("[data-stat]").forEach(function (el) {
    var v = (CFG.stats || {})[el.getAttribute("data-stat")];
    if (!v) return;
    if (AR && /\+$/.test(v)) v = "+" + v.slice(0, -1);
    el.textContent = v;
  });
  $$("a[data-social]").forEach(function (a) {
    var url = (CFG.social || {})[a.getAttribute("data-social")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    else { a.href = "#"; a.addEventListener("click", function (e) { e.preventDefault(); }); }
  });

  /* ---------- 2. Navigation: sticky shadow + mobile menu ---------- */
  var nav = $('nav[data-component="@components/NavBar.jsx"]');
  var toggle = nav && $(".menu-toggle", nav);
  var links = nav && $(".nav-links", nav);
  if (toggle && links) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", T.menu);
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "✕" : "☰";
    });
    document.addEventListener("click", function (e) {
      if (links.classList.contains("open") && !nav.contains(e.target)) toggle.click();
    });
  }
  var topBtn = document.createElement("button");
  topBtn.className = "x-top"; topBtn.type = "button"; topBtn.setAttribute("aria-label", T.top); topBtn.textContent = "↑";
  topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });
  document.body.appendChild(topBtn);
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("is-scrolled", y > 10);
    topBtn.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- 3. Project case-study page (rendered from config) ---------- */
  var cs = $("#case-study");
  if (cs) renderCaseStudy(cs);

  function renderCaseStudy(root) {
    var list = CFG.projects || [];
    var id = new URLSearchParams(location.search).get("p");
    var i = Math.max(0, list.findIndex(function (p) { return p.id === id; }));
    var p = list[i];
    if (!p) { root.innerHTML = '<section class="x-section"><h1 class="x-h2">' + T.notFound + "</h1></section>"; return; }
    var d = p[LANG] || p.en;
    document.title = d.title + " | " + pick(C.name);
    var prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    var meta = [d.client, d.location, p.year, pick(p.duration), pick(p.value), d.role];
    root.innerHTML =
      '<header class="x-hero x-hero--image"><img class="x-hero__bg" src="' + esc(p.image) + '" alt=""><div class="x-hero__shade"></div>' +
        '<div class="x-crumbs"><a href="' + page("index") + '">' + T.home + '</a><span>/</span><a href="' + page("projectspage") + '">' + T.projects + "</a><span>/</span><span>" + esc(d.title) + "</span></div>" +
        '<div class="x-eyebrow">' + esc(d.category) + "</div><h1>" + esc(d.title) + "</h1><p>" + esc(d.summary) + "</p></header>" +
      '<dl class="x-meta">' + meta.map(function (v, k) { return "<div><dt>" + T.meta[k] + "</dt><dd>" + esc(v) + "</dd></div>"; }).join("") + "</dl>" +
      '<section class="x-section"><div class="x-cs"><div class="reveal">' +
        "<h3>" + T.overview + "</h3><p>" + esc(d.summary) + "</p>" +
        "<h3>" + T.challenge + "</h3><p>" + esc(d.challenge) + "</p>" +
        "<h3>" + T.solution + "</h3><p>" + esc(d.solution) + "</p></div>" +
        '<aside class="x-aside reveal"><h3>' + T.scope + '</h3><ul class="x-checks">' + d.scope.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></aside></div></section>" +
      '<section class="x-section x-section--surface"><div class="x-eyebrow">' + T.results + '</div><div class="x-results">' +
        d.results.map(function (r) { return '<div class="x-result reveal"><b>' + esc(r[0]) + "</b><span>" + esc(r[1]) + "</span></div>"; }).join("") + "</div></section>" +
      '<section class="x-section"><div class="x-eyebrow">' + T.gallery + '</div><div class="x-gallery">' +
        p.gallery.map(function (g) { return '<button type="button" class="reveal" data-lightbox="' + esc(g) + '"><img src="' + esc(g) + '" alt="' + esc(d.title) + '" loading="lazy"></button>'; }).join("") + "</div></section>" +
      '<section class="x-section x-section--tight"><div class="x-cta reveal"><div><h2>' + T.ctaT + "</h2><p>" + T.ctaP + '</p></div><a class="x-btn" href="' + page("contactuspage") + '">' + T.ctaB + "</a></div></section>" +
      '<nav class="x-pager" aria-label="Projects"><a href="' + page("project") + "?p=" + prev.id + '"><small>' + (AR ? "→ " : "← ") + T.prev + "</small><b>" + esc((prev[LANG] || prev.en).title) + "</b></a>" +
        '<a href="' + page("project") + "?p=" + next.id + '"><small>' + T.next + (AR ? " ←" : " →") + "</small><b>" + esc((next[LANG] || next.en).title) + "</b></a></nav>";
  }

  /* ---------- 4. Project filters (Projects page) ---------- */
  var filterBar = $("#project-filters");
  if (filterBar) {
    var grid = filterBar.closest("[data-component]").querySelector(".grid");
    var cards = grid ? Array.prototype.slice.call(grid.children) : [];
    var cats = [];
    cards.forEach(function (c) {
      var label = c.querySelector(".uppercase");
      var cat = label ? label.textContent.trim() : "";
      c.setAttribute("data-cat", cat);
      if (cat && cats.indexOf(cat) < 0) cats.push(cat);
    });
    function count(cat) { return cards.filter(function (c) { return !cat || c.getAttribute("data-cat") === cat; }).length; }
    [""].concat(cats).forEach(function (cat, k) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "x-filter" + (k === 0 ? " is-active" : "");
      b.innerHTML = esc(cat || T.all) + "<span>" + count(cat) + "</span>";
      b.setAttribute("aria-pressed", k === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        $$(".x-filter", filterBar).forEach(function (o) { o.classList.remove("is-active"); o.setAttribute("aria-pressed", "false"); });
        b.classList.add("is-active"); b.setAttribute("aria-pressed", "true");
        cards.forEach(function (c) { c.classList.toggle("is-filtered-out", !!cat && c.getAttribute("data-cat") !== cat); });
      });
      filterBar.appendChild(b);
    });
  }

  /* ---------- 5. Animated counters ---------- */
  var counterSel = "[data-stat], .bg-navy-dark .text-3xl, h3.text-3xl.text-secondary, .text-3xl.font-bold.text-secondary, .x-hse__stat b, .x-result b";
  var counters = $$(counterSel).filter(function (el) { return el.children.length === 0 && /\d/.test(el.textContent); });
  counters.forEach(function (el) {
    var txt = el.textContent.trim();
    var m = txt.match(/^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!m) return;
    el._count = { pre: m[1], num: parseFloat(m[2].replace(/,/g, "")), dec: (m[2].split(".")[1] || "").length, comma: m[2].indexOf(",") > -1, post: m[3], final: txt };
  });
  function fmt(o, v) {
    var s = v.toFixed(o.dec);
    if (o.comma) s = Number(s).toLocaleString("en-US", { minimumFractionDigits: o.dec, maximumFractionDigits: o.dec });
    return o.pre + s + o.post;
  }
  function runCounter(el) {
    var o = el._count; if (!o || o.done) return; o.done = true;
    if (reduceMotion || o.num === 0) { el.textContent = o.final; return; }
    var start = null, dur = 1600;
    function step(t) {
      if (!start) start = t;
      var k = Math.min(1, (t - start) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = k < 1 ? fmt(o, o.num * e) : o.final;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- 6. Scroll reveal ---------- */
  var revealSel = [
    ".x-section .x-eyebrow", ".x-h2", ".x-lead", ".x-cert", ".x-quote", ".x-logo", ".x-hse__stat", ".x-card", ".x-job", ".x-post", ".x-cta",
    "[data-component] > .grid > *", "[data-component] .grid.grid-cols-3 > *", "[data-component] .grid.grid-cols-4 > *",
    "[data-component] h2", ".border-b.border-border.pb-16", "[data-component] .space-y-6 > *"
  ].join(",");
  var revealEls = $$(revealSel).filter(function (el) { return !el.closest("nav, footer, .x-hero"); });
  revealEls.forEach(function (el) {
    el.classList.add("reveal");
    var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    el.style.transitionDelay = Math.min(sib, 5) * 80 + "ms";
  });
  $$(".reveal").forEach(function (el) { if (revealEls.indexOf(el) < 0) revealEls.push(el); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-visible");
        if (en.target._count) runCounter(en.target);
        $$("*", en.target).forEach(function (c) { if (c._count) runCounter(c); });
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
    counters.forEach(function (el) { if (el._count) io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- 7. Contact form ---------- */
  var form = $("#contact-form");
  if (form) {
    var success = $("#form-success");
    var demo = !CFG.formEndpoint;
    if (demo) {
      var n = document.createElement("p"); n.className = "form-demo-note"; n.textContent = T.demo; form.appendChild(n);
    }
    function setErr(f, msg) {
      clearErr(f);
      if (!msg) return true;
      f.classList.add("field-error"); f.setAttribute("aria-invalid", "true");
      var s = document.createElement("span"); s.className = "error-msg"; s.textContent = msg; s.id = f.name + "-err";
      f.setAttribute("aria-describedby", s.id);
      f.insertAdjacentElement("afterend", s);
      return false;
    }
    function clearErr(f) {
      f.classList.remove("field-error"); f.removeAttribute("aria-invalid");
      var s = f.nextElementSibling; if (s && s.classList.contains("error-msg")) s.remove();
    }
    function check(f) {
      var v = (f.value || "").trim();
      if (f.required && !v) return setErr(f, f.tagName === "SELECT" ? T.service : T.required);
      if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return setErr(f, T.email);
      if (f.tagName === "TEXTAREA" && v && v.length < 10) return setErr(f, T.short);
      return setErr(f, "");
    }
    $$("input, select, textarea", form).forEach(function (f) {
      f.addEventListener("blur", function () { if (f.value) check(f); });
      f.addEventListener("input", function () { if (f.classList.contains("field-error")) check(f); });
      f.addEventListener("change", function () { if (f.classList.contains("field-error")) check(f); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fields = $$("input, select, textarea", form);
      var ok = fields.map(check).every(Boolean);
      if (!ok) { var bad = $(".field-error", form); if (bad) bad.focus(); return; }
      var btn = $('button[type="submit"]', form), label = btn.textContent;
      btn.disabled = true; btn.textContent = T.sending;
      var done = function () {
        form.style.display = "none"; success.classList.add("show");
        success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
        btn.disabled = false; btn.textContent = label; form.reset();
      };
      if (demo) { setTimeout(done, 900); return; }
      var refBox = $("#form-ref");
      if (refBox) refBox.hidden = true;
      fetch(CFG.formEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (data) {
            if (!r.ok || data.success === false) throw new Error(data.message || r.status);
            if (refBox && data.reference) { $("strong", refBox).textContent = data.reference; refBox.hidden = false; }
            done();
          });
        })
        .catch(function () { btn.disabled = false; btn.textContent = label; alert(T.error); });
    });
    var again = $("#form-again");
    if (again) again.addEventListener("click", function () { success.classList.remove("show"); form.style.display = ""; });
  }

  /* ---------- 8. Google map ---------- */
  var map = $("#office-map");
  if (map && C.mapQuery) map.src = "https://www.google.com/maps?q=" + encodeURIComponent(C.mapQuery) + "&z=13&hl=" + LANG + "&output=embed";

  /* ---------- 9. Lightbox ---------- */
  var lb;
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-lightbox]");
    if (!t) return;
    if (!lb) {
      lb = document.createElement("div"); lb.className = "x-lightbox";
      lb.innerHTML = '<button type="button" aria-label="' + T.close + '">×</button><img alt="">';
      lb.addEventListener("click", function () { lb.classList.remove("open"); });
      document.addEventListener("keydown", function (k) { if (k.key === "Escape") lb.classList.remove("open"); });
      document.body.appendChild(lb);
    }
    $("img", lb).src = t.getAttribute("data-lightbox");
    lb.classList.add("open");
  });
})();
