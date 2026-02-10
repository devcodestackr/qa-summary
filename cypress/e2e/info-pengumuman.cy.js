// TestCaseInfoPengumuman({
//   TCID: 'TC001',
//   MenuName: 'Info Pengumuman',
//   Category: 'Positif',
//   TCName: 'Kunjungi detail Pengumuman Perubahan Nama',
//   Description: 'Akses halaman detail pada card pengumuman Perubahan Nama',
//   DataTest: {
//     pengumumanName: 'Pengumuman Perubahan Nama',
//     tabPengumumanCategory: 'Transformasi',
//     pengumumanDate: '',
//     pengumumanData: {
//       artikel: "PT Bank Rakyat Indonesia Agroniaga Tbk.",
//     }
//   }
// })

// TestCaseInfoPengumuman({
//   TCID: 'TC002',
//   MenuName: 'Info Pengumuman',
//   Category: 'Positif',
//   TCName: 'Kunjungi detail PENGUMUMAN PINDAH ALAMAT BANK RAYA COMMUNITY BRANCH SEMARANG',
//   Description: 'Akses halaman detail pada card PENGUMUMAN PINDAH ALAMAT BANK RAYA COMMUNITY BRANCH SEMARANG',
//   DataTest: {
//     pengumumanName: 'PENGUMUMAN PINDAH ALAMAT BANK RAYA COMMUNITY BRANCH SEMARANG',
//     tabPengumumanCategory: 'Operasional',
//     pengumumanDate: '2025-11-10',
//     pengumumanData: {
//       artikel: "Sehubungan dengan transformasi bisnis Bank Raya, maka terhitung mulai 18 November 2025 akan dilaksanakan pemindahan alamat kantor sebagai berikut:",
//     }
//   }
// })

// TestCaseInfoPengumuman({
//   TCID: 'TC003',
//   MenuName: 'Info Pengumuman',
//   Category: 'Positif',
//   TCName: 'Kunjungi detail Pengumuman Nasabah',
//   Description: 'Akses halaman detail pada card Pengumuman Nasabah',
//   DataTest: {
//     pengumumanName: 'PENGUMUMAN',
//     tabPengumumanCategory: 'Nasabah',
//     pengumumanDate: '',
//     pengumumanData: {
//       artikel: "Kepada Nasabah Yth.",
//     }
//   }
// })

// TestCaseInfoPengumuman({
//   TCID: 'TC004',
//   MenuName: 'Info Pengumuman',
//   Category: 'Positif',
//   TCName: 'Kunjungi detail Lembaga Alternatif Penyelesaian Sengketa (LAPS) Sektor Jasa Keuangan',
//   Description: 'Akses halaman detail pada card Pengumuman Lembaga Alternatif Penyelesaian Sengketa (LAPS) Sektor Jasa Keuangan',
//   DataTest: {
//     pengumumanName: 'Lembaga Alternatif Penyelesaian Sengketa (LAPS) Sektor Jasa Keuangan',
//     tabPengumumanCategory: 'Lainnya',
//     pengumumanDate: '2025-09-23',
//     pengumumanData: {
//       artikel: "Penyelesaian sengketa di sektor jasa keuangan di luar pengadilan dapat dilakukan melalui Lembaga Alternatif Penyelesaian Sengketa Sektor Jasa Keuangan.",
//     }
//   }
// })

// function TestCaseInfoPengumuman({ TCID, MenuName, Category, TCName, Description, DataTest }) {
//   describe(`${TCID} - ${MenuName}  - ${Category} - ${TCName}`, () => {
//     context(`${Description}`, () => {

//       it('Open Menu Info - Pengumuman', () => {
//         cy.OpenInfoPengumumanPage()
//       });

//       it('Lihat Detail Pengumuman dan Validasi Halaman', () => {
//         const pengumumanName = DataTest["pengumumanName"];
//         const tabPengumumanCategory = DataTest["tabPengumumanCategory"];
//         const pengumumanDate = DataTest["pengumumanDate"];
//         const pengumumanData = DataTest["pengumumanData"]["artikel"];
//         cy.ViewPengumuman(pengumumanName, tabPengumumanCategory, pengumumanDate, pengumumanData)
//       });

//     });
//   });
// }
const announcementData = [
  {
    id: '001',
    name: 'Pengumuman Perubahan Nama',
    cat: 'Transformasi',
    date: '',
    text: 'PT Bank Rakyat Indonesia Agroniaga Tbk.'
  },
  {
    id: '002',
    name: 'PENGUMUMAN PINDAH ALAMAT BANK RAYA COMMUNITY BRANCH SEMARANG',
    cat: 'Operasional',
    date: '2025-11-10',
    text: 'Sehubungan dengan transformasi bisnis Bank Raya, maka terhitung mulai 18 November 2025 akan dilaksanakan pemindahan alamat kantor sebagai berikut:'
  },
  {
    id: '003',
    name: 'PENGUMUMAN',
    cat: 'Nasabah',
    date: '',
    text: 'Kepada Nasabah Yth.',
    customTC: 'Pengumuman Nasabah' // Opsional jika TCName berbeda dengan pengumumanName
  },
  {
    id: '004',
    name: 'Lembaga Alternatif Penyelesaian Sengketa (LAPS) Sektor Jasa Keuangan',
    cat: 'Lainnya',
    date: '2025-09-23',
    text: 'Penyelesaian sengketa di sektor jasa keuangan di luar pengadilan dapat dilakukan melalui Lembaga Alternatif Penyelesaian Sengketa Sektor Jasa Keuangan.'
  }
];

announcementData.forEach(({ id, name, cat, date, text, customTC }) => {
  TestCaseInfoPengumuman({
    TCID: `TC${id}`,
    MenuName: 'Info Pengumuman',
    Category: 'Positif',
    TCName: `Kunjungi detail ${customTC || name}`,
    Description: `Akses halaman detail pada card pengumuman ${customTC || name}`,
    DataTest: {
      pengumumanName: name,
      tabPengumumanCategory: cat,
      pengumumanDate: date,
      pengumumanData: { artikel: text }
    }
  });
});

function TestCaseInfoPengumuman({ TCID, MenuName, Category, TCName, Description, DataTest }) {
  describe(`${TCID} - ${MenuName} - ${Category} - ${TCName}`, () => {
    context(Description, () => {
      it('Open Menu Info - Pengumuman', () => {
        cy.OpenInfoPengumumanPage();
      });

      it('Lihat Detail Pengumuman dan Validasi Halaman', () => {
        const { pengumumanName, tabPengumumanCategory, pengumumanDate, pengumumanData } = DataTest;
        cy.ViewPengumuman(pengumumanName, tabPengumumanCategory, pengumumanDate, pengumumanData.artikel);
      });
    });
  });
}
