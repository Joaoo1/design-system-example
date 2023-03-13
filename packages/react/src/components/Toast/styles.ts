import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  position: 'absolute',
  bottom: 32,
  right: 32,
  display: 'flex',
  border: '1px solid $gray600',
  background: '$gray800',
  borderRadius: '$sm',
  width: 360,
  padding: '$3 $5',
  justifyContent: 'space-between',
  columnGap: '$2',

  svg: {
    minWidth: '20px',
    minHeight: '20px',
    color: '$gray200',
    cursor: 'pointer',
  },
})

export const ToastTitle = styled('h3', {
  fontFamily: '$default',
  color: '$white',
  lineHeight: '$base',
  fontSize: '$xl',
  margin: 0,
})

export const ToastText = styled('p', {
  fontFamily: '$default',
  color: '$gray200',
  lineHeight: '$base',
  fontSize: '$sm',
  marginTop: '$1',
  margin: 0,
})
