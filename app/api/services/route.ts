import mongoose from "mongoose";
import { NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { ServiceArea } from '@/models/ServiceArea'

// export async function GET() {
//   await dbConnect()
//   const items = await ServiceArea.find({}).sort({ name: 1 }).lean()
//   return NextResponse.json({ items })
// }
// export async function POST(req: Request) {
//   await dbConnect()
//   const body = await req.json()
//   const item = await ServiceArea.create(body)
//   return NextResponse.json({ ok: true, item })
// }

export async function GET() {
  await dbConnect();
  try {
    const areas = await ServiceArea.find().lean();
    return NextResponse.json({items: areas}, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await dbConnect();
  try {
    const body = await req.json();
    const { _id, ...data } = body;
    const created = await ServiceArea.create(data);
    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
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
