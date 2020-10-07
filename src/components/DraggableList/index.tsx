import React from 'react';
import Draggable from '../Draggable';

interface DraggableListProps<T> {
  items: T[];
  keyExtractor: (item: T, index: number) => string | number;
  renderItem: (item: T, index: number) => JSX.Element;
  onChange?: (items: T[]) => void;
}

interface State {
  dragging: number | null;
  area: number | null;
}

export default class DraggableList<T> extends React.Component<DraggableListProps<T>, State> {
  constructor(props: DraggableListProps<T>) {
    super(props);
    this.state = {
      dragging: null,
      area: null
    };
  }
  onDrop = () => {
    const { dragging, area } = this.state;
    if (dragging !== null && area !== null) {
      const array = [...this.props.items];
      const element = array[dragging];
      array.splice(dragging, 1);
      array.splice(area, 0, element);
      this.props.onChange?.(array);
    }
  };
  render() {
    const { items, keyExtractor, renderItem } = this.props;
    return (
      <div>
        {items.map((item, index) => (
          <>
            <Draggable
              key={keyExtractor(item, index)}
              id={keyExtractor(item, index)}
              onDrop={this.onDrop}
              dragStart={() => this.setState({ dragging: index })}
              dragEnd={() => this.setState({ area: null })}
              dragEnter={() => this.setState({ area: index })}
            >
              {renderItem(item, index)}
            </Draggable>
          </>
        ))}
      </div>
    );
  }
}
