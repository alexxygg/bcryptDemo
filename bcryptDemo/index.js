const bycypt = require("bcrypt");
//saltRounds is like the difficulty, 12 or
//256ms is the sweet-spot
//The lower the number is, the faster it is.
//It grows exponentially.

// const hashPassword = async (pw) => {
//   const salt = await bycypt.genSalt(12);
//   const hash = await bycypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// };

const hashPassword = async (pw) => {
  // const salt = await bycypt.genSalt(12);
  const hash = await bycypt.hash(pw, 12);
  //   console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const result = await bycypt.compare(pw, hashedPw);
  if (result) {
    console.log("Successful attempt, logged in.");
  } else {
    console.log("Failed attempt, try again.");
  }
};
// hashPassword("alex54321");
// RESULT-->
// SALT-- $2b$12$OqT1w0X51D5l/QxA4rFsD.
// HASHED WITH SALT-- $2b$12$OqT1w0X51D5l/QxA4rFsD.HjevIUVC0VkTy1JdOQ0pdh7HBvpNN7G

//RESULT ONLY HASH -- $2b$12$rozfHb4JeMKgVFevSWSJxuL77ANUx3c0L9F2IN6gppiCrCbY8S55G

// login(
//   "alex54321",
//   "$2b$12$OqT1w0X51D5l/QxA4rFsD.HjevIUVC0VkTy1JdOQ0pdh7HBvpNN7G"
// );

login(
  "alex54321",
  "$2b$12$OqT1w0X51D5l/QxA4rFsD.HjevIUVC0VkTy1JdOQ0pdh7HBvpNN7G"
);
