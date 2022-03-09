import { RenderFieldExtensionCtx } from 'datocms-plugin-sdk';
import { Canvas, SelectInput, Form } from 'datocms-react-ui';
import { useState,  useEffect } from 'react';
import s from './styles.module.css';

type Props = {
  ctx: RenderFieldExtensionCtx;
};

export default function LocaleSelector({ ctx }: Props) {

  const defaultLocale = ctx.site.attributes.locales[0];
  const [selectedLocale, setSelectedLocale] = useState<string>(defaultLocale);

  useEffect(() => {
    const currentValue = ctx.formValues[ctx.fieldPath] as string;

    if(currentValue){
      setSelectedLocale(currentValue);
    }
  },[selectedLocale, ctx.formValues, ctx.fieldPath])

  /**
   * @desc Transform string[] locales to Option[] for select input
   * @param locales
   * @returns
   */
  const transformLocales = (locales: string[]):Array<{ value: string; label: string }> => {
    return locales.reduce((acc, locale) => {
      acc.push({value:locale,label:locale});
      return acc;
    }, [] as Array<{ value: string; label: string }>)
  }

  const options = transformLocales(ctx.site.attributes.locales);

  const changeLocale = (value:string) => {
    if(value){
      ctx.setFieldValue(ctx.field.attributes.api_key, value);
      setSelectedLocale(value);
    }
  }

  return (
    <Canvas ctx={ctx}>
      <Form className={s['form']}>
      <SelectInput
        options={options}
        value={options.find((o) => o.value === selectedLocale)}
        isDisabled={false}
        onChange={(o) => {
          changeLocale(o?.value || defaultLocale);
        }}
      />
      </Form>
    </Canvas>
  );
}
