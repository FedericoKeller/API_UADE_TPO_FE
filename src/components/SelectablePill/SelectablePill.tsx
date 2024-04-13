import { CloseButton } from "@mantine/core";
import './SelectablePill.scss';

interface SelectablePillProps extends React.ComponentPropsWithoutRef<'div'> {
    id: string;
    data: Record<string, string | number>[];
    onRemove?: () => void;
  }

export const SelectablePill = ({ id, data, onRemove, ...others }: SelectablePillProps) => {
    const selectedResult = data.find((item) => item.id === id);
  
    return (
      <div className="pill" {...others}>
        <div className="label">{selectedResult?.name}</div>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          color="gray"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </div>
    );
};