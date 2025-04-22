export const LOGIN = "LOGIN";
export const CLOCK_IN = "CLOCK_IN";
export const CLOCK_OUT = "CLOCK_OUT";

export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

export const clockIn = (userName, date, clockInTime) => {
  return {
    type: CLOCK_IN,
    payload: {
      userName,
      date,
      clockInTime,
    },
  };
};

export const clockOut = (userName, date, clockOutTime) => {
  return {
    type: CLOCK_OUT,
    payload: {
      userName,
      date,
      clockOutTime,
    },
  };
};
