import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Danise Iheme",
    email: "danise@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Martin Iheme",
    email: "martin@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
