type User = {
  name: string,
  id: number
}

type Admin = {
  isAdmin: true,
  level: 0 | 1 | 2
}

type UserAdmin = User & Admin;

let jair: UserAdmin = {
  name: "Jair",
  id: 0,
  isAdmin: true,
  level: 1
}
