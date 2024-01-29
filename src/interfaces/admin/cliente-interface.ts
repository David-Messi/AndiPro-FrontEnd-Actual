


export interface Cliente {
    name: string,
    last_name: string,
    email: string,
    phone: string,
    city: string,
    birth_date: Date | string,
    document: string,
    id?: string,
    created_at?: Date,
    updated_at?: Date,
    other_data?: Object
    status?: Boolean,
}