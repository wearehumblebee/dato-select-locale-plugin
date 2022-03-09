import { RenderFieldExtensionCtx } from 'datocms-plugin-sdk';
import { Canvas, Form } from 'datocms-react-ui';
import { useState,  useEffect } from 'react';
import Selector from '../../components/LocaleSelector';
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

  const changeLocale = (value:string) => {
    if(value){
      ctx.setFieldValue(ctx.field.attributes.api_key, value);
      setSelectedLocale(value);
    }
  }

  return (
    <Canvas ctx={ctx}>
      <Form className={s['form']}>
        <Selector options={ctx.site.attributes.locales} selectedOption={selectedLocale} changeLocale={changeLocale}/>
      </Form>
    </Canvas>
  );
}
