import { useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Trash2 } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { pt } from "date-fns/locale"

type DocumentItem = {
  id: number
  code?: string
  description?: string
  unity?: string
  quantity: number
  price: number
  totalGross: number
  vatCode?: string
  totalVat: number
  total: number
}

type Document = {
  number: number
  date: string
  name?: string
  totalVat: number
  totalDiscount: number
  totalGross: number
  total: number
  Items: DocumentItem[]
}

const clientes = ["Cliente A", "Cliente B", "Cliente C"]
const tiposDocumento = ["Fatura", "Carregamento"]

export function Invoice({ doc }: { doc?: Document }) {
  const [items, setItems] = useState<DocumentItem[]>(doc?.Items || [])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [form, setForm] = useState({ code: "", description: "", quantity: 1, price: 0 })

  const [cliente, setCliente] = useState(doc?.name || "")
  const [tipoDoc, setTipoDoc] = useState("Fatura")
  const [dataDoc, setDataDoc] = useState<Date>(doc?.date ? new Date(doc.date) : new Date())

  const handleAdd = () => {
    const quantity = Number(form.quantity)
    const price = Number(form.price)
    const total = quantity * price
    const vat = total * 0.17
    const totalGross = total - vat

    const newItem: DocumentItem = {
      id: Date.now(),
      code: form.code,
      description: form.description,
      unity: "un",
      quantity,
      price,
      totalGross,
      vatCode: "17%",
      totalVat: vat,
      total,
    }

    setItems([...items, newItem])
    setDialogOpen(false)
    setForm({ code: "", description: "", quantity: 1, price: 0 })
  }

  const removeItem = (id: number) => setItems(items.filter(item => item.id !== id))

  return (
    <Card className="p-6 space-y-4">
      <CardHeader className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold">Documento #{doc?.number ?? "—"}</h2>
            <p className="text-sm text-muted-foreground">Tipo: {tipoDoc}</p>
          </div>

          <Select value={tipoDoc} onValueChange={setTipoDoc}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo de Documento" />
            </SelectTrigger>
            <SelectContent>
              {tiposDocumento.map((tipo) => (
                <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={cliente} onValueChange={setCliente}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Selecionar Cliente" />
            </SelectTrigger>
            <SelectContent>
              {clientes.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[180px] justify-start text-left">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {format(dataDoc, "dd/MM/yyyy", { locale: pt })}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={dataDoc} onSelect={(d) => d && setDataDoc(d)} locale={pt} />
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex justify-end mb-4">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">+ Adicionar Linha</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Nova Linha</DialogTitle>
              </DialogHeader>
              <div className="space-y-2">
                <Input placeholder="Código" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
                <Input placeholder="Descrição" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                <Input type="number" placeholder="Quantidade" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: parseFloat(e.target.value) })} />
                <Input type="number" placeholder="Preço" value={form.price} onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })} />
                <Button onClick={handleAdd} className="w-full mt-2">Adicionar</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <table className="w-full text-sm border">
          <thead className="bg-muted">
            <tr>
              <th className="p-2 text-left">Código</th>
              <th className="p-2 text-left">Descrição</th>
              <th className="p-2 text-right">Qtd</th>
              <th className="p-2 text-right">Preço</th>
              <th className="p-2 text-right">IVA</th>
              <th className="p-2 text-right">Total</th>
              <th className="p-2 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-2">{item.code}</td>
                <td className="p-2">{item.description}</td>
                <td className="p-2 text-right">{item.quantity}</td>
                <td className="p-2 text-right">{item.price.toFixed(2)}</td>
                <td className="p-2 text-right">{item.totalVat.toFixed(2)}</td>
                <td className="p-2 text-right">{item.total.toFixed(2)}</td>
                <td className="p-2 text-center">
                  <Button size="icon" variant="ghost" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 space-y-1 text-right">
          <div>Total Bruto: {items.reduce((s, i) => s + i.totalGross, 0).toFixed(2)}</div>
          <div>IVA: {items.reduce((s, i) => s + i.totalVat, 0).toFixed(2)}</div>
          <div className="font-bold">Total: {items.reduce((s, i) => s + i.total, 0).toFixed(2)}</div>

          <Button className="mt-4" onClick={() => {
  console.log({
    tipoDocumento: tipoDoc,
    cliente,
    data: dataDoc,
    items
  })
  // aqui vai a chamada à API ou persistência local
}}>
  Gravar
</Button>
        </div>
      </CardContent>
    </Card>
  )
}
