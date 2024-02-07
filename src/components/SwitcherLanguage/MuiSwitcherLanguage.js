export const menuLanguageStyle = {
  overflow: 'visible',
  mt: 1.5,
  '& .MuiPaper-root': {
    borderRadius: '10px',
    p: '16px',
    width: '150px',
    '@media (min-width: 320px)': {
      left: '52% !important',
      transform: 'translateX(-52%) !important',
    },
    '@media (min-width: 768px)': {
      left: '58% !important',
      transform: 'translateX(-58%) !important',
    },
    '@media (min-width: 1440px)': {
      left: '54% !important',
      transform: 'translateX(-54%) !important',
    },
  },
  '& .MuiMenu-list': {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '16px',
    padding: '0',
  },
  '& .MuiMenuItem-root': {
    p: 0,
    gap: '8px',
    minHeight: '26px',
    height: '26px',
  },
};
