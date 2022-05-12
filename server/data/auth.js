// abcd1234: $2b$15$9oMWpOjWjkH7TAvh4lWlteFoH1jihoi6.usudML1BLYwkxmkkJZ5i

let users = [
  {
    id: '1',
    username: 'bob',
    password: '$2b$15$9oMWpOjWjkH7TAvh4lWlteFoH1jihoi6.usudML1BLYwkxmkkJZ5i',
    name: 'Bob',
    email: 'bob@gmail.com',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png',
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
