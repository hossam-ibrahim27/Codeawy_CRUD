import { Fragment, useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./Components/ProductCard";
import { Category, CircleColorsData, ModelInputs, ProductsData } from "./data";
import type { IProduct, IValidateModelInputs } from "./interfaces";
import Model from "./UI/Model";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { ValidateModelInputs } from "./Validation";
import Error from "./Components/Error";
import CircleColor from "./UI/CircleColor";
import SelectedList from "./UI/SelectedList";
import type { TProduct } from "./Types";
import toast, { Toaster } from 'react-hot-toast';



const App = () => {
  const defaultModelInputs = {
    title: "", description: "", price: "", colors: [], imageURL: "",
    category: {
      type: "", imageCategory: ""
    }
  }
  const defaultError = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: ""
  }
  //@/*  ---------------------------- *** Sates *** ------------------------------ */
  // @ 1) Adding
  const [productsList, setProductList] = useState<IProduct[]>(ProductsData);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modelInputs, setModelInputs] = useState<IProduct>(defaultModelInputs);
  const [errorHandling, setErrorHandling] = useState<IValidateModelInputs>(defaultError);
  const [temporaryColors, setTemporaryColors] = useState<string[]>([]);
  const [errorColors, setErrorColors] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState(Category[3]);
  // @ 2) Editing
  const [modelEditInputs, setModelEditInputs] = useState<IProduct>(defaultModelInputs);
  const [isOpenEditModel, setIsOpenEditModel] = useState<boolean>(false);
  const [productIndexInList, setProductIndexInList] = useState<number>(0);
  // @ 3) Removed
  const [isOpenRemoveModel, setIsOpenRemoveModel] = useState<boolean>(false);
  //@/*  ---------------------------- *** Handler *** ------------------------------ */
  // @ 1) Adding
  //* Open Close Model
  const openModel = () => setIsOpen(true)
  const closeModel = () => setIsOpen(false);
  //* Catch Input Values
  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = evt.target;
    setModelInputs({ ...modelInputs, [name]: value });
    setErrorHandling({ ...errorHandling, [name]: "" });
  }
  //* Submit New Product
  const submitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const { title, imageURL, description, price } = modelInputs;
    const errors = ValidateModelInputs({ title, imageURL, description, price });
    //* true => Not Have Error , false => Have Error
    const isNotHaveError = Object.values(errors).some(item => item === "") && Object.values(errors).every(item => item === "")
    if (!isNotHaveError || temporaryColors.length === 0) {
      setErrorHandling(errors)
      setErrorColors("Must Selected One Color At Least");
      return;
    }
    //* Push New Element To Dom
    setProductList(prev => [{ ...modelInputs, id: Date.now().toString(36) + Math.random().toString(36).slice(2), colors: temporaryColors, category: selectedCategory }, ...prev])
    toast("The product has been successfully created in your store.", {
      duration: 3500,
      position: 'top-center',
      style: {
        backgroundColor: "#0f172b",
        color: "#fff"
      },
    });
    //* return default Setting
    setTemporaryColors([]);
    setModelInputs(defaultModelInputs);
    closeModel();
  }
  const OnCancelHandler = (): void => {
    setModelInputs(defaultModelInputs);
    setTemporaryColors([]);
    closeModel();
  }

  // @ 2) Editing
  const openModelEdit = () => setIsOpenEditModel(true)
  const closeModelEdit = () => setIsOpenEditModel(false);
  //* Catch Input Values
  const onChangeEditHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = evt.target;
    setModelEditInputs({ ...modelEditInputs, [name]: value });
    setErrorHandling({ ...errorHandling, [name]: "" });
  }
  const submitEditHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const { title, imageURL, description, price } = modelEditInputs;
    const errors = ValidateModelInputs({ title, imageURL, description, price });
    //* true => Not Have Error , false => Have Error
    const isNotHaveError = Object.values(errors).some(item => item === "") && Object.values(errors).every(item => item === "")
    if (!isNotHaveError || temporaryColors.length === 0) {
      setErrorHandling(errors)
      setErrorColors("Must Selected One Color At Least");
      return;
    }
    //* Edit Element In Product List by ProductIndex
    const shallowFromProductList = [...productsList]; //* For Performance
    shallowFromProductList[productIndexInList] = { ...modelEditInputs, colors: temporaryColors.concat(modelEditInputs.colors) };
    setProductList(shallowFromProductList);
    //* return default Setting
    setTemporaryColors([]);
    toast("The product details have been successfully updated in your store", {
      duration: 3500,
      position: 'top-center',
      style: {
        backgroundColor: "#0f172b",
        color: "#fff"
      },
    });
    setModelEditInputs(defaultModelInputs);
    closeModelEdit();
  }
  const OnCancelEditHandler = (): void => {
    setModelEditInputs(defaultModelInputs);
    setTemporaryColors([]);
    closeModelEdit();
  }
  // @ 3) Remove
  const openRemoveModel = () => setIsOpenRemoveModel(true)
  const closeRemoveModel = () => setIsOpenRemoveModel(false);
  const submitRemoveHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    //* Remove Element In Product List by ProductIndex
    const shallowFromProductList = [...productsList]; //* For Performance
    const productsAfterRemove = shallowFromProductList.filter(product => product.id !== modelEditInputs.id);
    toast("The product has been successfully removed from your store", {
      duration: 3500,
      position: 'top-center',
      style: {
        backgroundColor: "#ec003f",
        color: "#fff"
      },
    });
    setProductList(productsAfterRemove);
    closeRemoveModel();
  }
  const OnCancelRemoveHandler = (): void => {
    closeRemoveModel();
  }
  //@/*  ---------------------------- *** Renders *** ------------------------------ */
  // @ 1) Adding
  const renderProductList = productsList.map((product, index) => (
    <ProductCard openRemoveModel={openRemoveModel} index={index} setProductIndexInList={setProductIndexInList} product={product} key={product.id} openModelEdit={openModelEdit} setModelEditInputs={setModelEditInputs} />
  ))
  const renderModelInputs = ModelInputs.map(({ id, label, name, type }) => (
    <div key={id} className="flex flex-col space-y-2">
      <label htmlFor={id} className="font-medium text-gray-700">{label}</label>
      <Input type={type} name={name} id={id} value={modelInputs[name]} onChange={onChangeHandler} />
      <Error msg={errorHandling[name]} />
    </div>
  ));
  const renderCircleColor = CircleColorsData.map((color, idx) => (
    <CircleColor key={`${color}_${idx}`} variant="cursor-pointer" backColor={color} onClick={() => {
      if (temporaryColors.includes(color)) {
        setTemporaryColors(temporaryColors.filter(item => item !== color));
        return;
      }
      if (modelEditInputs.colors.includes(color)) {
        setTemporaryColors(temporaryColors.filter(item => item !== color));
        return;
      }
      setErrorColors("");
      setTemporaryColors([...temporaryColors, color]);
    }}
    />
  ));
  const renderTemporaryColors = temporaryColors.map((color, idx) => (
    <Fragment key={`${color}_${idx}`}>
      <div className="p-2 rounded-md" style={{ backgroundColor: color }}>{color}</div>
    </Fragment>
  ))
  // @ 2) Editing
  const renderEditModelInputs = ((id: string, type: "text", name: TProduct, label: string) => (
    <div className="flex flex-col space-y-2">
      <label htmlFor={id} className="font-medium text-gray-700">{label}</label>
      <Input type={type} name={name} id={id} value={modelEditInputs[name]} onChange={onChangeEditHandler} />
      <Error msg={errorHandling[name]} />
    </div>
  ));
  const renderTemporaryColorsEdit = temporaryColors.concat(modelEditInputs.colors).map((color, idx) => (
    <Fragment key={`${color}_${idx}`}>
      <div className="p-2 rounded-md" style={{ backgroundColor: color }}>{color}</div>
    </Fragment>
  ))
  //@/*  ---------------------------- *** JSX *** ------------------------------ */
  return (
    <main className="@container mt-[50px]">
      <div className="@md:w-[85%] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-bold text-3xl text-slate-800"><span className="text-rose-500">P</span>roducts<span className="text-rose-500">L</span>ist</h2>
          <Button type='button' buttonWidth='w-fit' variant="bg-slate-800 px-3" onClick={openModel}>Add New Product</Button>
        </div>
        {/*//@ 1) Adding */}
        <Model isOpen={isOpen} title="Add New Product" close={closeModel}>
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderModelInputs}
            <SelectedList selected={selectedCategory} setSelected={setSelectedCategory} list={Category} />
            <div className="flex space-x-2 space-y-2 flex-wrap">
              {renderCircleColor}
            </div>
            <div className="flex gap-2 flex-wrap">
              {renderTemporaryColors}
              <Error msg={errorColors} />
            </div>
            <div className="flex space-x-3">
              <Button type='submit' variant="bg-slate-800 px-3" buttonWidth='w-full'>Submit</Button>
              <Button type='button' variant="bg-slate-200 !text-slate-900 px-3" buttonWidth='w-full' onClick={OnCancelHandler}>Cancel</Button>
            </div>
          </form>
        </Model>
        {/*//@ 2) Editing */}
        <Model isOpen={isOpenEditModel} title="Edit THIS Product" close={closeModelEdit}>
          <form className="space-y-3" onSubmit={submitEditHandler}>
            {renderEditModelInputs("title", "text", "title", "Product Title")}
            {renderEditModelInputs("description", "text", "description", "Product Title")}
            {renderEditModelInputs("imageURL", "text", "imageURL", "Product Image URL")}
            {renderEditModelInputs("price", "text", "price", "Product Price")}
            <SelectedList selected={modelEditInputs.category} setSelected={(value) => setModelEditInputs({ ...modelEditInputs, category: value })} list={Category} />
            <div className="flex space-x-2 space-y-2 flex-wrap">
              {renderCircleColor}
            </div>
            <div className="flex gap-2 flex-wrap">
              {renderTemporaryColorsEdit}
              <Error msg={errorColors} />
            </div>
            <div className="flex space-x-3">
              <Button type='submit' variant="bg-slate-800 px-3" buttonWidth='w-full'>Submit</Button>
              <Button type='button' variant="bg-slate-200 !text-slate-900 px-3" buttonWidth='w-full' onClick={OnCancelEditHandler}>Cancel</Button>
            </div>
          </form>
        </Model>
        {/*//@ 3) Remove */}
        <Model isOpen={isOpenRemoveModel} title="Are You Sure You Want To Remove this Product Your Store?" close={closeRemoveModel}>
          <form className="space-y-3" onSubmit={submitRemoveHandler}>
            <p className="text-gray-600">Removing this product will permanently delete it from your store, including all of its details and associated information. This action is irreversible and cannot be undone, so please ensure you no longer need this product before proceeding.</p>
            <div className="flex space-x-3 mt-5">
              <Button type='submit' variant="bg-rose-600 px-3" buttonWidth='w-full'>Yes, remove</Button>
              <Button type='button' variant="bg-slate-200 !text-slate-900 px-3" buttonWidth='w-full' onClick={OnCancelRemoveHandler}>Cancel</Button>
            </div>
          </form>
        </Model>
        <div className="grid gap-4 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {renderProductList}
        </div>
      </div>
      <Toaster />
    </main>
  );
}

export default App;
