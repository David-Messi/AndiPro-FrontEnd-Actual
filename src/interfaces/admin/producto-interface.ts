

export interface Producto {
    name: string,
    sku: string,
    description: string,
    short_description: string,
    url_key: string,
    weight: string,
    unit_of_measure: string,
    measure: string,
    meta_title: string,
    meta_description: string,
    meta_keywords: string,
    brand: number,
    tax: number,
    type: string,
    categories: number[],
    id?: string,
    created_at?: Date,
    updated_at?: Date,
    status?: Boolean,
}
