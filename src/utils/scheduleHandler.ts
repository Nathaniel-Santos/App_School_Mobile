export function formatDateToCustomFormat(dateString: string): string {
  const date = new Date(dateString);
  const weekdays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const weekday = weekdays[date.getDay()];

  return `${month} ${day}, ${weekday}`;
}

export function getCurrentDateFormatted() {
  const currentDate = new Date();
  const threeHoursAgo = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);
  const year = threeHoursAgo.getFullYear();
  const month = (threeHoursAgo.getMonth() + 1).toString().padStart(2, '0');
  const day = threeHoursAgo.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDaysOfMonthAndWeekdays(month: number) {
  if (month < 1 || month > 12) {
    throw new Error('Mês deve estar entre 1 e 12');
  }

  const year = new Date().getFullYear();
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const weekday = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][
      date.getDay()
    ];
    const dateFormatted = date.toISOString().slice(0, 10);
    days.push({ day, weekday, date: dateFormatted });
  }

  return days;
}

export const months: any = {
  1: 'Janeiro',
  2: 'Fevereiro',
  3: 'Março',
  4: 'Abril',
  5: 'Maio',
  6: 'Junho',
  7: 'Julho',
  8: 'Agosto',
  9: 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro',
};
