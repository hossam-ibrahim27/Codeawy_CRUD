import type { TProduct } from "../Types";

export interface IProduct {
    id?: string | undefined;
    imageURL: string,
    title: string,
    description: string,
    price: string,
    colors: string[],
    category: ICategory;
}
export interface IModelInputs {
    label: string;
    id: string;
    name: TProduct;
    type: "text"
}
export interface IValidateModelInputs {
    imageURL: string,
    title: string,
    description: string,
    price: string,
}
export interface ICategory {
    type: string;
    imageCategory: string;
    id?: string
}