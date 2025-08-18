import mongoose from "mongoose";
import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { ServiceArea } from '@/models/ServiceArea'

// export async function PUT(req: Request, { params }: { params: { id: string }}) {
//   await dbConnect()
//   const data = await req.json()
//   const updated = await ServiceArea.findByIdAndUpdate(params.id, data, { new: true })
//   return NextResponse.json({ ok: true, item: updated })
// }
// export async function DELETE(req: Request, { params }: { params: { id: string }}) {
//   await dbConnect()
//   await ServiceArea.findByIdAndDelete(params.id)
//   return NextResponse.json({ ok: true })
// }

export async function PUT(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const { _id, ...updateData } = body;

    if (!_id || !mongoose.Types.ObjectId.isValid(_id)) {
      return NextResponse.json({ error: "Invalid or missing _id" }, { status: 400 });
    }

    const updated = await ServiceArea.findByIdAndUpdate(_id, updateData, { new: true });
    if (!updated) {
      return NextResponse.json({ error: "Service area not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid or missing id" }, { status: 400 });
    }

    const deleted = await ServiceArea.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: "Service area not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
