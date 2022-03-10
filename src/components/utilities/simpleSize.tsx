

export type SimpleSize = 'XS'|'S'|'M'|'L'|'XL'|'XXL';

export type SimpleSizeOrNumber = SimpleSize | number;

export function isSimpleSize(v:any): v is SimpleSize {
    return (v==='XS' || v==='S' || v==='M' || v==='L' || v==='XL' || v==='XXL');
}

export function getSimpleSizes(): String[] {
    return ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
}