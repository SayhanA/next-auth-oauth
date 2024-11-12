export const users = [
  {
    id: "lsd34",
    email: "sayhan@gmail.com",
    password: "password",
  },
  {
    id: "lsd35",
    email: "abu@gmail.com",
    password: "password",
  },
  {
    id: "lsd36",
    email: "jui@gmail.com",
    password: "password",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
