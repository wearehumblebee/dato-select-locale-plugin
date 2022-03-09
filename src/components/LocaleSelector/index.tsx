
import {
  Dropdown,
  DropdownOption,
  DropdownMenu,
  CaretUpIcon,
  CaretDownIcon,
  Button,
} from 'datocms-react-ui';

type PropTypes = {
  options: string[];
  changeLocale:Function
  keyPrefix?:string;
  selectedOption:string;
};

export default function Selector({ options, changeLocale, keyPrefix, selectedOption }: PropTypes) {
  const prefix = keyPrefix || "locale-option";
  return (
    <Dropdown
    renderTrigger={({ open, onClick }) => (
      <Button
        onClick={onClick}
        rightIcon={open ? <CaretUpIcon /> : <CaretDownIcon />}
      >
        {selectedOption}
        </Button>
    )}
  >
    <DropdownMenu>
      {options.map((option) => {
        return (
          <DropdownOption key={`${prefix}-${option}`} active={option === selectedOption} onClick={() => changeLocale(option)}>{option}</DropdownOption>
        )
      })}
    </DropdownMenu>
  </Dropdown>

  );
}
