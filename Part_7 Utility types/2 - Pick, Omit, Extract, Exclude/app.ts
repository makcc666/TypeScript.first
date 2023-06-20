interface PaymentPersistent {
	id: number;
	sum: number;
	from: string;
	to: string;
}

type Payment = Omit<PaymentPersistent, 'id'> // => sum, from, to
type PaymentRequisites = Pick<PaymentPersistent, 'from' | 'to'> // => from, to

type ExtractEx = Extract<'from' | 'to' | Payment, string>; // => from, to
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>; // => sum, from, id