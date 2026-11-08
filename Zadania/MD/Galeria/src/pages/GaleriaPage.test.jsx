import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import GaleriaPage from './GaleriaPage.jsx'

vi.mock('../services/zdjecia.js', () => ({
  pobierzZdjecia: () => Promise.reject(new Error('Brak sieci')),
}))

describe('GaleriaPage', () => {
  it('Wyświetla zrozumiały komunikat o błędzie zamiast pustej strony', async () => {
    render(<GaleriaPage />)

    expect(await screen.findByText(/Wystąpił błąd podczas pobierania zdjęć:/)).toBeInTheDocument()
  })
})
