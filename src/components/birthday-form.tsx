import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BirthdayFormProps {
  onSubmit: (id: number | null, name: string, date: string) => void
  editingBirthday: { id: number; name: string; date: string } | null
}

export function BirthdayForm({ onSubmit, editingBirthday }: BirthdayFormProps) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    if (editingBirthday) {
      setName(editingBirthday.name)
      setDate(editingBirthday.date)
    } else {
      setName('')
      setDate('')
    }
  }, [editingBirthday])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(editingBirthday ? editingBirthday.id : null, name, date)
    if (!editingBirthday) {
      setName('')
      setDate('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <Button type="submit">
          {editingBirthday ? 'Update Birthday' : 'Add Birthday'}
        </Button>
      </div>
    </form>
  )
}

