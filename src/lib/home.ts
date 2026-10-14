// Shape of the data the Home screen needs. `fetchHome` is a mock; values are
// illustrative and must come from the backend.

export type Movement = {
  id: string;
  kind: "payment" | "prepayment" | "document";
  title: string;
  date: string; // ISO
  detail: string;
  amount?: number;
};

export type HomeData = {
  user: { firstName: string; initials: string };
  credit: {
    balance: number;
    originalAmount: number;
    disbursedAt: string; // ISO
    paidInstallments: number;
    totalInstallments: number;
    endsAt: string; // ISO
    rateEA: number; // percent
    installment: number;
    principalPaid: number;
    payroll: string;
    payrollShort: string;
    upToDate: boolean;
  };
  nextDeduction: { date: string; amount: number };
  movements: Movement[];
  unreadNotifications: number;
  offer: { maxAmount: number } | null;
};

export async function fetchHome(): Promise<HomeData> {
  await new Promise((r) => setTimeout(r, 250));
  return {
    user: { firstName: "Marcela", initials: "MR" },
    credit: {
      balance: 8412500,
      originalAmount: 15000000,
      disbursedAt: "2025-03-10",
      paidInstallments: 21,
      totalInstallments: 48,
      endsAt: "2029-02-28",
      rateEA: 21.9,
      installment: 389400,
      principalPaid: 6587500,
      payroll: "Secretaría de Educación",
      payrollShort: "Sec. Educación",
      upToDate: true,
    },
    nextDeduction: { date: "2026-08-30", amount: 389400 },
    movements: [
      { id: "m1", kind: "payment", title: "Cuota 21 de 48", date: "2026-07-30", detail: "Descuento de nómina", amount: 389400 },
      { id: "m2", kind: "prepayment", title: "Abono extraordinario", date: "2026-07-12", detail: "PSE", amount: 1200000 },
      { id: "m3", kind: "payment", title: "Cuota 20 de 48", date: "2026-06-30", detail: "Descuento de nómina", amount: 389400 },
      { id: "m4", kind: "document", title: "Certificado de deuda", date: "2026-06-18", detail: "Generado" },
    ],
    unreadNotifications: 1,
    offer: { maxAmount: 6500000 },
  };
}

// ---- formatting (es-CO) ----

const money = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });
export const cop = (n: number) => `$${money.format(n)}`;

const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const MONTHS_LONG = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const parts = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d };
};

export const shortDate = (iso: string) => {
  const { y, m, d } = parts(iso);
  return `${d} ${MONTHS[m]} ${y}`;
};
export const monthYear = (iso: string) => {
  const { y, m } = parts(iso);
  return `${MONTHS[m]} ${y}`;
};
export const longMonthYear = (iso: string) => {
  const { y, m } = parts(iso);
  return `${MONTHS_LONG[m]} de ${y}`;
};
export const dayMonth = (iso: string) => {
  const { m, d } = parts(iso);
  return { day: d, month: MONTHS[m][0].toUpperCase() + MONTHS[m].slice(1) };
};
