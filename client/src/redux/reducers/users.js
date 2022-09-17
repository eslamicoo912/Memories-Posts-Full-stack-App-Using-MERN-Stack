// eslint-disable-next-line import/no-anonymous-default-export
export default (users = [], action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "REGISTER":
      return [...users, action.payload];
    default:
      return users;
  }
};
