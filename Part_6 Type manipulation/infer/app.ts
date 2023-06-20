function runTransaction(transaction: {
    fromTo: [string, string],
}) {
    console.log(transaction);
}

// Один из вариантов
const transaction = {
    fromTo: ["1", "2"] as [string, string]
}
runTransaction(transaction);

const transaction2: GetFirstArg<typeof runTransaction> = {
    fromTo: ["1", "2"]
}
runTransaction(transaction2);
type GetFirstArg<T> = T extends (first: infer FirstArg, ...args: any[]) => any ? FirstArg : never;