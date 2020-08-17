import * as React from 'react'

export interface AsyncHandlerProps<T> {
  handler: () => Promise<T>
  children(res: {
    state: State<T>
    execute: () => Promise<void>
  }): React.ReactNode
}

export interface State<T> {
  status: 'init' | 'executing' | 'executed' | 'failure'
  data: T | null
  error: Error | null
}

class AsyncHandler<T> extends React.Component<AsyncHandlerProps<T>, State<T>> {
  constructor(props: AsyncHandlerProps<T>) {
    super(props)
    this.state = {
      status: 'init',
      data: null,
      error: null,
    }
  }

  execute = async () => {
    try {
      this.setState({ status: 'executing' })
      const data = await this.props.handler()
      this.setState({ status: 'executed', data })
    } catch (error) {
      this.setState({ status: 'failure', error })
    }
  }

  render() {
    return this.props.children?.({ state: this.state, execute: this.execute })
  }
}

export default AsyncHandler
