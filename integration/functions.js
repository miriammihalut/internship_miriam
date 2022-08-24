export function userID_Alpha() {
  let email = "test";
  let text = "";

  let possible = "qwertyuioplkjhgfdazxcvbnm1234567890";

  for (let i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  let value = email + text.concat("@gmail.com");
  return value;
}

export function passwordID_Alpha() {
  let password = "t";
  let text = "";

  let possible = "qwe";

  for (let i = 0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  let value = password + text.concat("m");
  return value;
}

export function passwordinvalidID_Alpha() {
  let password = "1";
  let text = "";

  let possible = "qwer";

  for (let i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  let value = password + text.concat("m");
  return value;
}
export function userwithnumbersonlyID_Alpha() {
  let email = "";
  let text = "";

  let possible = "1234567890";

  for (let i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  let value = email + text.concat("@gmail.com");
  return value;
}

export function validpassword_Alpha() {
  let pass = "test";
  let text = "";

  let possible = "qwertyuioplkjhgfdazxcvbnm";

  for (let i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  let value = pass + text.concat("2");
  return value;
}

export function onlynumberspassword_Alpha() {
  let password = "";
  let text = "";

  let possible = "12345678";

  for (let i = 0; i < 9; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  let value = password + text.concat("4");
  return value;
}

export function passwordwithoutnumber_Alpha() {
  let password = "testare";
  let text = "";

  let possible = "qwe";

  for (let i = 0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  let value = password + text.concat("m");
  return value;
}

export function fullName() {
  let password = "name";
  let text = "";

  let possible = "qwe";

  for (let i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  let value = password + text.concat("");
  return value;
}
