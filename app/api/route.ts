// import { NextResponse, NextRequest } from 'next/server'
// export async function POST(request: NextRequest) {
//   // recordinfo = request.body
//   return NextResponse.json({ body: request.text }, { status: 200 })
// }

import { type NextRequest } from 'next/server'
import DiskSave from "@/app/create/Disk"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const barcode = formData.get('barcode')?.toString()
  const location = formData.get('location')
  let Disk = DiskSave(barcode, location)
  if (await Disk) {
    return Response.json({ barcode, location })
  }
  else {
    return Response.json({ error: "Barcode is incomplete or not found" })
  }

}