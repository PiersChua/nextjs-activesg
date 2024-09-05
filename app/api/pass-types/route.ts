import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const ageParam = req.nextUrl.searchParams.get("age");
    const age = ageParam ? parseInt(ageParam, 10) : null;

    const result = await prisma.passType.findMany({
      where: {
        ...(age !== null && {
          minAge: { lte: age },
          maxAge: { gte: age },
        }),
      },
    });
    if (!result) {
      return NextResponse.json(
        { message: "No pass types found" },
        { status: 404 }
      );
    }
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const result = await prisma.passType.create({
      data: { ...body },
    });
    if (!result) {
      return NextResponse.json(
        { message: "Failed to create pass type" },
        { status: 500 }
      );
    }
    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
