import { cn } from '@/lib/utils';

type SectionProps = {
  className?: string;
  children?: React.ReactNode;
};

const SectionBlock: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <div className={cn('w-full flex mt-20 flex-col', className)}>
      {children}
    </div>
  );
};

export default SectionBlock;
