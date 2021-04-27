import moment from 'moment';
import React, { useState } from 'react';
const Break = () => {
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300);
  const decrementBreakLengthByOneMinute = () => {
    const newBreakLengthInSeconds = breakLengthInSeconds - 60;
    if (newBreakLengthInSeconds < 0) {
      setBreakLengthInSeconds(0);
    } else {
      setBreakLengthInSeconds(newBreakLengthInSeconds);
    }
  };
  const incrementBreakLengthByOneMinute = () => setBreakLengthInSeconds(breakLengthInSeconds + 60);
  const breakLengthInMinutes = moment.duration(breakLengthInSeconds, 's').minutes(); // the seconds to minutes conversion is HERE!
  return (
    <div>
      <p id="break-label">Break</p>
      {/* Note the variable change below */}
      <p id="break-length">{breakLengthInMinutes}</p>
      <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>
        +
      </button>
      <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
        -
      </button>
    </div>
  );
};
export default Break;