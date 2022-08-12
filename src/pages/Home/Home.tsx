import React, { useState } from 'react'
import AskContainer from '../../components/AskContainer'
import LoginModal from '../../components/LoginModal'
import Navbar from '../../components/Navbar'
import { HomeProps } from '../../types'

export function Home({authenticated}: HomeProps) {
  const [showLoginModal, setShowLoginModal] = useState(false)
  return (
    <section className='w-full h-full relative'>
      <Navbar />
      <AskContainer showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
    </section>
  )
}
