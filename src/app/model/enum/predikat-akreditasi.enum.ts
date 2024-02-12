export const Predikat = {
    aUnggul: "A (Unggul)",
    bBaik: "B (Baik)",
    cCukup: "C (Cukup)",
    hide: "Sembunyikan"
} as const

export type PredikatAkreditasi = typeof Predikat[keyof typeof Predikat]
