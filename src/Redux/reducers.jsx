const initialState = {
  currentUser: null,
  loginError: null,
  users: [
    {
      name: "sakshi",
      password: "sakshi123",
      role: "Employee",
      timesheet: [
        {
          date: "4/22/2025",
          clockInTime: "8:40:50 AM",
          clockOutTime: "8:40:55 AM",
          totalHours: 8,
        },
        {
          date: "4/21/2025",
          clockInTime: "9:00:00 AM",
          clockOutTime: "5:00:00 PM",
          totalHours: 8,
        },
      ],
    },
    {
      name: "xyz",
      password: "xyz123",
      role: "Employee",
      timesheet: [
        {
          date: "4/20/2025",
          clockInTime: "10:00:00 AM",
          clockOutTime: "06:00:00 PM",
          totalHours: 8,
        },
      ],
    },
    {
      name: "abc",
      password: "abc123",
      role: "Employee",
      timesheet: [
        {
          date: "4/19/2025",
          clockInTime: "08:30:00 AM",
          clockOutTime: "04:30:00 PM",
          totalHours: 8,
        },
      ],
    },
  ],
};

const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      const { name, password } = action.payload;
      console.log("name and password in reducer", name, password);
      const user = state.users.find(
        (u) => u.name === name && u.password === password
      );
      console.log("user found in reducer:", user);
      if (user) {
        return { ...state, currentUser: user, loginError: null };
      } else {
        return { ...state, loginError: "Invalid username or password" };
      }
    }

    case "CLOCK_IN": {
      if (!state.currentUser) return state;
      const newTimesheet = {
        date: action.payload.date,
        clockInTime: action.payload.clockInTime,
        clockOutTime: null,
        totalHours: 0,
      };
      const updatedUsers = state.users.map((user) => {
        if (user.name === state.currentUser.name) {
          return {
            ...user,
            timesheet: [...user.timesheet, newTimesheet],
          };
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
        currentUser: {
          ...state.currentUser,
          timesheet: [...state.currentUser.timesheet, newTimesheet],
        },
      };
    }

    case "CLOCK_OUT": {
      if (!state.currentUser) return state;
      const { date, clockOutTime, totalHours } = action.payload;
      const updatedTimesheet = state.currentUser.timesheet.map((entry) => {
        if (entry.date === date && !entry.clockOutTime) {
          return { ...entry, clockOutTime, totalHours };
        }
        return entry;
      });
      const updatedUsers = state.users.map((user) => {
        if (user.name === state.currentUser.name) {
          return { ...user, timesheet: updatedTimesheet };
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
        currentUser: {
          ...state.currentUser,
          timesheet: updatedTimesheet,
        },
      };
    }

    default:
      return state;
  }
};

export default clockReducer;
