import { useEffect, useState } from 'react';
import CustomSyntaxHighlighter from '@/components/custom-syntax-highlighter';
import { getComponentSource } from '@/utilities/getComponentSource';
import Skeleton from './ui/skeleton';

interface ComponentSourceViewerProps {
  componentName: string;
  className?: string;
  folder?: string;
}

const ComponentSourceViewer = ({
  componentName,
  className,
  folder,
}: ComponentSourceViewerProps) => {
  const [source, setSource] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getComponentSource(componentName, folder).then((code) => {
      setSource(code);
      setLoading(false);
    });
  }, [componentName, folder]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-background p-8">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    );
  }

  return (
    <CustomSyntaxHighlighter
      content={source}
      className={className}
      copyButtonClassName="top-8"
    />
  );
};

export default ComponentSourceViewer;
