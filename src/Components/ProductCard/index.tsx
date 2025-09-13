import { ParagraphSlice } from "../../functions/ParagraphSlice";
import type { IProduct } from "../../interfaces";
import Button from "../../UI/Button";
import CircleColor from "../../UI/CircleColor";
import Image from "../../UI/Image";
interface IProps {
    product: IProduct;
    setModelEditInputs: (product: IProduct) => void;
    openModelEdit: () => void;
    index: number;
    setProductIndexInList: (index: number) => void;
    openRemoveModel: () => void;
}
const ProductCard = ({ product, openRemoveModel, setModelEditInputs, openModelEdit, index, setProductIndexInList }: IProps) => {
    const { imageURL, title, description, category, price, colors } = product;
    //@/*  ---------------------------- *** Renders *** ------------------------------ */
    const renderCircleColor = colors.map((color) => (
        <CircleColor backColor={color} key={color} />
    ));
    // @ 2) Editing
    const onEditHandler = () => {
        setProductIndexInList(index);
        setModelEditInputs(product);
        openModelEdit();
    }
    // @ 3) Removed
    const onRemoveHandler = () => {
        setModelEditInputs(product)
        openRemoveModel()
    }
    //@/*  ---------------------------- *** JSX *** ------------------------------ */
    return (
        <div className="border border-gray-200 p-2 rounded">
            <Image imagURL={imageURL} imagTitle={title} styles="w-full rounded h-[400px]" />
            <div className="my-4">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-gray-500">{ParagraphSlice(description, 50)}</p>
            </div>
            <div className="flex items-center gap-1">
                {renderCircleColor}
            </div>
            <div className="flex justify-between items-center my-4">
                <span>EG {price}</span>
                <div className="flex gap-4 items-center">
                    <span>{category.type}</span>
                    <Image imagURL={category.imageCategory} imagTitle={title} styles="w-10 h-10 rounded-full" />
                </div>
            </div>
            <div className="flex items-center space-x-3">
                <Button type="button" buttonWidth="w-full" variant="bg-slate-800" onClick={onEditHandler}>Edit</Button>
                <Button type="button" buttonWidth="w-full" variant="bg-rose-600" onClick={onRemoveHandler}>Remove</Button>
            </div>
        </div >
    );
};

export default ProductCard;