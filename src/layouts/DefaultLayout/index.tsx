import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { LayoutContainer } from './style'
import { PalettePopover } from '@/components/PalettePopover'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <PalettePopover/>
    </LayoutContainer>
  )
}