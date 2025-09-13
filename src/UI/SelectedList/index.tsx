import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import Image from '../Image';
import type { ICategory } from '../../interfaces';
interface IProps {
    selected: { type: string, imageCategory: string };
    setSelected: (category: ICategory) => void;
    list: ICategory[];
}
const SelectedList = ({ selected, setSelected, list }: IProps) => {


    return (
        <Field>
            <Label className="font-medium text-gray-700 block mb-1">Categories</Label>
            <Listbox value={selected} onChange={setSelected}>
                <ListboxButton
                    className="border relative w-full cursor-pointer border-slate-200 outline-none data-focus:border-slate-600 focus:ring-1 shadow-md p-2 text-md rounded-md">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center !space-x-2">
                            <Image styles='w-5 h-5 rounded-full' imagURL={selected.imageCategory} imagTitle={selected.type} />
                            <span>{selected.type}</span>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group pointer-events-none absolute top-2.5 right-2.5 size-4 text-slate-800">
                        <path fillRule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clipRule="evenodd" />
                    </svg>
                </ListboxButton>
                <ListboxOptions transition className="w-full rounded-md bg-white shadow-md focus:outline-none text-left transition duration-100 ease-in data-leave:data-closed:opacity-0">
                    {list.map((category) => (
                        <ListboxOption key={category.id} value={category} className="group cursor-pointer select-none p-2 data-focus:text-slate-50 data-focus:bg-slate-800 flex justify-start items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="invisible size-4 group-data-selected:visible">
                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                            <Image styles='w-5 h-5 rounded-full' imagURL={category.imageCategory} imagTitle={category.type} />
                            <div>{category.type}</div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </Field>
    )
}
export default SelectedList;