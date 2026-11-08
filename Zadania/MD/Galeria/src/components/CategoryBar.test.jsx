import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import CategoryBar from './CategoryBar.jsx'

describe('CategoryBar', () => {
  it('Wywołuje onWybierz z poprawną kategorią po kliknięciu', async () => {
    const onWybierz = vi.fn()
    render(<CategoryBar aktywna="wszystkie" onWybierz={onWybierz} />)

    await userEvent.click(screen.getByRole('button', { name: 'Góry' }))

    expect(onWybierz).toHaveBeenCalledWith('gory')
  })

  it('Oznacza w odpowiedni sposób kategorię (przy użyciu aria-pressed)', () => {
    render(<CategoryBar aktywna="gory" onWybierz={() => {}} />)
    expect(screen.getByRole('button', { name: 'Góry' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Morze' })).toHaveAttribute('aria-pressed', 'false')
  })
})
