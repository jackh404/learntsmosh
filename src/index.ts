let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level
level = 1
level = 'apple'

function render(document: any) {
    console.log(document);
}

let numbers: number[] = [1, 2, 3,];

numbers.forEach(n => n+1)

let user: [number, string] = [1, 's']
user[0].toString
user[1].toUpperCase
user.push(1)
console.log(user)

// const small = 1
// const medium = 2
// const large = 3

const enum Size {Small = 1, Medium, Large}

let mySize: Size = Size.Medium
console.log(mySize)

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
       return income*1.2
    return income*1.3
}

class Person{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
}

function kgToLbs(weight: number | string): number {
    if(typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

let weight: number & string

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

type Quantity = 50 | 100
let quantity: Quantity = 50

function greet(name: string | null) {
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('Hola!')
}

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}
let customer = getCustomer(0)
if(customer)
    console.log(customer.birthday)

console.log(customer?.birthday?.getFullYear())

let log:any = null

log?.('a')