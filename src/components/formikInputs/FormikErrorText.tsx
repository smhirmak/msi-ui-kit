import { useLocalizeContext } from '@/contexts/locale/LocalizeContext';
import MethodHelper from '@/utilities/MethodHelper';

interface IFormikErrorText {
  id: string;
  formik: object;
}

const FormikErrorText: React.FC<IFormikErrorText> = ({ id, formik }) => {
  const { t } = useLocalizeContext();
  return (
    MethodHelper.formikErrorCheck(formik, id)
      ? <span className="text-red-500 text-sm font-medium">{t(MethodHelper.formikErrorCheck(formik, id))}</span>
      : <span className="text-red-500 text-sm font-medium">&nbsp;</span>
  );
};

export default FormikErrorText;
