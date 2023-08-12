import { cn } from '../../utils/classNameUtils';

interface BoxFlexRowProps {
  classNames?: string;
  children: React.ReactNode;
}

const BoxFlexRow: React.FC<BoxFlexRowProps> = ({ classNames = '', children }) => {
  return <div className={cn('flex flex-row', classNames)}>{children}</div>;
};

export default BoxFlexRow;
