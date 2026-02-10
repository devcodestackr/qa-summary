
const csrDataList = [
  { id: '001', card: 'Lingkungan', name: 'Bank Raya Semakin Perkuat Komitmen Implementasi Ekosistem Bisnis Berkelanjutan Berbasis ESG', date: '2025-10-03', text: 'Jakarta, 3 Oktober 2025 - Sebagai bank digital bagian dari BRI Group...' },
  { id: '002', card: 'Kesehatan', name: 'BRI Agro Beri Bantuan Sembako dan APD untuk Penanganan Covid-19', date: '2021-11-11', text: 'Jakarta- Dalam rangka berbagi di bulan Ramadan...' },
  { id: '003', card: 'Bencana Alam', name: 'Bank Raya Salurkan Bantuan CSR...', date: '', text: 'Jakarta, 29 Desember 2022 - Di tengah fokus Kabupaten Cianjur...' },
  { id: '004', card: 'Keagamaan', name: 'Bank Raya bersama Berbagi Bahagia BRI Group...', date: '', text: 'Jakarta, 18 Maret 2025 - Sebagai bentuk nyata kepedulian...' },
  { id: '005', card: 'Pendidikan', name: '', date: '', text: '' },
  { id: '006', card: 'Infrastruktur', name: 'BRI Agro Salurkan Bantuan untuk Korban Banjir', date: '2021-11-11', text: 'DKI Jakarta dan sekitarnya dilanda banjir...' },
  { id: '007', card: 'Pemberdayaan', name: 'BRI Agro Memberikan Bantuan CSR Paket Sembako', date: '2021-11-11', text: 'Jakarta' },
  { id: '008', card: 'Budaya dan Olahraga', name: '', date: '', text: '' },
];

csrDataList.forEach(({ id, card, name, date, text }) => {
  TestCasePerusahaanTentangKami({
    TCID: `TC${id}`,
    MenuName: 'Perusahaan - Tentang Kami',
    Category: 'Positif',
    TCName: `Kunjungi detail card CSR ${card}`,
    Description: `Akses halaman detail pada card CSR ${card}`,
    DataTest: {
      CSRCard: card,
      CSRName: name,
      CSRDate: date,
      CSRData: { artikel: text }
    }
  });
});

function TestCasePerusahaanTentangKami({ TCID, MenuName, Category, TCName, Description, DataTest }) {
  describe(`${TCID} - ${MenuName} - ${Category} - ${TCName}`, () => {
    context(Description, () => {
      it('Open Menu Perusahaan - Tentang Kami', () => {
        cy.OpenPerusahaanPage();
      });

      it('View detail card CSR', () => {
        const { CSRCard, CSRName, CSRDate, CSRData } = DataTest;
        cy.ViewCSR(CSRCard, CSRName, CSRDate, CSRData.artikel);
      });
    });
  });
}

