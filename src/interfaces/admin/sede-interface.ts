
export interface Sede {
    address: string;
    city: string;
    name: string
    partner: string;
    phone: string;
    status: boolean | string;
    id: string;
    created_at: Date;
    updated_at: Date;
}



export interface SedeAdd {
    name: string
    address: string;
    phone: string;
    city: string;
    status?: boolean | string;
}