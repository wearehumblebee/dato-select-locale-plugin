import { ChangeEvent } from "react";
import s from './styles.module.css';

type PropTypes = {
  options: string[];
  changeLocale:Function;
  keyPrefix?:string;
  selectedOption:string;
};

export default function Dropdown({ options, changeLocale, keyPrefix, selectedOption }: PropTypes) {

  const onChangeLocale = (e:ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value){
      changeLocale(e.target.value);
    }
  }

  const prefix = keyPrefix || "locale-option";

  return (
    <select className={s['select']} onChange={onChangeLocale} value={selectedOption}>
      {options.map((option) => (
         <option value={option} key={`${prefix}-${option}`}>{option}</option>
      ))}
    </select>
  );
}
