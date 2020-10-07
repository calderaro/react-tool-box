import React from 'react';

interface DraggableProps {
  id: string | number;
  dragStart?: () => void;
  dragEnd?: () => void;
  dragEnter?: () => void;
  dragLeave?: () => void;
  onDrop?: (area: 'high' | 'low') => void;
}

interface DraggableState {
  isDragging: boolean;
  isDraggingOver: boolean;
  draggingOverArea: null | 'high' | 'low';
}

export default class Draggable extends React.Component<DraggableProps, DraggableState> {
  div = React.createRef<HTMLDivElement>();
  constructor(props: DraggableProps) {
    super(props);
    this.state = {
      isDragging: false,
      isDraggingOver: false,
      draggingOverArea: null
    };
  }
  onDragStart = () => {
    this.setState({ isDragging: true });
    this.props.dragStart?.();
  };
  onDragEnd = () => {
    this.setState({ isDragging: false });
    window.requestAnimationFrame(() => {
      this.props.dragEnd?.();
    });
  };
  onDragEnter = () => {
    this.setState({ isDraggingOver: true });
    this.props.dragEnter?.();
  };
  onDragLeave = () => {
    this.setState({ isDraggingOver: false, draggingOverArea: null });
    this.props.dragLeave?.();
  };
  onDrop = () => {
    if (this.div.current && this.state.draggingOverArea) {
      this.props.onDrop?.(this.state.draggingOverArea);
    }
  };
  onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (this.div.current) {
      const { y, height } = this.div.current?.getBoundingClientRect();
      const mouseY = e.clientY + window.pageYOffset;
      const rectY = y + window.pageYOffset;
      const half = height / 2;
      if (mouseY > rectY && mouseY < rectY + height) {
        window.requestAnimationFrame(() => {
          this.setState({ draggingOverArea: mouseY < half + rectY ? 'high' : 'low' });
        });
      }
    }
  };
  render() {
    const { children } = this.props;

    return (
      <div
        ref={this.div}
        draggable
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
      >
        {children}
      </div>
    );
  }
}
