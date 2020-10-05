import * as React from 'react';

export type OnChangeHandler<T> = <K extends keyof T>(value: T[K], key: K) => void;

export interface FormHandlerChildrenProps<T> {
  state: FormState<T>;
  reload?: () => Promise<void>;
  create?: () => Promise<void>;
  update?: () => Promise<void>;
  remove?: () => void;
  onChange: OnChangeHandler<T>;
}

export interface FormHandlerProps<T> {
  id?: string;
  onCreateSuccess?: (data: T) => void;
  onUpdateSuccess?: (data: T) => void;
  onRemoveSuccess?: (id: string) => void;
  getDefaultState: () => T;
  children(res: FormHandlerChildrenProps<T>): React.ReactNode;
  load?: (id: string) => Promise<T>;
  create?: (data: T) => Promise<T>;
  update?: (data: T) => Promise<T>;
  remove?: (id: string) => void;
}

export interface FormState<T> {
  status: string;
  data: T;
  error: Error | null;
}

export class FormHandler<T> extends React.Component<FormHandlerProps<T>, FormState<T>> {
  constructor(props: FormHandlerProps<T>) {
    super(props);
    this.state = {
      status: '',
      data: this.props.getDefaultState(),
      error: null
    };
  }

  componentDidMount() {
    this.load();
  }

  load = async () => {
    if (this.props.load) {
      if (!this.props.id) {
        return this.setState({
          status: 'loaded',
          data: this.props.getDefaultState()
        });
      }
      try {
        this.setState({ status: 'loading', error: null });
        const data = await this.props.load(this.props.id);
        this.setState({ status: 'loaded', data });
      } catch (error) {
        this.setState({ status: 'failure', error });
      }
    }
  };

  create = async () => {
    if (this.props.create) {
      try {
        this.setState({ status: 'creating', error: null });
        const data = await this.props.create(this.state.data);
        this.props.onCreateSuccess?.(data);
        this.setState({ status: 'created', data });
      } catch (error) {
        this.setState({ status: 'failure', error });
      }
    }
  };

  update = async () => {
    if (this.props.update && this.props.id) {
      try {
        this.setState({ status: 'updating', error: null });
        const data = await this.props.update(this.state.data);
        this.props.onUpdateSuccess?.(data);
        this.setState({ status: 'updated', data });
      } catch (error) {
        this.setState({ status: 'failure', error });
      }
    }
  };

  remove = async () => {
    if (this.props.remove && this.props.id) {
      try {
        this.setState({ status: 'deleting', error: null });
        await this.props.remove(this.props.id);
        this.setState({ status: 'removed' });
        this.props.onRemoveSuccess?.(this.props.id);
      } catch (error) {
        this.setState({ status: 'failure', error });
      }
    }
  };

  onChange: OnChangeHandler<T> = (value, key) => {
    this.setState((state) => ({
      error: null,
      data: {
        ...state.data,
        [key]: value
      }
    }));
  };

  render() {
    return this.props.children?.({
      state: this.state,
      onChange: this.onChange,
      reload: this.props.load ? this.load : undefined,
      remove: this.props.remove ? this.remove : undefined,
      create: this.props.create ? this.create : undefined,
      update: this.props.update ? this.update : undefined
    });
  }
}
