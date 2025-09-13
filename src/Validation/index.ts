import type { IValidateModelInputs } from "../interfaces"

export const ValidateModelInputs = ({ imageURL, title, description, price }: IValidateModelInputs) => {
    const error: IValidateModelInputs = {
        title: "", description: "", price: "", imageURL: "",
    }
    const validURL = /^(https?):\/\/(?:localhost|\d{1,3}(?:\.\d{1,3}){3}|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?::\d{2,5})?(?:\/[^\s?#]*)?(?:\?[^\s#]*)?(?:#[^\s]*)?$/;
    if (!title.trim() || title.length < 10 || title.length > 80) {
        error.title = "Product Title Must Be Between 10 and 80 Character";
    }
    if (!description.trim() || description.length < 10 || description.length > 900) {
        error.description = "Product Description Must Be Between 10 and 900 Character";
    }
    if (!imageURL.trim() || !validURL) {
        error.imageURL = "Valid URL IS Required";
    }
    if (!imageURL.trim() || isNaN(Number.parseFloat(price))) {
        error.price = "Valid Price IS Required";
    }
    // if (colors.length == 0) {
    //     error.colors[0] = "Must Selected one Color At Least";
    // }
    return error;
}