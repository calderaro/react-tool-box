import * as React from 'react';
import styles from './styles';

export interface ListProps<T> {
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => JSX.Element;
  renderHeader: () => JSX.Element;
}

export function List<T>(props: React.PropsWithChildren<ListProps<T>>): JSX.Element {
  const { data, renderItem, renderHeader } = props;
  return (
    <div className={styles.list}>
      {renderHeader()}
      {data.map((data) => renderItem(data))}
    </div>
  );
}

List.defaultProps = {
  getPath: () => '/'
};
