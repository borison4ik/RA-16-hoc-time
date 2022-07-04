import React from 'react';

import { DateTime } from '../DateTime';
import { getStringTime } from '../../utils/getStringTime';

function withFormat(dateFormatFn) {
  if (typeof dateFormatFn !== 'function') {
    throw new Error('dateFormatFn is not a function');
  }

  return function (Component) {
    const func = function (props) {
      if (!props.date || typeof props.date !== 'string') {
        throw new Error('props must have a date and date must be a string of Date, for example 2022-07-04 18:00:00');
      }
      const date = dateFormatFn(props.date);
      return <Component {...props} date={date} />;
    };

    return func;
  };
}

const dataDecorator = withFormat((data) => getStringTime(data));
const DateTimePretty = dataDecorator(DateTime);

export const Video = (props) => {
  return (
    <div className='video'>
      <iframe src={props.url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title='video' />
      <DateTime date={props.date} />
      <DateTimePretty date={props.date} />
    </div>
  );
};
