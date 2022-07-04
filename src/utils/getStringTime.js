import moment from 'moment';

export const getStringTime = (date) => {
  const oldTime = moment(date);
  const nowTime = moment();

  const diff = nowTime.diff(oldTime);

  if (diff < 60 * 60 * 1000) return '12 минут назад';
  if (diff > 60 * 60 * 1000 && diff < 24 * 60 * 60 * 1000) return '5 часов назад';
  return `${Math.floor(moment.duration(diff).asDays())} дней назад`;
};
