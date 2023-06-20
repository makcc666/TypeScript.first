type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Capitalize<ReadOrWrite>}`
type Access2 = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`

type ErrorOrSuccess = 'error' | 'success';
type TypeResponse = {
	result: `htt${Capitalize<ErrorOrSuccess>}`,
}

const a2: TypeResponse = {
	result: "httSuccess"
}

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
type TypeSome = ReadOrWriteBulk<Access2>;