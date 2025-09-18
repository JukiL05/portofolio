// Sample data for each semester
const coursesData = {
    1: [
        { name: "Agama", lecturer: "DESY ASNATH SITANIAPESSY S.Si (Teol).,M.Si", grade: "A" },
        { name: "Pancasila", lecturer: "ARIS UMBU HINA PARI S.AP., M.AP", grade: "AB" },
        { name: "Bahasa Indonesia", lecturer: "RAYNESTA MIKAELA INDRI MALO S.S., M.Hum", grade: "A" },
        { name: "Pengantar Teknologi Informasi	", lecturer: "	RAMBU YETTI KALAWAY S.T.,M.T., M.M ", grade: "A" },
        { name: "Pengantar Sistem Informasi", lecturer: "	YUSTINA RADA S.KOM.,M.T", grade: "AB" },
        { name: "Kalkulus", lecturer: "DARIUS IMANUEL WADU S. Pd., M. Pd", grade: "AB" },
        { name: "Algoritma Dan Pemrograman 1", lecturer: "PINGKY A. R. LEO LEDE S.Kom., M.Cs", grade: "A" }
    ],
    2: [
        { name: "Kewirausahaan", lecturer: "ELSA CHRISTIN SARAGIH SP., MP", grade: "A" },
        { name: "Etika Kristen Dalam Bisnis", lecturer: "SEPRIN YUSTENLY EMRYONAS FONI, M.TH ", grade: "A" },
        { name: "Bahasa Inggris", lecturer: "RAYNESTA MIKAELA INDRI MALO S.S., M.Hum", grade: "A" },
        { name: "Aljabar Linier", lecturer: "ELSY SENIDES HANA TAUNU S.Pd;M.Pd", grade: "A" },
        { name: "Struktur Data", lecturer: "YUSTINA RADA S.KOM.,M.T", grade: "A" },
        { name: "Algoritma Dan Pemrograman 2", lecturer: "PINGKY A. R. LEO LEDE S.Kom., M.Cs", grade: "A" }
    ],
    3: [
        { name: "Kewarganegaraan", lecturer: "OSPENSIUS KAWAWU TARANAU S.Ip.,M.Si", grade: "A" },
        { name: "Pemrograman Berorientasi Objek", lecturer: "ERWIANTA GUSTIAL RADJAH S.Kom., M.Kom", grade: "A" },
        { name: "Desain Grafis", lecturer: "TRI SARY DEWI NOVYANTI BERTHA MIRA S.T, M. Kom", grade: "A" },
        { name: "Sistem Basis Datar", lecturer: "NOVEM BERLIAN ULY S.Kom., M.Kom", grade: "A" },
        { name: "Matematika Diskrit", lecturer: "HAWU YOGIA PRADANA ULY S.Kom., M.Kom ", grade: "A" },
        { name: "Interaksi Manusia dan Komputer", lecturer: "YUSTINA RADA S.KOM.,M.T", grade: "AB" },
        { name: "Jaringan Komputer", lecturer: "FAJAR HARIADI S.T.,M.T", grade: "AB" },
        { name: "Pemrograman Multimedia", lecturer: "ARINI AHA PEKUWALI S.Kom., M. Kom", grade: "B" }
    ],
    4: [
        { name: "Technopreneurship", lecturer: "MURRY ALBERT AGUSTIN LOBO S.SI., M.Kom", grade: "A" },
        { name: "Kapita Selekta Sumba", lecturer: "DENISIUS UMBU PATI SKM.,M.Kes", grade: "A" },
        { name: "Multimedia", lecturer: "TRI SARY DEWI NOVYANTI BERTHA MIRA S.T, M. Kom", grade: "A" },
        { name: "Statistika Dan Probabilitasi", lecturer: "DENISIUS UMBU PATI SKM.,M.Kes", grade: "AB" },
        { name: "Manajemen Jaringan", lecturer: "FAJAR HARIADI S.T.,M.T", grade: "A" },
        { name: "Pengenalan Web", lecturer: "	PINGKY A. R. LEO LEDE S.Kom., M.Cs", grade: "A" },
        { name: "Arsitektur Komputer", lecturer: "REYNALDI THIMOTIUS ABINENO S.Kom., M.Kom", grade: "A"}
    ],
    5: [
        { name: "Pengembangan Web", lecturer: "ALFRIAN CARMEN TALAKUA S.SI., M.Kom", grade: "-" },
        { name: "Pemrograman Berbasis Jaringan", lecturer: "REYNALDI THIMOTIUS ABINENO S.Kom., M.Kom", grade: "-" },
        { name: "Rekayasa Perangkat Lunak", lecturer: "REYNALDI THIMOTIUS ABINENO S.Kom., M.Kom", grade: "-" },
        { name: "Sistem Operasi", lecturer: "MURRY ALBERT AGUSTIN LOBO S.SI., M.Kom", grade: "-" },
        { name: "Grafika Komputer", lecturer: "EBEN PANJA S.Kom., M.Kom", grade: "-" },
        { name: "Pemrograman Mobile", lecturer: "ARINI AHA PEKUWALI S.Kom., M. Kom", grade: "-" },
        { name: "Etika Profesi", lecturer: "DESY ASNATH SITANIAPESSY S.Si (Teol).,M.Si", grade: "-" }
    ]
};

// Function to populate the table with course data
function populateTable(semester) {
    const tableBody = document.getElementById('courses-data');
    tableBody.innerHTML = '';
    
    coursesData[semester].forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.name}</td>
            <td>${course.lecturer}</td>
            <td>${course.grade}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to handle semester button clicks
function setupSemesterButtons() {
    const buttons = document.querySelectorAll('.semester-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get semester from data attribute and update table
            const semester = this.getAttribute('data-semester');
            populateTable(semester);
        });
    });
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate with first semester data by default
    populateTable(1);
    
    // Set up semester buttons
    setupSemesterButtons();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});