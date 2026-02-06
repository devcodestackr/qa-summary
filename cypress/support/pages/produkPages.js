class simulasiPerhitungan {

    invoiceFinancingSimulasi(Invoice, tenor) {
        //calculate total without PPN
        const nilaiPPN = Number(Invoice) * 0.0990990991;
        const potonganInvoice = Number(Invoice) - nilaiPPN;
        // calculate total maksimal pinjaman 
        const totalMakPinjaman = potonganInvoice * 0.8;
        // calculated total cadangan bunga
        const nilaicadanganBunga = totalMakPinjaman * tenor / 360 * (15 / 100);
        // calculate Kewajiban Pinjaman
        const KewajibanPinjaman = totalMakPinjaman + nilaicadanganBunga; 
        
        const estimasiMaksimumPencairan = Math.round(totalMakPinjaman);
        const totalKewajibanPinjaman = Math.round(KewajibanPinjaman);
        const cadanganBunga = Math.round(nilaicadanganBunga);
        return {
            estimasiMaksPencairan : estimasiMaksimumPencairan, 
            totalKewajibanPinjaman: totalKewajibanPinjaman,
            cadanganBunga:cadanganBunga,
        };
    }

   KontrakKerjaSimulasi(Nominal, dp, tenor) {
        //calculate total without PPN
        const nilaiPPN = Number(Nominal) * 0.0990990991;
        const potonganNominal = Number(Nominal) - nilaiPPN;
        //margin 10% netralin nilai pinjaman
        const  margin10 = potonganNominal * (10/110);
        //net total
        const netTotal = potonganNominal - margin10;
        // calculate total maksimal pinjaman 
        const totalMakPinjaman = netTotal - dp;
        // calculated total cadangan bunga 15%
        const nilaicadanganBunga = totalMakPinjaman * tenor / 360 * (15 / 100);
        // calculate Kewajiban Pinjaman
        const KewajibanPinjaman = totalMakPinjaman + nilaicadanganBunga; 
        
        const estimasiMaksimumPencairan = Math.round(totalMakPinjaman);
        const totalKewajibanPinjaman = Math.round(KewajibanPinjaman);
        const cadanganBunga = Math.round(nilaicadanganBunga);
        return {
            estimasiMaksPencairanKontrakKerja : estimasiMaksimumPencairan, 
            totalKewajibanPinjamanKontrakKerja: totalKewajibanPinjaman,
            cadanganBungaKontrakKerja:cadanganBunga,
        };
    }

    PinangFlexiSimulasi(nominal, tenor){
        //hitung nilai PPN
        const nilaiPPN = nominal * (1.50/100);
        //hitung nilai pokok perbulan
        const principal = nominal / tenor;
        const netTotal = principal + nilaiPPN;

        const angsuranPerBulan = Math.round(netTotal);
        const bungaPinjaman = Math.round(nilaiPPN);
        return{
            angsuranPerBulan:angsuranPerBulan,
            bungaPinjaman:bungaPinjaman,
        }

    }
};

export default new simulasiPerhitungan();