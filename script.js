const translations = {
  id: {
    navAbout:"Tentang",navSkills:"Keahlian",navProjects:"Proyek",navExperience:"Pengalaman",navContact:"Kontak",
    availability:"TERBUKA UNTUK PELUANG",hello:"Halo, saya",heroRole:"IT Staff",programmer:"Programmer",
    heroDesc:"Saya tertarik pada teknologi informasi, pengembangan aplikasi, dan pemecahan masalah melalui solusi digital yang efektif.",
    seeWork:"Lihat Proyek",contactMe:"Hubungi Saya",follow:"TEMUKAN SAYA",profileTitle:"IT STAFF & PROGRAMMER",scroll:"GULIR UNTUK MENJELAJAH",
    aboutHeading:'Mengenal <span class="gradient-text">Saya</span>',aboutLead:"Teknologi bukan hanya tentang kode, tetapi tentang menciptakan solusi yang bermanfaat.",
    aboutText:"Saya merupakan pribadi yang cepat belajar, mampu bekerja sama dalam tim, serta memiliki kemampuan komunikasi, kepemimpinan, dan pemecahan masalah. Saya memiliki ketertarikan pada pengembangan perangkat lunak, pengelolaan basis data, dan dukungan teknologi informasi.",
    factLearning:"Cepat belajar",factTeam:"Kolaborasi tim",factSolve:"Problem solving",
    skillsHeading:'Keahlian &amp; <span class="gradient-text">Teknologi</span>',skillsSub:"Teknologi yang pernah saya pelajari dan gunakan dalam proyek.",skillNote:"Catatan: daftar ini menggambarkan teknologi yang pernah dipelajari/digunakan, bukan sertifikasi tingkat keahlian.",
    projectsHeading:'Proyek <span class="gradient-text">Pilihan</span>',projectsSub:"Beberapa latihan dan pengembangan aplikasi yang menggambarkan proses belajar saya.",
    project1Title:"Aplikasi Manajemen Apotek",project1Desc:"Aplikasi CRUD untuk mengelola data apotek dengan Flask dan database MySQL.",
    project2Title:"Website Informasi Sekolah",project2Desc:"Konsep website sekolah dengan halaman profil, berita, pengumuman, galeri, dan panel admin.",
    project3Title:"Prediksi Hasil Panen",project3Desc:"Eksperimen regresi untuk memprediksi hasil panen berdasarkan faktor lingkungan.",
    projectDemo:'Project overview <span>↗</span>',projectNote:"Project yang ditampilkan hanya beberapa dari semua projek yang ada.",
    experienceHeading:'Pengalaman &amp; <span class="gradient-text">Pendidikan</span>',workType:"PENGALAMAN MENGAJAR",
    teachingDesc:"Mengajar Informatika kelas 7–9, menyiapkan materi dan kegiatan praktik, menyusun evaluasi, serta mengelola hasil belajar siswa.",
    internType:"MAGANG",internDesc:" Membuat APK Logbook berbasis Web untuk memantau penggunaan server pada karyawan, mengelola basis data karyawan di seluruh Kabupaten Temanggung, mengembangkan program tabungan bagi peserta magang, membuat desain digital untuk peringatan nasional maupun acara khusus, serta memberikan dukungan TI dan membantu pelaksanaan berbagai kegiatan perusahaan.",
    educationDate:"PENDIDIKAN",educationType:"PENDIDIKAN",educationTitle:"S1 Fakultas Teknologi Informasi",educationPlace:"Teknik Informatika ",
    educationDesc:"Mempelajari pemrograman, pengembangan aplikasi, basis data, dan pemanfaatan teknologi informasi.",
    contactHeading:'Punya Peluang atau<br><span class="gradient-text">Lowongan menarik?</span>',contactDesc:"Mari berdiskusi dan berkolaborasi. Saya terbuka untuk kesempatan baru di bidang teknologi informasi.",
    sendEmail:"Kirim Email",footerText:"Dibuat dengan rasa semangat dan pantang menyerah.</p>",backTop:"Kembali ke atas ↑",
    certHeading: "Sertifikasi & Pelatihan",
    certSub: "Berbagai pelatihan dan sertifikasi yang saya ikuti untuk meningkatkan kemampuan di bidang teknologi.",
  },
  en: {
    navAbout:"About",navSkills:"Skills",navProjects:"Projects",navExperience:"Experience",navContact:"Contact",
    availability:"OPEN TO OPPORTUNITIES",hello:"Hello, I'm",heroRole:"IT Staff",programmer:"Programmer",
    heroDesc:"I'm interested in information technology, application development, and solving problems through effective digital solutions.",
    seeWork:"View Projects",contactMe:"Contact Me",follow:"FIND ME",profileTitle:"IT STAFF & PROGRAMMER",scroll:"SCROLL TO EXPLORE",
    aboutHeading:'A Little About <span class="gradient-text">Me</span>',aboutLead:"Technology is not just about code; it's about creating solutions that make a difference.",
    aboutText:"I'm a fast learner who works well in a team and brings communication, leadership, and problem-solving skills. My interests include software development, database management, and IT support.",
    factLearning:"Fast learner",factTeam:"Team collaboration",factSolve:"Problem solving",
    skillsHeading:'Skills &amp; <span class="gradient-text">Technologies</span>',skillsSub:"Technologies I've learned and used in projects.",skillNote:"Note: this list reflects technologies I've studied or used, not formal proficiency certifications.",
    projectsHeading:'Selected <span class="gradient-text">Projects</span>',projectsSub:"A few practice and application development projects that reflect my learning journey.",
    project1Title:"Pharmacy Management App",project1Desc:"A CRUD application for managing pharmacy data using Flask and a MySQL database.",
    project2Title:"School Information Website",project2Desc:"A school website concept featuring profile, news, announcements, gallery, and an admin panel.",
    project3Title:"Crop Yield Prediction",project3Desc:"A regression experiment to predict crop yield based on environmental factors.",
    projectDemo:'Project overview <span>↗</span>',projectNote:"The projects shown are only a few of all the existing projects.",
    experienceHeading:'Experience &amp; <span class="gradient-text">Education</span>',workType:"TEACHING EXPERIENCE",
    teachingDesc:"Taught Informatics to grades 7–9, prepared learning materials and practical activities, created assessments, and managed student results.",
    internType:"INTERNSHIP",internDesc:"Developing a web-based logbook application to monitor server usage by employees, Managed employee databases across Temanggung Regency.Developed a student savings program for internship participants.Created digital designs for national and special occasions.Provided IT support and assisted with company events.",
    educationDate:"EDUCATION",educationType:"EDUCATION",educationTitle:"Bachelor Faculty of Information Technology",educationPlace:"informatics engineering",
    educationDesc:"Studied programming, application development, databases, and the use of information technology.",
    contactHeading:'Have an Exciting Opportunity or<br><span class="gradient-text">an Vacancy?</span>',contactDesc:"Let's connect and collaborate. I'm open to new opportunities in information technology.",
    sendEmail:"Send an Email",footerText:"Made with passion and never giving up.",backTop:"Back to top ↑",
    certHeading: "Certifications & Training",
    certSub: "Various training programs and certifications I have completed to improve my skills in technology.",
    
  }
};

let currentLanguage = "id";
const languageButton = document.querySelector(".language-switch");
languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "id" ? "en" : "id";
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) element.innerHTML = translations[currentLanguage][key];
  });
  languageButton.textContent = currentLanguage === "id" ? "EN" : "ID";
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

// DARK MODE / LIGHT MODE

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Membaca tema yang pernah dipilih
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Mengganti tema ketika tombol diklik
themeToggle.addEventListener("click", function () {

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("portfolio-theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("portfolio-theme", "dark");
    }

});
