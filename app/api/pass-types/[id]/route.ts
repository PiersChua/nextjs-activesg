import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const result = await prisma.passType.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!result) {
      return NextResponse.json(
        { message: "No pass type found" },
        { status: 400 }
      );
    }
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await prisma.passType.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({ message: "Pass type deleted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
