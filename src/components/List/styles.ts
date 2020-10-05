import { stylesheet } from 'typestyle';

const styles = stylesheet({
  container: {
    padding: '2em'
  },
  list: {
    padding: '2em'
  },
  header: {
    width: '100%',
    background: '#f3f3f3'
  },
  headerItem: {
    padding: '1em',
    color: '#595c97'
  },
  headerItemLabel: {
    fontSize: '.9em',
    fontWeight: 600
  },
  rowItem: {
    padding: '1em',
    color: '#595c97'
  },
  rowItemLabel: {
    fontSize: '.9em',
    fontWeight: 600
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewButton: {
    color: '#595c97',
    background: '#f2f4f8',
    padding: '.5em 1em',
    textDecoration: 'none',
    borderRadius: '2px',
    fontWeight: 500
  },
  viewButtonLabe: {
    fontSize: '.9em'
  }
});

export default styles;
