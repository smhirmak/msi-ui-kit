import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLocalizeContext } from '@/contexts/locale/LocalizeContext';

const countries = [
  {
    label: 'TR',
    src: '/assets/icons/flagOfTurkey.svg',
    value: 'tr',
  },
  {
    label: 'EN',
    src: '/assets/icons/flagOfUK.svg',
    value: 'en',
  },
];

interface ILanguangeSelect {
  className?: string;
}

const LanguangeSelect: React.FC<ILanguangeSelect> = ({ className }) => {
  const { setLocale } = useLocalizeContext();
  const { t } = useLocalizeContext();

  const handleChange = (event: string) => {
    const localeLang: string = countries?.find(f => f?.value === event)?.value ?? '';
    localStorage.setItem('lang', localeLang);
    setLocale(localeLang);
  };
  return (
    <div className={className}>
      <Select defaultValue={localStorage.getItem('lang')} onValueChange={handleChange}>
        <SelectTrigger className="min-w-[7rem] bg-transparent border-none focus:ring-0 ring-0">
          <SelectValue placeholder={t('Choose Languange')} />
        </SelectTrigger>
        <SelectContent>
          {countries.map((option, key) => (
            <SelectItem key={key} value={option.value}>
              <div className="flex items-center gap-2">
                <img
                  src={option.src}
                  alt={option.label}
                  width="30px"
                  height="20px"
                  style={{
                    overflow: 'hidden',
                  }}
                />
                {option.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguangeSelect;
