'use client'

import { useState } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { BirthdayForm } from './birthday-form'
import { BirthdayList } from './birthday-list'

interface Birthday {
  id: number
  name: string
  date: string
}

export default function BirthdayApp() {
  const [birthdays, setBirthdays] = useState<Birthday[]>([])
  const [editingBirthday, setEditingBirthday] = useState<Birthday | null>(null)

  const addBirthday = (name: string, date: string) => {
    const newBirthday: Birthday = {
      id: Date.now(),
      name,
      date,
    }
    setBirthdays([...birthdays, newBirthday])
  }

  const updateBirthday = (id: number, name: string, date: string) => {
    setBirthdays(
      birthdays.map((birthday) =>
        birthday.id === id ? { ...birthday, name, date } : birthday
      )
    )
    setEditingBirthday(null)
  }

  const deleteBirthday = (id: number) => {
    setBirthdays(birthdays.filter((birthday) => birthday.id !== id))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <BirthdayForm
          onSubmit={(id, name, date) => {
            if (id !== null) {
              updateBirthday(id, name, date)
            } else {
              addBirthday(name, date)
            }
          }}
          editingBirthday={editingBirthday}
        />
        <BirthdayList
          birthdays={birthdays}
          onEdit={setEditingBirthday}
          onDelete={deleteBirthday}
        />
      </main>
      <Footer />
    </div>
  )
}

