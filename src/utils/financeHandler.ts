export function formateDate (date: string) {
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const dateConverted = new Date(date);
  const monthAbb = months[dateConverted.getMonth()];

  const day = dateConverted.getDate().toString().padStart(2, "0");

  return `${monthAbb} ${day}`;
}

export function getPaymentColor (status: number, date: string) {
  const receivedDate = new Date(date);
  const actualDate = new Date();

  if (status) return "#2BBD65";

  if (receivedDate < actualDate) {
    return "#FF6161";
  } else {
    return "#ACACAC";
  }
}

export function getPaymentStatus (status: number, date: string) {
  const receivedDate = new Date(date);
  const actualDate = new Date();

  if (status) return "Quitado";

  if (receivedDate < actualDate) {
    return "Vencido";
  } else {
    return "Aberto";
  }
}

export function sortMinimizedPayments(payments: Array<any>) {
  const expiredPayments: Array<any> = [];
  const openedPayments: Array<any> = [];
  const paiedPayments: Array<any> = [];

  payments.forEach((e) => {
    const receviedDate = new Date(e.Vencimento);
    const actualDate = new Date();
    const status = +e.Quitado;
    if (actualDate > receviedDate && !status) {
      expiredPayments.push(e);
    } else if (actualDate < receviedDate && !status) {
      openedPayments.push(e);
    } else {
      paiedPayments.push(e);
    }
  });
  return [...expiredPayments, ...openedPayments, ...paiedPayments];
}