import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Birthday {
  id: number
  name: string
  date: string
}

interface BirthdayListProps {
  birthdays: Birthday[]
  onEdit: (birthday: Birthday) => void
  onDelete: (id: number) => void
}

export function BirthdayList({ birthdays, onEdit, onDelete }: BirthdayListProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pending Birthdays</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {birthdays.map((birthday) => (
            <TableRow key={birthday.id}>
              <TableCell>{birthday.name}</TableCell>
              <TableCell>{birthday.date}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEdit(birthday)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(birthday.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

