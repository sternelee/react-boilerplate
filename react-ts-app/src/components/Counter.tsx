import * as React from 'react';

export interface Props {
  label: string;
  count: number;
  onIncrement: () => void;
}

const Counter: React.SFC<Props> = (props) => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => { onIncrement(); };

  return (
    <div>
      {label}: {count}
      <button type="button" onClick={handleIncrement}>
        {`加`}
      </button>
    </div>
  );
};

export default Counter;