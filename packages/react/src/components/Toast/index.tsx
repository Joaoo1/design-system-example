import { X } from 'phosphor-react'

import { ToastContainer, ToastText, ToastTitle } from './styles'

export interface ToastProps {
  title: string
  text: string
  onClose: () => void
}

export function Toast({ title, text, onClose }: ToastProps) {
  return (
    <ToastContainer>
      <div>
        <ToastTitle>{title}</ToastTitle>
        <ToastText>
          {text}asdasdasd asdas dasdasdasdasdasdasdas a das das das dsdas
        </ToastText>
      </div>

      <X onClick={onClose} />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
