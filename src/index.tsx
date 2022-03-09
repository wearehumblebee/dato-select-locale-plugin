import { connect, RenderFieldExtensionCtx} from 'datocms-plugin-sdk';
import { render } from './utils/render';
import LocaleSelector  from "./entrypoints/LocaleSelector"
import 'datocms-react-ui/styles.css';

connect({
  manualFieldExtensions() {
    return [
      {
        id: 'countrySelector',
        name: 'Select locale',
        type: 'editor',
        fieldTypes: ['string'],
      },
    ];
  },
    renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
      if(fieldExtensionId === "countrySelector"){
        return render(<LocaleSelector ctx={ctx}/>);
      }
    },
});
