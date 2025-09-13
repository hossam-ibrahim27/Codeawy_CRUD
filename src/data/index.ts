import type { ICategory, IModelInputs, IProduct } from "../interfaces";
import productImage1 from "../assets/product-1.jpg";
import productImage2 from "../assets/product-2.jpg";
import productImage3 from "../assets/product-3.jpg";
import productImage4 from "../assets/product-4.jpg";
import productImage5 from "../assets/product-5.jpg";
import productImage6 from "../assets/product-6.jpg";
import productImage7 from "../assets/product-7.jpg";
import productImage8 from "../assets/product-8.jpg";
import productImage9 from "../assets/product-9.jpg";
import productImage10 from "../assets/product-10.jpg";
import productImage11 from "../assets/product-11.jpg";
import productImage12 from "../assets/product-12.jpg";

export const ProductsData: IProduct[] = [
    {
        id: "1",
        title: "Nike Air Max 270",
        description: "Comfortable sneakers with breathable mesh and air cushioning for daily wear.",
        imageURL: productImage1,
        colors: ["#303F9F", "#1976D2", "#00796B", "#388E3C", "#D32F2F", "#6D4C41"],
        category: { type: "Nike", imageCategory: productImage1, },
        price: "180",
    },
    {
        id: "2",
        title: "Puma RS-X",
        description: "Chunky retro-style sneakers with soft cushioning and bold design.",
        imageURL: productImage2,
        colors: ["#303F9F", "#1976D2", "#388E3C", "#D32F2F", "#6D4C41"],
        category: { type: "Adidas", imageCategory: productImage2, },
        price: "150",
    },
    {
        id: "3",
        title: "Puma RS-X",
        description: "Chunky retro-style sneakers with soft cushioning and bold design.",
        imageURL: productImage3,
        category: { type: "Nike", imageCategory: productImage3, },
        price: "150",
        colors: ["#6D4C41", "#F06292", "#FF7043", "#7B1FA2"],
    },
    {
        id: "4",
        title: "New Balance 574",
        description: "Classic lifestyle sneakers with suede overlays and EVA cushioning.",
        imageURL: productImage4,
        category: { type: "Adidas", imageCategory: productImage4, },
        price: "140",
        colors: ["#303F9F", "#1976D2", "#00796B", "#388E3C", "#D32F2F", "#6D4C41"],
    },
    {
        id: "5",
        title: "Reebok Club C 85",
        description: "Minimalist retro sneakers with soft leather upper and timeless look.",
        imageURL: productImage5,
        category: { type: "Nike", imageCategory: productImage5, },
        price: "130",
        colors: ["#E64A19", "#E91E63", "#C2185B", "#8E24AA", "#512DA8"],
    },
    {
        id: "6",
        title: "Jordan 1 Retro High",
        description: "Iconic basketball sneakers with premium leather and classic colorways.",
        imageURL: productImage6,
        category: { type: "Adidas", imageCategory: productImage6, },
        price: "220",
        colors: ["#607D8B", "#455A64", "#303F9F", "#5D4037"],
    },
    {
        id: "7",
        title: "Asics Gel-Kayano",
        description: "Performance running shoes with advanced Gel cushioning technology.",
        imageURL: productImage7,
        category: { type: "Nike", imageCategory: productImage7, },
        price: "160", colors: ["#6D4C41", "#F06292", "#FF7043", "#7B1FA2", "#00ACC1", "#43A047"],
    },
    {
        id: "8",
        title: "Converse Chuck Taylor",
        description: "Timeless canvas sneakers with rubber sole and high-top design.",
        imageURL: productImage8,
        category: { type: "Adidas", imageCategory: productImage8, },
        price: "90", colors: ["#D32F2F", "#303F9F", "#E64A19", "#00ACC1", "#6D4C41"],
    },
    {
        id: "9",
        title: "Vans Old Skool",
        description: "Classic skate shoes with suede accents and durable canvas.",
        imageURL: productImage9,
        category: { type: "Nike", imageCategory: productImage9, },
        price: "85", colors: ["#1976D2", "#303F9F", "#303F9F", "#00ACC1"],
    },
    {
        id: "10",
        title: "Under Armour HOVR",
        description: "Lightweight running sneakers with HOVR cushioning for smooth stride.",
        imageURL: productImage10,
        category: { type: "Adidas", imageCategory: productImage10 },
        price: "170", colors: ["#00ACC1", "#29B6F6", "#FF7043", "#F06292", "#7B1FA2", "#C2185B"],
    },
    {
        id: "11",
        title: "Fila Disruptor II",
        description: "Chunky sneakers with bold sole design and retro vibes.",
        imageURL: productImage11,
        category: { type: "Nike", imageCategory: productImage11 },
        price: "120", colors: ["#D32F2F", "#5D4037", "#388E3C", "#E64A19", "#00796B"],
    },
    {
        id: "12",
        title: "Balenciaga Triple S",
        description: "Luxury sneakers with oversized sole and premium materials.",
        imageURL: productImage12,
        category: { type: "Adidas", imageCategory: productImage12 },
        price: "850", colors: ["#193cb8", "#512DA8", "#C2185B", "#F06292"],
    },
]

export const ModelInputs: IModelInputs[] = [
    {
        type: "text", id: "title", label: "Product Title", name: "title"
    },
    {
        type: "text", id: "description", label: "Product Description", name: "description"
    },
    {
        type: "text", id: "imageURL", label: "Product Image URL", name: "imageURL"
    },
    {
        type: "text", id: "price", label: "Product Price", name: "price"
    },
]
export const CircleColorsData: string[] = [
    "#D32F2F",
    "#388E3C",
    "#00796B",
    "#29B6F6",
    "#1976D2",
    "#303F9F",
    "#512DA8",
    "#8E24AA",
    "#C2185B",
    "#E91E63",
    "#E64A19",
    "#5D4037",
    "#455A64",
    "#607D8B",
    "#43A047",
    "#00ACC1",
    "#7B1FA2",
    "#FF7043",
    "#F06292",
    "#6D4C41",
]
export const Category: ICategory[] = [
    { id: "1", type: "Nike", imageCategory: productImage1 },
    { id: "2", type: "Adidas", imageCategory: productImage2 },
    { id: "3", type: "Nike", imageCategory: productImage3 },
    { id: "4", type: "Adidas", imageCategory: productImage4 },
    { id: "5", type: "Nike", imageCategory: productImage5 },
    { id: "6", type: "Adidas", imageCategory: productImage6 },
    { id: "7", type: "Nike", imageCategory: productImage7 },
    { id: "8", type: "Adidas", imageCategory: productImage8 },
    { id: "9", type: "Nike", imageCategory: productImage9 },
    { id: "10", type: "Adidas", imageCategory: productImage10 },
]