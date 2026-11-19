(function () {
  /* ====== EDIT BAGIAN INI ====== */
  var NAMA = "Kia";          // nama pacarmu
  var DARI = "Bubub Ciel";   // namamu
  var FOTO = [               // taruh file di folder img/
    { src: "img/foto1.jpg", cap: "Pertama bertemu" },
    { src: "img/foto2.jpg", cap: "Hari yang manis" },
    { src: "img/foto3.jpg", cap: "Bersamamu" },
    { src: "img/foto4.jpg", cap: "Senyummu" },
    { src: "img/foto5.jpg", cap: "Kenangan kita" },
    { src: "img/foto6.jpg", cap: "Selamanya" }
  ];
  var SURAT = [
    { j: "手紙", t: "Buka yang ini dulu", x: "Untuk " + NAMA + ", cahaya kecilku.\n\nAku tidak pandai merangkai kata, tapi hatiku selalu fasih tiap menyebut namamu.\n\nKamu datang seperti komet yang melintas sekali dalam seumur hidup, dan aku bersyukur sempat menengadah tepat pada waktunya.\n\nTerima kasih sudah menjadi rumah bagi hatiku.\n\nAku mencintaimu, hari ini dan di setiap episode setelahnya." },
    { j: "会いたい", t: "Buka kalau kangen", x: "Kalau rindu datang, pandanglah langit malam.\nBintang yang kamu lihat, sedang kupandangi juga.\nJarak hanyalah jeda di antara dua pelukan yang akan segera bertemu." },
    { j: "頑張って", t: "Buka kalau capek", x: "Sandarkan lelahmu padaku, sayang.\nKamu tidak harus kuat setiap saat.\nAku di sini, jadi payung saat hujanmu turun,\ndan selimut saat dunia terasa dingin.\nGanbatte, cintaku." },
    { j: "笑って", t: "Buka kalau sedih", x: "Hei, sini, kupeluk dulu dalam bayangan.\nAirmatamu berharga, tapi senyummu lebih berharga.\nCeritakan semuanya padaku,\naku akan mendengarkan sampai langit berubah jadi fajar." },
    { j: "おやすみ", t: "Buka sebelum tidur", x: "Tutup matamu pelan-pelan.\nBiar bintang yang menjaga mimpimu,\ndan biar aku yang menjadi isi mimpi itu.\nOyasumi, cintaku. Sampai bertemu di mimpi." },
    { j: "約束", t: "Buka yang terakhir", x: "Aku berjanji akan terus memilihmu, setiap hari.\nSuatu hari kita melihat sakura bersama di Jepang,\nbergandengan tangan di bawah kelopak yang jatuh.\nYakusoku da yo, sayangku." }
  ];
  /* ============================= */

  var $ = function (i) { return document.getElementById(i); };
  var rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
  $("nm").textContent = NAMA; $("from").textContent = "— " + DARI + " 💗";


  /* ---------- Dunia Jepang: pohon sakura, taman, lentera, bunga mekar ---------- */
  var BLC = ["#ffd0e0", "#ffb7d1", "#ff9fc0", "#fff0f5", "#f6b8e6", "#ffc2d4"];
  function bloom(r, col, d, n) {
    n = n || 5; var s = "";
    for (var k = 0; k < n; k++) s += '<ellipse cx="0" cy="' + (-r * .55).toFixed(1) + '" rx="' + (r * .4).toFixed(1) + '" ry="' + (r * .62).toFixed(1) + '" transform="rotate(' + (k * 360 / n).toFixed(0) + ')" fill="' + col + '" stroke="#ff7fa8" stroke-opacity=".35" stroke-width=".6"/>';
    s += '<circle r="' + (r * .2).toFixed(1) + '" fill="#ffd98a"/>';
    return '<g class="fi" style="--d:' + d.toFixed(2) + 's">' + s + "</g>";
  }
  function at(x, y, a, inner) { return '<g transform="translate(' + x.toFixed(1) + " " + y.toFixed(1) + ") rotate(" + a.toFixed(0) + ')">' + inner + "</g>"; }
  var BR = [["M-10 26C70 18 150 46 205 112", 9], ["M70 34C98 90 104 150 92 236", 5], ["M150 60C196 98 236 154 238 262", 5], ["M-10 110C26 122 52 160 62 214", 5], ["M200 108C250 130 290 170 300 220", 4]];
  function tree(el) {
    var h = '<svg viewBox="0 0 320 300">';
    BR.forEach(function (b, i) { h += '<path class="br" pathLength="1" style="animation-delay:' + (i * .25).toFixed(2) + 's" d="' + b[0] + '" fill="none" stroke="#5a2f4a" stroke-width="' + b[1] + '" stroke-linecap="round"/>'; });
    el.innerHTML = h + "</svg>";
    var svg = el.firstChild, fl = "";
    [].forEach.call(svg.querySelectorAll("path"), function (p, bi) {
      var len = p.getTotalLength();
      for (var l = len * .1; l < len; l += (12 + Math.random() * 8) * (innerWidth < 640 ? 1.8 : 1)) {
        var pt = p.getPointAtLength(l), r = 6 + Math.random() * 7;
        fl += at(pt.x + (Math.random() - .5) * 14, pt.y + (Math.random() - .5) * 14, Math.random() * 72, bloom(r, BLC[(Math.random() * BLC.length) | 0], .5 + bi * .25 + (l / len) * 1.4 + Math.random() * .5, 5));
      }
    });
    svg.insertAdjacentHTML("beforeend", fl);
  }
  tree($("treeL")); tree($("treeR"));
  var gw = 0;
  function garden() {
    var w = innerWidth; if (Math.abs(w - gw) < 40) return; gw = w;
    var g = $("garden"), h = "", n = Math.ceil(w / 38);
    g.setAttribute("viewBox", "0 0 " + w + " 170");
    for (var i = 0; i < n; i++) {
      var x = 14 + i * (w / n) + Math.random() * 14, ht = 44 + Math.random() * 92, dx = (Math.random() - .5) * 30, d = .4 + Math.random() * 2.4, y = 172 - ht;
      h += '<path class="stem" pathLength="1" style="--d:' + d.toFixed(2) + 's" d="M' + x.toFixed(1) + " 172Q" + (x + dx * 1.6).toFixed(1) + " " + (172 - ht * .55).toFixed(1) + " " + (x + dx).toFixed(1) + " " + y.toFixed(1) + '" fill="none" stroke="#7fd39b" stroke-width="2.2" stroke-linecap="round"/>';
      h += at(x + dx * .7, 172 - ht * .45, (i % 2 ? 1 : -1) * 55, '<g class="fi" style="--d:' + (d + .8).toFixed(2) + 's"><ellipse cx="8" cy="0" rx="9" ry="3.6" fill="#8fd9a8"/></g>');
      h += at(x + dx, y, Math.random() * 40, bloom(8 + Math.random() * 8, BLC[(Math.random() * BLC.length) | 0], d + 1.1, [5, 5, 6, 8][(Math.random() * 4) | 0]));
    }
    g.innerHTML = h;
  }
  garden(); var gt; addEventListener("resize", function () { clearTimeout(gt); gt = setTimeout(garden, 250); });
  $("hb").innerHTML = at(0, 0, 0, bloom(56, "#ffc2d4", .2, 5)) + at(0, 0, 36, bloom(38, "#ff9fc0", .7, 5)) + at(0, 0, 0, bloom(18, "#fff0f5", 1.1, 5));
  [[36, 40], [50, 78], [63, 52]].forEach(function (c) {
    var l = document.createElement("div"); l.className = "chochin"; l.style.cssText = "left:" + c[0] + "%;--l:" + c[1] + "px;animation-delay:-" + (Math.random() * 3).toFixed(1) + "s";
    l.innerHTML = "<i></i>"; document.querySelector(".bg").appendChild(l);
  });

  /* ---------- Canvas: kelopak, emoji, kembang api ---------- */
  var cv = $("fx"), cx = cv.getContext("2d"), W = 0, H = 0, P = [], DPR = Math.min(devicePixelRatio || 1, 1.5), lite = false, rt;
  function rs(force) {
    var w = innerWidth, h = innerHeight, rs0 = document.documentElement.style;
    rs0.setProperty("--W", w + "px"); rs0.setProperty("--H", h + "px");
    if (force !== true && Math.abs(w - W) < 2 && Math.abs(h - H) < 100) return;   // abaikan perubahan kecil (bar alamat HP)
    W = w; H = h; cv.width = W * DPR; cv.height = H * DPR; cv.style.width = W + "px"; cv.style.height = H + "px"; cx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  rs(true); addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(rs, 150); });
  var PC = ["#ffb7d1", "#ff758f", "#ff4d6d", "#ffccd5"];
  function petal(top) { P.push({ k: "p", x: Math.random() * W, y: top ? -20 : Math.random() * H, vx: .3 + Math.random() * .6, vy: .6 + Math.random(), r: 5 + Math.random() * 6, a: Math.random() * 6, va: (Math.random() - .5) * .06, s: Math.random() * 6, c: PC[(Math.random() * 4) | 0] }); }
  for (var i = 0; i < (rm ? 8 : (W < 700 ? 18 : 28)); i++) petal();
  var ES = {};
  function spr(t) { if (!ES[t]) { var c = document.createElement("canvas"); c.width = c.height = 48; var g = c.getContext("2d"); g.font = "34px serif"; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(t, 24, 26); ES[t] = c; } return ES[t]; }
  function emoji(x, y, n, set) { if (lite) n = Math.ceil(n * .6); for (var i = 0; i < n; i++) { var a = Math.random() * 6.28, s = 2 + Math.random() * 5; P.push({ k: "e", x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 3, g: .13, t: set[(Math.random() * set.length) | 0], z: 18 + Math.random() * 14, l: 1 }); } }
  function rain(set, n) { if (lite) n = Math.ceil(n / 2); for (var i = 0; i < n; i++) setTimeout(function () { P.push({ k: "e", x: Math.random() * W, y: -30, vx: (Math.random() - .5) * 1.5, vy: 2 + Math.random() * 3, g: .02, t: set[(Math.random() * set.length) | 0], z: 16 + Math.random() * 14, l: 1 }); }, i * 60); }
  var FC = ["#ffb7d1", "#ffd98a", "#a8f0d8", "#ff6f9f", "#ffffff", "#c79bff"];
  function boom(x, y) {
    var col = FC[(Math.random() * FC.length) | 0], n = rm ? 14 : (lite ? 26 : (W < 700 ? 34 : 46));
    for (var i = 0; i < n && P.length < 300; i++) { var a = (i / n) * 6.28, s = 1.5 + Math.random() * 3.5; P.push({ k: "f", x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, c: Math.random() < .25 ? "#fff" : col, l: 1 }); }
  }
  function rocket(x, y) { P.push({ k: "r", x: x < 0 ? Math.random() * W : x, y: H, ty: y, vx: 0, vy: -11 - Math.random() * 3 }); }
  var lt = 0, fa = 0, fn = 0, slow = 0;
  function goLite() {
    lite = true; document.documentElement.classList.add("lite");
    for (var j = P.length - 1; j >= 0; j--) if (P[j].k == "p" && j % 2) P.splice(j, 1);
  }
  function loop(ts) {
    ts = ts || performance.now();
    if (lt) { var dt = ts - lt; if (dt < 250 && ts > 3000) { fa += dt; fn++; } }
    lt = ts;
    if (!lite && fn >= 60) { slow = fa / fn > 28 ? slow + 1 : 0; fa = fn = 0; if (slow >= 2) goLite(); }
    cx.clearRect(0, 0, W, H);
    for (var i = P.length - 1; i >= 0; i--) {
      var p = P[i];
      if (p.k == "p") {
        p.s += .03; p.x += p.vx + Math.sin(p.s) * .8; p.y += p.vy; p.a += p.va;
        if (p.y > H + 20 || p.x > W + 20) { p.y = -20; p.x = Math.random() * W; }
        cx.globalAlpha = .75; cx.fillStyle = p.c;
        cx.beginPath(); cx.ellipse(p.x, p.y, p.r, p.r * .55, p.a, 0, 6.3); cx.fill(); cx.globalAlpha = 1;
      } else if (p.k == "e") {
        p.vy += p.g; p.x += p.vx; p.y += p.vy; p.l -= .011;
        if (p.l <= 0 || p.y > H + 40) { P.splice(i, 1); continue; }
        cx.globalAlpha = p.l; cx.drawImage(spr(p.t), p.x - p.z * .67, p.y - p.z * .67, p.z * 1.33, p.z * 1.33); cx.globalAlpha = 1;
      } else if (p.k == "r") {
        p.y += p.vy; p.vy *= .965;
        cx.fillStyle = "#ffe9b0"; cx.fillRect(p.x - 1.5, p.y, 3, 10);
        if (p.y <= p.ty || p.vy > -2) { boom(p.x, p.y); P.splice(i, 1); }
      } else {
        p.vy += .04; p.vx *= .985; p.vy *= .99; p.x += p.vx; p.y += p.vy; p.l -= .016;
        if (p.l <= 0) { P.splice(i, 1); continue; }
        cx.globalAlpha = p.l; cx.fillStyle = p.c; cx.beginPath(); cx.arc(p.x, p.y, 2.2, 0, 6.3); cx.fill(); cx.globalAlpha = 1;
      }
    }
    requestAnimationFrame(loop);
  }
  loop();

  /* Sentuh/klik di mana saja = kembang api */
  var lastTap = 0;
  addEventListener("pointerdown", function (e) {
    if (e.target.closest("button,#modal,#lightbox,.polaroid,#intro")) return;
    var n = Date.now(); if (n - lastTap < 250) return; lastTap = n;
    rocket(e.clientX, e.clientY);
  });
  function barrage(n) { for (var i = 0; i < n; i++) setTimeout(function () { rocket(-1, 60 + Math.random() * H * .45); }, i * 320); }

  function toast(t) { var el = $("toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.h); toast.h = setTimeout(function () { el.classList.remove("on"); }, 2000); }

  /* ---------- Intro ---------- */
  function enter() {
    $("intro").classList.add("go"); barrage(4); emoji(W / 2, H / 2, 26, ["🌸", "💗", "✨", "🏮"]);
    setTimeout(function () { $("intro").style.display = "none"; }, 900);
  }
  $("intro").onclick = enter;
  $("intro").onkeydown = function (e) { if (e.key == "Enter" || e.key == " ") enter(); };

  /* ---------- Slide + transisi ala anime ---------- */
  var slides = [].slice.call(document.querySelectorAll(".slide")), dots = $("dots"), cur = 0, busy = false, tr = $("tr");
  var EP = [{ t: "Prolog", jp: "序章" }, { t: "Awal Cerita", jp: "出会い" }, { t: "Alasan Tersenyum", jp: "笑顔" }, { t: "Episode Kita", jp: "物語" },
            { t: "Surat Cinta", jp: "手紙" }, { t: "Album Kenangan", jp: "思い出" }, { t: "Pertanyaan Penting", jp: "約束" }];
  var TR = ["slash", "hug", "hold", "card", "umbrella", "string"];   // dipakai bergiliran mulai slide 1
  var CHARA = '<svg class="chara" viewBox="0 0 200 150"><path d="M60 30Q8 18 12 70Q24 48 56 48Z" fill="#2a1840"/><path d="M58 24Q40 40 52 88L84 84Z" fill="#2a1840"/><path d="M68 80 102 78 114 130 50 130Z" fill="#ff8db3"/><rect x="60" y="100" width="46" height="10" fill="#ff2e5f"/><path d="M98 88 142 70" stroke="#ffe6d6" stroke-width="9" stroke-linecap="round"/><path d="M92 82 112 78 108 98 90 96Z" fill="#ff8db3"/><circle cx="82" cy="56" r="27" fill="#ffe6d6"/><path d="M54 54Q58 26 84 28Q112 28 110 56Q98 42 83 46Q68 40 54 54Z" fill="#2a1840"/><path d="M89 61l13-5M68 61l9-3" stroke="#2a1840" stroke-width="3.6" stroke-linecap="round"/><ellipse cx="96" cy="70" rx="6" ry="3.5" fill="#ff9fc0" opacity=".8"/><circle cx="62" cy="34" r="5" fill="#ff2e5f"/><path d="M142 70 206 36" stroke="#ff6f9f" stroke-width="12" opacity=".5" stroke-linecap="round"/><path d="M142 70 206 36" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/><circle cx="142" cy="70" r="5" fill="#ffd98a"/></svg>';   // urutan jenis transisi
  slides.forEach(function () { dots.appendChild(document.createElement("i")); });

  /* judul "ditebas": dua belahan teks + garis tebasan */
  slides.forEach(function (s) {
    [].forEach.call(s.querySelectorAll("h1,h2"), function (h) {
      var t = h.innerHTML;
      h.innerHTML = '<span class="cut"><span class="a">' + t + '</span><span class="b" aria-hidden="true">' + t + '</span><i class="sl"></i></span>';
      [].forEach.call(h.querySelectorAll(".b [id]"), function (x) { x.removeAttribute("id"); });
    });
  });

  var NXT = ["Lanjut, sayang ♡", "Ada lagi untukmu ♡", "Terus bersamaku ♡", "Buka surat cintaku ♡", "Lihat kenangan kita ♡", "Satu pertanyaan ♡", "Selamanya, ya ♡"];
  function setActive(n) {
    cur = n;
    slides.forEach(function (s, i) { s.classList.toggle("active", i === cur); });
    [].forEach.call(dots.children, function (d, i) { d.classList.toggle("on", i === cur); });
    dots.style.setProperty("--p", (cur / (slides.length - 1) * 100) + "%");
    slides[cur].scrollTop = 0;
    $("cnt").textContent = (cur + 1) + " / " + slides.length;
    $("next").disabled = cur === slides.length - 1;
    $("nt").textContent = NXT[cur];
    var sh = $("swhint"); if (sh && cur) sh.style.display = "none";
  }
  /* ---------- Karakter chibi orisinal (terinspirasi adegan anime romance) ---------- */
  function PERSON(g, hair, cl) {
    return (g ? '<path d="M26 40Q18 92 30 102L44 92 40 54ZM74 40Q82 92 70 102L56 92 60 54Z" fill="' + hair + '"/>' : "") +
      '<rect x="38" y="118" width="9" height="26" rx="4" fill="#ffe6d6"/><rect x="53" y="118" width="9" height="26" rx="4" fill="#ffe6d6"/>' +
      (g ? '<path d="M34 64 66 64 78 122 22 122Z" fill="' + cl + '"/><path d="M36 64 64 64 62 76 38 76Z" fill="#fff"/>' : '<rect x="32" y="62" width="36" height="60" rx="8" fill="' + cl + '"/>') +
      '<circle cx="50" cy="40" r="23" fill="#ffe6d6"/><path d="M26 42Q24 12 50 13Q76 12 74 42Q64 26 50 31Q36 26 26 42Z" fill="' + hair + '"/>' +
      '<ellipse cx="41" cy="45" rx="3" ry="4.5" fill="#2a1840"/><ellipse cx="59" cy="45" rx="3" ry="4.5" fill="#2a1840"/>' +
      '<circle cx="42.3" cy="43.2" r="1.3" fill="#fff"/><circle cx="60.3" cy="43.2" r="1.3" fill="#fff"/><ellipse cx="34" cy="53" rx="4.5" ry="2.8" fill="#ff9fc0" opacity=".8"/><ellipse cx="66" cy="53" rx="4.5" ry="2.8" fill="#ff9fc0" opacity=".8"/>' +
      '<path d="M45 55q5 4 10 0" stroke="#2a1840" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      (g ? '<path d="M66 18l13-7-2 15zM66 18l-5-9 13 3z" fill="#ff2e5f"/><circle cx="66" cy="18" r="3" fill="#ffd98a"/>' : '<path d="M44 14q4-10 10-4" stroke="' + hair + '" stroke-width="4" fill="none" stroke-linecap="round"/>');
  }
  function ARM(d) { return '<path d="' + d + '" stroke="#ffe6d6" stroke-width="8" stroke-linecap="round" fill="none"/>'; }
  function SV(vb, inner) { return '<svg viewBox="' + vb + '">' + inner + "</svg>"; }
  var BOYC = ["#2a1840", "#5b6bd6"], GIRLC = ["#7a3b8a", "#ff8db3"];
  var HAND = '<circle cx="109" cy="95" r="7" fill="#ffe6d6"/><text x="109" y="84" font-size="14" text-anchor="middle">💗</text>';
  function couple(extra, arms) {
    return SV(extra ? "0 0 230 190" : "0 0 230 160",
      (extra || "") + '<g transform="translate(' + (extra ? "5,36" : "0,0") + ')">' + PERSON(0, BOYC[0], BOYC[1]) + ARM(arms[0]) + "</g>" +
      '<g transform="translate(' + (extra ? "100,36" : "95,0") + ')">' + PERSON(1, GIRLC[0], GIRLC[1]) + ARM(arms[1]) + "</g>" + (extra ? "" : HAND));
  }
  function walk(cls, html, n, done) {
    tr.className = cls; tr.innerHTML = html; setActive(n); slides[n].classList.add("wipe");
    rain(["🌸", "💗"], 16);
    setTimeout(function () { slides[n].classList.remove("wipe"); }, 1750);
    setTimeout(done, 1950);
  }

  /* ---------- Karakter anime penghias slide ---------- */
  (function () {
    var BOB = "";
    var t0 = slides[0].querySelector(".torii");
    var sc = document.createElement("div"); sc.className = "scene";
    sc.innerHTML = t0.outerHTML + '<div class="pair">' + couple("", ["M66 72 L109 95", "M34 72 L14 95"]) + "</div>";
    t0.parentNode.replaceChild(sc, t0);
    function add(i, cls, svg, before) {
      var d = document.createElement("div"); d.className = "solo " + cls; d.innerHTML = svg;
      var host = slides[i].querySelector(".in"); var ref = before ? host.querySelector(before) : null;
      host.insertBefore(d, ref);
    }
    add(2, "girl", SV("0 0 100 150", PERSON(1, GIRLC[0], GIRLC[1]) + ARM("M66 72 L92 38") + '<text x="94" y="34" font-size="18" text-anchor="middle">💗</text>'));
    add(4, "boy", SV("0 0 110 150", PERSON(0, BOYC[0], BOYC[1]) + ARM("M66 72 L84 100") + '<text x="88" y="108" font-size="28" text-anchor="middle">💌</text>'));
    add(6, "duo", couple("", ["M66 72 L109 95", "M34 72 L14 95"]), ".foot");
  })();

  var FX = {
    /* 1. Karakter berlari menebas layar */
    slash: function (n, done) {
      var old = slides[cur]; tr.className = "t-slash";
      ["a", "b"].forEach(function (k) { var c = old.cloneNode(true); c.className = "slide snap half-" + k; tr.appendChild(c); });
      tr.insertAdjacentHTML("beforeend", '<svg class="sw" viewBox="0 0 100 100" preserveAspectRatio="none"><line class="g" x1="-5" y1="64" x2="105" y2="36"/><line class="w" x1="-5" y1="64" x2="105" y2="36"/></svg><div class="flash"></div><div class="kan">斬</div>' + CHARA);
      var d = $("deck");
      setTimeout(function () { setActive(n); d.classList.add("shake"); emoji(W / 2, H / 2, 16, ["🌸", "✨", "💗"]); }, 320);
      setTimeout(function () { d.classList.remove("shake"); }, 800);
      setTimeout(done, 1250);
    },
    /* 2. Pelukan: dua karakter berlari lalu berpelukan */
    hug: function (n, done) {
      tr.className = "t-hug";
      tr.innerHTML = '<div class="pp hb">' + SV("0 0 100 150", PERSON(0, BOYC[0], BOYC[1]) + ARM("M66 72 L97 90")) + '</div><div class="pp hg">' + SV("0 0 100 150", PERSON(1, GIRLC[0], GIRLC[1]) + ARM("M66 72 L97 90")) + '</div><div class="bigheart">💗</div><div class="kan2">ぎゅっ</div>';
      setTimeout(function () { emoji(W / 2, H * .6, 24, ["💗", "💞", "🌸", "✨"]); slides[n].classList.add("circ"); setActive(n); }, 1050);
      setTimeout(function () { slides[n].classList.remove("circ"); }, 1950);
      setTimeout(done, 2200);
    },
    /* 3. Bergandengan tangan menyusuri layar */
    hold: function (n, done) {
      walk("t-hold", '<div class="walker">' + couple("", ["M66 72 L109 95", "M34 72 L14 95"]) + "</div>", n, done);
    },
    /* 5. Satu payung berdua di tengah hujan */
    umbrella: function (n, done) {
      var um = '<path d="M14 62Q115 -26 216 62Q196 50 176 62Q156 48 136 62Q116 48 96 62Q76 48 56 62Q36 50 14 62Z" fill="#ff6f9f"/><path d="M115 20V124" stroke="#ffd98a" stroke-width="3.5"/><circle cx="115" cy="14" r="4" fill="#ffd98a"/>';
      walk("t-umb", '<div class="rain"></div><div class="walker umb">' + couple(um, ["M66 72 L110 74", "M34 72 L15 74"]) + "</div>", n, done);
    },
    /* 4. Kartu judul episode + papan nama */
    card: function (n, done) {
      var e = EP[n]; tr.className = "t-card";
      tr.innerHTML = '<div class="lines"></div><div class="bar b1"></div><div class="bar b2"></div><div class="ct"><small>第' + n + '話 · EPISODE ' + n + '</small><strong>' + e.t + '</strong><em>' + e.jp + '</em><div class="tag">' + NAMA + ' ♥ ' + DARI + '</div></div>';
      setTimeout(function () { setActive(n); }, 560);
      setTimeout(done, 1900);
    },
    /* 3. Benang merah takdir melilit lalu membuka slide baru */
    string: function (n, done) {
      tr.className = "t-string";
      var d = "", i = 0;
      for (var x = -20; x <= W + 20; x += 16, i++) d += (i ? " L" : "M") + x + " " + (H * .5 + Math.sin(x * .02) * H * .13 + Math.sin(x * .007 + 1) * H * .11).toFixed(1);
      tr.innerHTML = '<svg width="' + W + '" height="' + H + '"><path class="th0" d="' + d + '"/><path class="th" d="' + d + '"/></svg><div class="knot">🎀</div>';
      [].forEach.call(tr.querySelectorAll("path"), function (p) { p.style.setProperty("--len", p.getTotalLength()); });
      setTimeout(function () { slides[n].classList.add("circ"); setActive(n); emoji(W / 2, H / 2, 18, ["💗", "🌸", "✨"]); }, 950);
      setTimeout(function () { slides[n].classList.remove("circ"); }, 1800);
      setTimeout(done, 2000);
    }
  };
  function go(n) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    if (n === cur || busy) return;
    if (rm) { setActive(n); return; }
    busy = true; closeLetter(); rain(["🌸", "🌹"], 12);
    var fin = function () { busy = false; tr.className = ""; tr.innerHTML = ""; slides.forEach(function (x) { x.classList.remove("circ", "wipe"); }); };
    try { FX[TR[(n - 1) % TR.length]](n, fin); } catch (err) { console.error(err); setActive(n); fin(); }
  }
  setActive(0);
  function pop(el) { var r = el.getBoundingClientRect(); emoji(r.left + r.width / 2, r.top, 5, ["🌸", "💗"]); }
  $("next").onclick = function () { pop(this); go(cur + 1); };
  addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") go(cur + 1);
    if (e.key == "Escape") { closeLetter(); $("lightbox").classList.remove("on"); }
  });
  var sx = 0, sy = 0;
  addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  addEventListener("touchend", function (e) {
    if (e.target.closest("#modal,#lightbox")) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) if (dx < 0) go(cur + 1);
  });

  /* ---------- Bintang ---------- */
  var sgr = [0, 1, 2].map(function () { var d = document.createElement("div"); $("stars").appendChild(d); return d; });
  for (var si = 0; si < (innerWidth < 640 ? 34 : 55); si++) {
    var st = document.createElement("i"), sz = 1 + Math.random() * 2;
    st.className = "star"; st.style.cssText = "left:" + Math.random() * 100 + "%;top:" + Math.random() * 50 + "%;width:" + sz + "px;height:" + sz + "px";
    sgr[si % 3].appendChild(st);
  }

  /* ---------- Anime & manga romance (ganti sesukamu; img opsional: poster di folder img/) ---------- */
  var ANIME = [
    { e: "Episode 1", t: "Pertama Bertemu", j: "出会い", em: "🌸", a: "#ffb7d1", b: "#c79bff", d: "Awal dari semuanya. Sapaan kecil yang diam-diam mengubah hidupku." },
    { e: "Episode 2", t: "Mulai Berdebar", j: "ドキドキ", em: "💓", a: "#ff8db3", b: "#b8325f", d: "Sejak hari itu, namamu selalu membuat jantungku berlari." },
    { e: "Episode 3", t: "Kencan Pertama", j: "初デート", em: "🍡", a: "#ffd98a", b: "#ff8db3", d: "Gugup, salah tingkah, tapi bahagianya masih terasa sampai sekarang." },
    { e: "Episode 4", t: "Cerita Tengah Malam", j: "夜更かし", em: "🌙", a: "#5b6bd6", b: "#c79bff", d: "Ngobrol sampai lupa waktu, dan aku tak pernah ingin malam itu selesai." },
    { e: "Episode 5", t: "Saat Rindu", j: "会いたい", em: "☄️", a: "#5ba8d6", b: "#ff8db3", d: "Jarak hanya jeda. Rinduku selalu tahu jalan menuju kamu." },
    { e: "Episode 6", t: "Saling Menjaga", j: "支え合い", em: "☂️", a: "#a8f0d8", b: "#5ba8d6", d: "Kamu payungku saat hujan, dan aku ingin jadi selimutmu saat dingin." },
    { e: "Episode 7", t: "Janji Kecil", j: "約束", em: "🎀", a: "#ff6f9f", b: "#ffd98a", d: "Benang merah kita makin erat, tak akan kubiarkan terlepas." },
    { e: "Segera Tayang", t: "Musim Selanjutnya", j: "未来へ", em: "🎆", a: "#c79bff", b: "#ff6f9f", d: "Masih banyak episode indah yang akan kita tulis bersama." }
  ];
  ANIME.forEach(function (s) {
    var b = document.createElement("button"); b.className = "ep"; b.setAttribute("aria-expanded", "false");
    b.style.setProperty("--a", s.a); b.style.setProperty("--b", s.b);
    b.innerHTML = '<div class="th"' + (s.img ? ' style="background-image:url(' + s.img + ')"' : "") + "><b>" + s.e + "</b>" + (s.img ? "" : s.em) + '</div><div class="inn"><h5>' + s.t + "</h5><small>" + s.j + "</small><p>" + s.d + '</p><div class="stars-r">☆☆☆☆☆</div></div>';
    b.onclick = function () {
      var on = b.classList.toggle("on"); b.setAttribute("aria-expanded", on);
      b.querySelector(".stars-r").textContent = on ? "★★★★★" : "☆☆☆☆☆";
      if (on) { var r = b.getBoundingClientRect(); emoji(r.left + r.width / 2, r.top + 40, 8, [s.em, "💗", "⭐"]); }
    };
    $("eps").appendChild(b);
  });

  /* ---------- Surat ---------- */
  var tw, curEnv = null;
  SURAT.forEach(function (s) {
    var b = document.createElement("button"); b.className = "env";
    b.innerHTML = '<div class="paper"><div class="flap"></div><div class="seal">♥</div></div><span class="lbl"><small>' + s.j + "</small>" + s.t + "</span>";
    b.onclick = function () {
      curEnv = b; b.classList.add("open");
      var r = b.getBoundingClientRect(); emoji(r.left + r.width / 2, r.top + 30, 8, ["💌", "💗", "✨"]);
      setTimeout(function () { showLetter(s); }, 650);
    };
    $("grid").appendChild(b);
  });
  function showLetter(s) {
    $("modal").classList.add("on"); document.body.classList.add("paused"); $("lh").textContent = s.j + " · " + s.t;
    var p = $("lp"), sg = $("ls"); p.textContent = ""; sg.textContent = "— " + DARI + " 💗"; sg.classList.remove("on");
    var i = 0, t = s.x; clearInterval(tw);
    tw = setInterval(function () {
      i = Math.min(i + Math.ceil(t.length / 240), t.length); p.textContent = t.slice(0, i); $("lt").scrollTop = 1e5;
      if (i >= t.length) { clearInterval(tw); sg.classList.add("on"); rain(["💗", "🌸", "💖", "✨"], rm ? 4 : 20); }
    }, rm ? 4 : 38);
  }
  function closeLetter() { clearInterval(tw); $("modal").classList.remove("on"); document.body.classList.remove("paused"); if (curEnv) curEnv.classList.remove("open"); }
  $("cl").onclick = closeLetter;
  $("modal").onclick = function (e) { if (e.target == this) closeLetter(); };

  /* ---------- Galeri ---------- */
  var lb = $("lightbox");
  FOTO.forEach(function (p, i) {
    var el = document.createElement("div"); el.className = "polaroid";
    el.style.setProperty("--i", i);
    el.style.setProperty("--r", ((i % 2 ? 1 : -1) * (1 + Math.random() * 2.5)).toFixed(1) + "deg");
    var im = new Image(); im.src = p.src; im.alt = p.cap; im.loading = "lazy";
    im.onerror = function () { im.removeAttribute("src"); };
    el.appendChild(im);
    var sp = document.createElement("span"); sp.textContent = p.cap; el.appendChild(sp);
    el.onclick = function () { if (!im.getAttribute("src")) return toast("Foto belum ditambahkan 🌸"); lb.querySelector("img").src = p.src; lb.classList.add("on"); barrage(1); };
    $("gallery").appendChild(el);
  });
  lb.onclick = function () { lb.classList.remove("on"); };

  /* ---------- Pertanyaan ---------- */
  var no = $("no"), yes = $("yes"), ny = 0, msg = ["Salah pencet itu 😤", "Coba lagi~", "Tombolnya malu 🙈", "Eits, nggak bisa!", "Pilih yang kiri aja 🥹"];
  function flee(e) {
    if (e) e.preventDefault(); ny++;
    var a = no.parentNode.getBoundingClientRect(), w = no.offsetWidth, h = no.offsetHeight;
    no.style.position = "absolute";
    no.style.left = Math.random() * (a.width - w) + "px";
    no.style.top = Math.random() * (a.height - h) + "px";
    yes.style.transform = "scale(" + Math.min(1 + ny * .1, 1.6) + ")";
    $("ans").textContent = msg[ny % msg.length]; toast(msg[ny % msg.length]);
  }
  no.addEventListener("pointerenter", flee); no.addEventListener("pointerdown", flee); no.addEventListener("click", flee);
  yes.onclick = function () {
    $("ans").textContent = "Yeay! Aku juga sayang kamu 💗 愛してる"; no.style.display = "none";
    var r = yes.getBoundingClientRect(); emoji(r.left + r.width / 2, r.top, 30, ["💗", "🌸", "💖", "🎆"]);
    barrage(10); rain(["🌸", "💗", "✨", "🎀"], 36);
  };

  /* ---------- Musik (opsional: music.mp3) ---------- */
  var bgm = $("bgm"), mb = $("music");
  mb.onclick = function () {
    if (bgm.paused) bgm.play().then(function () { mb.classList.add("playing"); }).catch(function () { toast("on"); });
    else { bgm.pause(); mb.classList.remove("playing"); }
  };

})();
