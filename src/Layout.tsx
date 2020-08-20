import * as React from 'react'
import Header from './Header'
import { style } from 'typestyle'
import UserMenu from './UserMenu'

const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const content = style({
  width: '100%',
  height: '100%',
  overflow: 'auto',
  scrollBehavior: 'smooth',
})

interface Props {
  brand?: string
}
interface State {
  usermenuOpen: boolean
}

class Layout extends React.Component<Props, State> {
  render() {
    const { usermenuOpen } = this.state
    const { children, authContext, brand } = this.props
    return (
      <div className={container} onClick={this.closeMenu}>
        <Header
          user={authContext.user}
          admin={authContext.isAdmin}
          onLogout={this.signOut}
          usermenuOpen={usermenuOpen}
          onUserButtonClick={this.toggleMenu}
          brand={brand}
          renderUsermenu={() => (
            <UserMenu
              onLogout={this.signOut}
              open={usermenuOpen}
              admin={authContext.isAdmin}
            />
          )}
        />
        <div className={content}>{children}</div>
      </div>
    )
  }
}

export default Layout
