// // console.log("this is the first stuff");
//! variables

// let awesomeName: string = "shakeAndBake";
// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let requestStatus: "pending" | "success" | "error" = "pending";
// requestStatus = "error";

// const books: string[] = ["1633", "KingsLanding", "Momuni", "Over The Lands"];

// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === "KingsLanding") {
//     foundBook = book;
//     break;
//   }
// }

// requestStatus = "success";

// console.log(foundBook?.length);
// console.log(foundBook?.toUpperCase());

// let orderStatus: "processing" | "shipped" | "delivered" = "processing";

// orderStatus = "shipped";
// console.log(orderStatus.toUpperCase());

// let temperatures: number[] = [20, 25, 30, 14];
// let colors: string[] = ["red", "green", "blue", "yellow"];
// let mixedArray: (number | string)[] = [21, 54, "good"];
// console.log(temperatures, colors, mixedArray);

// let book = { title: "book", cost: 20 };
// let pen = { title: "pen", cost: 20 };
// let notebook = { title: "notebook" };

// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// console.log(items);

//!functions

function sayHi(name: string) {
  console.log(`Hi to everyone who is present ${name.toUpperCase()}`);
}
sayHi("Mike");

function calculateDiscount(price: number) {
  return price * 0.8;
}
const finalPrice = calculateDiscount(200);
console.log(finalPrice);

let names: string[] = ["Mike", "Owen", "standly", "quincys", "john", "jane"];
function isNameinList(name: string) {
  return names.includes(name);
}

let nameToCheck = "Brians";

if (isNameinList(nameToCheck)) {
  console.log("name has been found in the list");
} else {
  console.log("niggur that name is not part of the list you provided");
}

//!optional and default parameters

///! @optional parameters
function calculatePrice(Price: number, discount?: number): number {
  return Price - (discount || 0);
}
let priceAfterDiscount = calculatePrice(290, 40);
console.log(priceAfterDiscount);

///! @default parameters
function calculateScores(score: number, penalty: number = 0) {
  return score - penalty;
}

calculateScores(300);

//!Using Union types as function parameters

function processInput(input: string | number) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    console.log(input * 2);
  }
}

processInput(10);
processInput("Hello world am coming to have all your heads in my plate");

function createStudent(student: {
  id: number;
  name: string;
  email?: string;
}): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!`);
}

const newStudent = {
  id: 7,
  name: "Ann",
};

createStudent(newStudent);
createStudent({ id: 4, name: "Michael", email: "michael@gmail.com" });

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData("Hello everyone around here"));
console.log(processData("Good morning my guys", { reverse: true }));

//!Alias and interface

////!Type Alias

type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

createUser(john);
createUser(susan);

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const Alice: Employee = {
  id: 1,
  name: "Alice",
  department: "Medical Laboratory",
};
const Michael: Employee = {
  id: 1,
  name: "Michael",
  department: "Technology",
};
const Brian: Manager = {
  id: 1,
  name: "Brian",
  employees: [Michael, Alice],
};

function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager incharge of ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

printStaffDetails(Michael);
printStaffDetails(Brian);

////!Type interface

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newporter",
  genre: "self help",
};

console.log(deepWork);
//*type alias

// type Books = {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
// };

//!tuples and Enums
//*tuples where the values wont be like changed

let person: [string, number] = ["john", 23];

function getPerson(): [string, number] {
  return person;
}

let randomPerson = getPerson();
console.log(randomPerson);
//*Enums ---allows us to define a set of named constants

///!Fetching data

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status:${response.status}`);
    const data: Tour[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "there was an error...";

    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.price);
});
