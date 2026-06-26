const User = {
  _email: "sudhanshu@gmail.com",
  _password: "abd",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
