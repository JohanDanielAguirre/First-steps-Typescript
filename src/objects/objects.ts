export const estudentsids : number[] = [1,2,3,4,5,6,89]
estudentsids.push(+"58")
interface Student {
    id: number
    name: string;
    age: number;
    isActive?: boolean;
}

export const johan: Student = {
    id: 1,
    name: "Johan",
    age: 4,
    isActive: true,
}