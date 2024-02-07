export const menuStyle = {
  overflow: 'visible',
  mt: 1.5,
  '& .MuiPaper-root': {
    borderRadius: '10px',
    p: '16px',
  },
  '& .MuiMenu-list': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '0',
  },
  '& .MuiMenuItem-root': {
    p: 0,
    gap: '8px',
    minHeight: '20px',
    height: '20px',
    lineHeight: '1.25',
    color: 'var(--primery-color-blue)',
    '&:hover': {
      color: 'var(--primery-color-black)',
      backgroundColor: 'white',
    },
    '&:hover svg': { stroke: 'var(--primery-color-black)' },
  },
};
