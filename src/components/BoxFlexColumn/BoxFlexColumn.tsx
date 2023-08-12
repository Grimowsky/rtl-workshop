import { cn } from '../../utils/classNameUtils';

interface BoxFlexColumn {
  classNames?: string;
  children: React.ReactNode;
}

const BoxFlexColumn: React.FC<BoxFlexColumn> = ({ classNames = '', children }) => {
  return <div className={cn('flex flex-col', classNames)}> {children} </div>;
};

export default BoxFlexColumn;
